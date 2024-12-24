import React from 'react';

const Patents = () => {
  const patents = {
    filed: [
      {
        title: "A device for magnetic Abrasive Finishing of multiple workpieces and Magnetic Abrasive Finishing Process",
        applicationNo: "2309/DEL/2008",
        applicant: "I.I.T. Kanpur",
        inventors: ["Sandeep R Nair", "J. Ramkumar", "Sunil Jha"]
      },
      {
        title: "Process of generating magnetically controlled ball end smart abrasive laden shape for finishing of 3D intricate shaped surfaces",
        applicationNo: "394/DEL/2010",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "P. M. Pandey", "Anant K. Singh"]
      },
      {
        title: "Patent of addition on 'An improved magnetorheological finishing apparatus for stable, scalable and continuous finishing application'",
        applicationNo: "2611/DEL/2011",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "P. M. Pandey", "Anant K. Singh"]
      },
      {
        title: "Process and System for Nano-Finishing a Surface",
        applicationNo: "201711038585",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "Faiz Iqbal"]
      },
      {
        title: "Bending of Orthopaedic Plates",
        applicationNo: "201711038563",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "Lalit Maini"]
      }
    ],
    granted: [
      {
        title: "An abrasive flow finishing device, an abrasive flow finishing process and Magnetorheological polishing fluid",
        applicationNo: "1991/DEL/2005",
        applicant: "I.I.T. Kanpur",
        inventors: ["Sunil Jha", "Vijay Kumar Jain"]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Patents</h1>

        {/* Patent Summary Section */}
        <div className="mb-8 rounded-lg bg-white shadow-lg p-6">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Patent Summary</h2>
  <div className="flex justify-center items-center text-lg text-gray-700">
    <div className="mr-4 text-green-500 font-semibold">Filed: 5</div>
    <div className="text-red-500 font-semibold">Granted: 1</div>
  </div>
</div>


        {/* Filed Patents Table */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filed Patents</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full table-auto">
              <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700">
                <tr>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Title</th>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Application No.</th>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Applicant</th>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Inventors</th>
                </tr>
              </thead>
              <tbody>
                {patents.filed.map((patent, index) => (
                  <tr key={index} className={`border-b border-gray-300 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.title}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.applicationNo}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.applicant}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.inventors.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Granted Patents Table */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Granted Patents</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full table-auto">
              <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700">
                <tr>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Title</th>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Application No.</th>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Applicant</th>
                  <th className="w-1/4 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">Inventors</th>
                </tr>
              </thead>
              <tbody>
                {patents.granted.map((patent, index) => (
                  <tr key={index} className={`border-b border-gray-300 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.title}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.applicationNo}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.applicant}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{patent.inventors.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patents;
