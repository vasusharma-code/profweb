from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import os
import datetime
import time  # Add this import


load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  


def read_text_file(file_path):
    """Read content from a text file."""
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            return file.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return ""

def split_text_into_chunks(text, chunk_size=1000, overlap=200):
    """Split text into manageable chunks for embeddings."""
    if not text:
        return []
    chunks = []
    for i in range(0, len(text), chunk_size - overlap):
        chunks.append(text[i: i + chunk_size])
    return chunks

def get_vector_store(text_chunks):
    """Store text chunks as embeddings in FAISS."""
    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def get_conversational_chain():
    """Set up the conversational chain with an improved prompt."""
    prompt_template = """
    You are a professional and intelligent assistant. Based on the given context, provide a detailed and accurate response.

    Rules:
    1. If the answer is directly available in the context, provide it clearly
    2. If the answer is partially available, combine it with relevant knowledge
    3. If the answer is not in the context, explicitly state that and offer to search online
    4. Always maintain a professional and helpful tone

    Context:\n{context}\n
    Question:\n{question}\n

    Answer:
    """
    model = ChatOpenAI(openai_api_key=OPENAI_API_KEY, temperature=0.7)  # Increased temperature for more creative responses
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    return load_qa_chain(model, chain_type="stuff", prompt=prompt)

def process_user_input(user_question):
    """Enhanced user input processing with sequential responses."""
    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    new_db = FAISS.load_local("faiss_index", embeddings)
    docs = new_db.similarity_search(user_question)
    
    chain = get_conversational_chain()
    response = chain(
        {"input_documents": docs, "question": user_question},
        return_only_outputs=True
    )
    
    answer = response["output_text"].strip()
    
    # Check if answer indicates no information in context
    if "not in the context" in answer.lower() or not answer:
        model = ChatOpenAI(openai_api_key=OPENAI_API_KEY, temperature=0.7)
        fallback_response = model.predict(
            f"""Question: {user_question}
            Please provide a helpful response based on general knowledge."""
        )
        return {
            "type": "out_of_context",
            "messages": [
                "I apologize, but I don't have this information in my immediate context.",
                "Let me search Google for you...",
                fallback_response
            ]
        }
    
    return {
        "type": "in_context",
        "messages": [answer]
    }

def setup_data():
    """Load and process data from the text file before the first request."""
    file_path = "prof_sunil_jha.txt" 
    print("Reading content from the file...")
    all_content = read_text_file(file_path)

    if not all_content.strip():
        print("Failed to read content from the file.")
        return

    print("Processing data...")
    text_chunks = split_text_into_chunks(all_content)
    if not text_chunks:
        print("No valid text chunks to process.")
        return

    get_vector_store(text_chunks)
    print("Data setup complete!")


setup_data()


@app.route('/api/chatbot', methods=['POST'])
def chatbot_endpoint():
    try:
        data = request.get_json()
        user_question = data.get("question", "")
        
        if not user_question:
            return jsonify({"error": "Question is required"}), 400
        
        response = process_user_input(user_question)
        return jsonify(response)
        
    except Exception as e:
        return jsonify({
            "error": "An error occurred while processing your request.",
            "details": str(e)
        }), 500


@app.route('/api/greeting', methods=['GET'])
def greeting_endpoint():
    try:
        current_hour = datetime.datetime.now().hour
        if current_hour < 12:
            greeting = "Good Morning"
        elif current_hour < 18:
            greeting = "Good Afternoon"
        else:
            greeting = "Good Evening"
        return jsonify({"greeting": greeting})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)
