import React from "react";

const FITTConsultancyProjects = () => {
  const projects = [
    {
      projectNo: "FT/05/190",
      title: "Indigenous development of MR Fluid and demonstration of Proto MR device",
      startDate: "2011-08-02",
      amount: "21,35,250",
      status: "Ongoing",
    },
    {
      projectNo: "FT/03/153",
      title: "Vetting of Technical Loss Computation of BYPL",
      startDate: "2010-11-11",
      amount: "4,26,000",
      status: "Closed",
    },
    {
      projectNo: "FT/03/153",
      title: "Recommendation on Technical Loss Reduction of BYPL",
      startDate: "2010-11-11",
      amount: "4,88,000",
      status: "Closed",
    },
    {
      projectNo: "FT/03/156/1",
      title: "Solar Panel Design and Optimization for running tubewell",
      startDate: "2011-07-11",
      amount: "4,84,768",
      status: "Closed",
    },
    {
      projectNo: "FT/03/156/2",
      title: "Solar Power Operated Water Pump",
      startDate: "2011-07-11",
      amount: "4,66,569",
      status: "Closed",
    },
    {
      projectNo: "FT/03/157",
      title: "Validation of Selection and location of Surge Protection devices in Electrical Circuit at BTS Sites",
      startDate: "2011-09-19",
      amount: "16,65,000",
      status: "Closed",
    },
    {
      projectNo: "FT/05/172",
      title: "Development of Power Distribution Simulator",
      startDate: "2010-12-15",
      amount: "46,65,690",
      status: "Closed",
    },
    {
      projectNo: "FT/05/208",
      title: "Experimental Investigation into Magnetorheological Finishing of Glass",
      startDate: "2013-02-20",
      amount: "9,84,000",
      status: "Closed",
    },
    {
      projectNo: "FT/03/1604",
      title: "Design and Development of Smart Energy Monitoring and Control Device",
      startDate: "2012-04-10",
      amount: "25,00,000",
      status: "Closed",
    },
    {
      projectNo: "FT/05/1670",
      title: "Functional Testing and Validation of Sub-station monitoring system developed by BSES Yamuna Power Ltd.",
      startDate: "2013-02-26",
      amount: "6,51,688",
      status: "Closed",
    },
    {
      projectNo: "FT/03/1820",
      title: "Techno-Economic Study for Mechanization of conventional food grain storage warehouse",
      startDate: "2015-06-09",
      amount: "11,86,522",
      status: "Closed",
    },
    {
      projectNo: "FT/03/1856",
      title: "Validation of Existing Tower Lightening and Earthing scheme as per Indian Standards",
      startDate: "2015-11-02",
      amount: "5,01,510",
      status: "Closed",
    },
  ];

  // Sort projects by startDate (descending) but keep ongoing projects on top
  const sortedProjects = projects.sort((a, b) => {
    if (a.status === "Ongoing" && b.status !== "Ongoing") return -1;
    if (a.status !== "Ongoing" && b.status === "Ongoing") return 1;
    return new Date(b.startDate) - new Date(a.startDate); // Sort descending by start date
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          FITT Consultancy Projects
        </h1>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border-collapse">
            <thead className="bg-green-600  text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-left border border-gray-300">Project No.</th>
                <th className="px-6 py-3 text-sm font-semibold text-left border border-gray-300">Title</th>
                <th className="px-6 py-3 text-sm font-semibold text-left border border-gray-300">Start Date</th>
                <th className="px-6 py-3 text-sm font-semibold text-left border border-gray-300">Amount (₹)</th>
                <th className="px-6 py-3 text-sm font-semibold text-left border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedProjects.map((project, index) => (
                <tr
                  key={index}
                  className={`border border-gray-300 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition duration-200`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{project.projectNo}</td>
                  <td className="px-6 py-4 text-sm text-left text-gray-700">{project.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{project.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{project.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                    {project.status === "Ongoing" ? (
                      <span className="inline-flex items-center text-green-600 font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L8.414 15H7v-1.414l8.293-8.293a1 1 0 011.414 0zM5 17a2 2 0 11-4 0 2 2 0 014 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {project.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-red-600 font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {project.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FITTConsultancyProjects;
