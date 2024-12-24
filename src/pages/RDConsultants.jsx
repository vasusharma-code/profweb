import React from "react";

const RDConsultants = () => {
  const rdConsultingPI = [
    {
      title: "Conduct 2nd Meeting of Programme Advisory Committee on Device Development Programme of DST at Department of Mechanical Engineering",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 1200000.00,
      startDate: "25-07-2017",
      endDate: "30-11-2017"
    },
    {
      title: "Design and Development of Magneto & Electro Rheological Systems",
      sponsorAgency: "Defence Materials & Stores Research & Development, India",
      amount: 7700000.00,
      startDate: "01-07-2017",
      endDate: "31-12-2019"
    },
    {
      title: "Design and Development of Automated Flexible Abrasive Flow Finishing (AF-AFF) Process for Finishing of Micro to Macro Complex Features",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 4307380.00,
      startDate: "09-09-2016",
      endDate: "08-09-2019"
    },
    {
      title: "Advanced CNC Micromachining System with Integrated Micro Tool Manufacturing",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 31743619.00,
      startDate: "11-05-2016",
      endDate: "10-05-2019"
    },
    {
      title: "Laser Based Marksmanship and Tactical Training Simulator (LMTTS)",
      sponsorAgency: "Simulator Development Division (Indian Army), India",
      amount: 4900000.00,
      startDate: "24-02-2015",
      endDate: "23-02-2018"
    },
    {
      title: "Design & Development of CNC Magnetorheological Finishing (MRF) System",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 12239200.00,
      startDate: "06-09-2012",
      endDate: "31-03-2016"
    },
    {
      title: "Magnetorheological Evaluation of Smart Polishing Fluid Properties and their Role in Nanofinishing",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 1260000.00,
      startDate: "16-03-2009",
      endDate: "15-03-2012"
    }
  ];

  const rdConsultingCP = [
    {
      title: "Energy Efficient Buildings: Technology with Intelligence",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 31841600.00,
      startDate: "03-04-2017",
      endDate: "02-04-2020"
    },
    {
      title: "Modelling of Advanced Materials for Simulation of Transformative Manufacturing Processes",
      sponsorAgency: "International Division, Dept. of Science & Techn., United Kingdom",
      amount: 10043600.00,
      startDate: "16-12-2014",
      endDate: "31-03-2018"
    },
    {
      title: "Development of Cryogenically Coupled Vibratory EDM Processes to Machine Hard Materials and Conducting Ceramics",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 3575000.00,
      startDate: "07-10-2010",
      endDate: "31-03-2014"
    },
    {
      title: "Adaptive Force Control of an Industrial Robot (KUKA KR-6) Equipped with Force/Torque Sensor (Sub-project #4 under the main project #RP02346)",
      sponsorAgency: "Board of Research in Nuclear Sciences (DAE), India",
      amount: 14300800.00,
      startDate: "04-05-2010",
      endDate: "31-07-2016"
    },
    {
      title: "Experimental Investigations and Analysis of Ultrasonic Assisted Magnetic Abrasive Finishing (UAMAF) Process",
      sponsorAgency: "Council of Scientific & Industrial Research, India",
      amount: 2735476.00,
      startDate: "15-11-2009",
      endDate: "30-11-2013"
    }
  ];

  const sortedPI = rdConsultingPI.sort((a, b) =>
    new Date(b.startDate.split("-").reverse().join("-")) -
    new Date(a.startDate.split("-").reverse().join("-"))
  );

  const sortedCP = rdConsultingCP.sort((a, b) =>
    new Date(b.startDate.split("-").reverse().join("-")) -
    new Date(a.startDate.split("-").reverse().join("-"))
  );

  return (
    <div className="font-sans p-5 max-w-3xl mx-auto min-h-screen mt-14">
      <h1 className="text-3xl font-bold text-center mb-8">R&D Consulting</h1>
      
      {/* R&D Consulting (PI) */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5">R&D Consulting (PI)</h2>
        <div className="grid grid-cols-1 gap-5">
          {sortedPI.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between h-[180px] w-full"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Sponsor Agency:</span> {item.sponsorAgency}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Amount:</span> ₹{item.amount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Duration:</span> {item.startDate} to {item.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* R&D Consulting (CP) */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5">R&D Consulting (CP)</h2>
        <div className="grid grid-cols-1 gap-5">
          {sortedCP.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between h-[180px] w-full"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Sponsor Agency:</span> {item.sponsorAgency}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Amount:</span> ₹{item.amount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Duration:</span> {item.startDate} to {item.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RDConsultants;
