import React from 'react';
import { Link } from 'react-router-dom';

const IAFSMPage = () => {
  return (
    <div className="container mx-auto px-6 py-12 min-h-screen mt-14">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">IAFSM - Foundation for Smart Manufacturing (FSM)</h1>

      {/* Founder Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-accent mb-4">About Dr. Sunil Jha</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Dr. Sunil Jha is the Founder and Director of the IAFSM Lab (Automation Lab), located at the Department of Mechanical Engineering, IIT Delhi.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-accent mb-4">Our Services</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          At FSM, we provide comprehensive Smart Manufacturing solutions, including:
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg">Education & Training</h3>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg">Consulting</h3>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg">Site Integration</h3>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg">Prototyping</h3>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg">Research</h3>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg">AR/VR Development</h3>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-gray-700">
          Our services empower clients to test, debug, and innovate with the latest Industry 4.0 technologies, ensuring smooth transitions and operational efficiency.
        </p>
      </section>

      {/* Samarth Knowledge Network (SKN) */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-accent mb-4">Samarth Knowledge Network (SKN)</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          The Samarth Knowledge Network (SKN) is a strategic initiative under FSM that aims to create a collaborative ecosystem for institutes, universities, and research institutions. SKN connects academic institutions with cutting-edge smart manufacturing technologies and industry practices, facilitating a symbiotic relationship that benefits education and industry.
        </p>
      </section>

      {/* About Us Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-accent mb-4">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          The Foundation for Smart Manufacturing (FSM) empowers the Indian industry to explore, develop, and implement Smart Manufacturing solutions. We provide a platform for businesses to witness, ideate, and test advanced manufacturing concepts in real-world environments. FSM also fosters a comprehensive educational ecosystem, offering specialized skill-building programs developed in collaboration with industry experts and academic leaders.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          Our FSM Skills platform delivers immersive training through live lectures, online learning, live demonstrations, and self-paced exercises on remotely accessible hardware, ensuring hands-on experience with cutting-edge Industry 4.0 technologies.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-accent mb-4">Why Choose Us</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          At FSM, we are committed to empowering both individuals and organizations by transforming them from Smart to Samarth (capable). Our mission is to equip you with the tools and knowledge to thrive in the era of Industry 4.0.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          By partnering with FSM, you gain access to a diverse range of smart manufacturing solutions designed to meet your specific needs. Whether you are seeking to upgrade your workforce’s skills, optimize your manufacturing processes, or implement cutting-edge technologies such as automation, robotics, AI, or IIoT, FSM is your trusted partner in this journey.
        </p>
      </section>

      {/* Strong Academic Connect Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-accent mb-4">Strong Academic Connect</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          With the academic strength of IIT Delhi, FSM benefits from interdisciplinary learnings. Expert faculty members across various departments contribute to the development of our programs, ensuring cutting-edge training and research.
        </p>
      </section>

      {/* Consultation to Execution Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-accent mb-4">Consultation to Execution</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          FSM’s highly trained teams provide comprehensive guidance, from concept to execution. We implement Industry 4.0 projects with expert support from faculty members and industry leaders, ensuring seamless integration and measurable results.
        </p>
      </section>

      {/* Lab Equipment Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-accent mb-4">Lab Equipment</h2>
        <ul className="space-y-4 text-lg leading-relaxed text-gray-700">
          <li><strong>3 Axis CNC Magnetoreological Finishing Machine</strong> - Fully automated finishing system for nanofinishing of metals and dies for optical applications.</li>
          <li><strong>2 Layer PCB Designing Machine</strong> - PCB milling for advanced applications, supports drilling vias and through-holes.</li>
          <li><strong>Pneumatic Kit</strong> - Pneumatic circuit design and hands-on experience for high-speed industrial applications.</li>
          <li><strong>Hydraulic Kit</strong> - Hydraulic circuits design and hands-on experience for high-power industrial applications.</li>
          <li><strong>Programmable Automation Controller</strong> - Ethercat-based Parker Automation Controller, controlling up to 64 axes in interpolation mode.</li>
          <li><strong>Human Machine Interface</strong> - Connects operator to the controller with a human-readable visual representation of automatic systems.</li>
          <li><strong>Fiber Laser Source</strong> - 50W fiber laser source for 3D surface creation and micromachining of complex shapes.</li>
          <li><strong>Digital Microscope with CCD Camera</strong> - Motorized zoom microscope with 256X zoom capacity, 5Mpixel resolution, and 3D image creation software.</li>
          <li><strong>Confocal Displacement Thickness Sensor</strong> - Surface analysis for nano-finishing with a resolution of 10nm.</li>
          <li><strong>Force and Torque Measurement Sensor</strong> - 6-axis force and torque measurement for precise monitoring of mechanical systems.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-accent mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">For inquiries or implementing Smart Manufacturing solutions, reach out to us:</p>
        <p className="text-lg leading-relaxed text-gray-700"><strong>Phone:</strong> +91 11 2090 4168</p>
        <p className="text-lg leading-relaxed text-gray-700"><strong>Email:</strong> <a href="mailto:info@iafsm.in" className="text-blue-600 hover:text-blue-800">info@iafsm.in</a></p>
      </section>
    </div>
  );
};

export default IAFSMPage;
