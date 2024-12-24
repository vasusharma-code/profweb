import React from 'react';

const IndustrialExperience = () => {
  const experiences = [
    {
      company: 'I.I.T. Kanpur',
      period: 'Dec 2006 – July 2007',
      position: 'Sr. Project Engineer (BARC Sponsored Project)',
    },
    {
      company: 'TATA Motors',
      period: 'May 1998 – July 2000',
      position: 'Sr. Engineer (CAD/CAM)',
    },
    {
      company: 'IAFSM',
      period: 'Present',
      position: 'Founder/Director',
    },
  ];

  return (
    <div className="container mx-auto px-2 py-8 min-h-screen flex flex-col items-center justify-start mt-12">
      {/* Centered Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Industrial Experience
      </h1>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto border border-gray-600">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-center text-xs md:text-sm text-white font-medium uppercase tracking-wider border border-gray-600">
                Company
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-center text-xs md:text-sm text-white font-medium uppercase tracking-wider border border-gray-600">
                Period
              </th>
              <th className="px-2 md:px-4 py-2 bg-green-600 text-center text-xs md:text-sm text-white font-medium uppercase tracking-wider border border-gray-600">
                Position
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {experiences.map((exp, index) => (
              <tr key={index}>
                <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 bg-gray-100 border border-gray-600 text-center">
                  {exp.company}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-center">
                  {exp.period}
                </td>
                <td className="px-2 md:px-4 py-2 whitespace-normal text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-center">
                  {exp.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndustrialExperience;
