import React from 'react';

const BookChapters = () => {
  const chapters = [
    {
      chapter: "Chapter 5",
      title: "Magnetorheological Nano Finishing Processes",
      bookTitle: "Introduction to Micromachining",
      editors: "Prof. V. K. Jain",
      publisher: "Narosa Publishing House Pvt. Ltd.",
      publicationYear: "2010",
      isbn: "978-81-7319-915-8"
    },
    {
      chapter: "Chapter 8",
      title: "Nanofinishing Techniques",
      authors: "Sunil Jha and V. K. Jain",
      bookTitle: "Micromanufacturing and Nanotechnology",
      editor: "Prof. (Dr.) N. P. Mahalik",
      pages: "171-195",
      publicationYear: "2006",
      isbn: "3-540-25377-7",
      publisher: "Springer-Verlag"
    },
    {
      chapter: "Chapter 10",
      title: "Nanofinishing of Free Form Surfaces using BEMRF",
      authors: "Faiz Iqbal and Sunil Jha",
      bookTitle: "Nanofinishing Science and Technology: Basic and Advanced Finishing and Polishing Processes",
      editor: "Prof. V. K. Jain",
      publicationYear: "2017",
      isbn: "9781498745949",
      publisher: "CRC Press"
    }
  ];

  return (
    <div className="container mx-auto px-2 py-8 min-h-screen flex flex-col items-center justify-start mt-12">
      {/* Centered Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Book Chapters
      </h1>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto border border-gray-600">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-center text-xs md:text-sm text-white font-medium uppercase tracking-wider border border-gray-600">
                Chapter
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">
                Title
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">
                Book Title
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">
                Editors/Authors
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">
                Publisher
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-center text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">
                Year
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-center text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">
                ISBN
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {chapters.map((chapter, index) => (
              <tr key={index}>
                <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 bg-gray-100 border border-gray-600 text-center">
                  {chapter.chapter}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-normal text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-left">
                  {chapter.title}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-normal text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-left">
                  {chapter.bookTitle}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-normal text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-left">
                  {chapter.authors || chapter.editors}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-normal text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-left">
                  {chapter.publisher}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-center">
                  {chapter.publicationYear}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-center">
                  {chapter.isbn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookChapters;
