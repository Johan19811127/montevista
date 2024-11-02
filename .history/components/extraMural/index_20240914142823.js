// pages/sportsSchedule.js

import React from "react";

const ExtraMural = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center py-4">2024 Summer Sports Schedule</h1>
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-left">Sport</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Oefendae &amp; Tye / Practice Days &amp; Times</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Wedstryde / Matches</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Afrigters / Coaches</th>
          </tr>
        </thead>
        <tbody>
          {/* Tennis */}
          <tr>
            <td rowSpan="4" className="border border-gray-400 px-4 py-2">Tennis</td>
            <td className="border border-gray-400 px-4 py-2">Juniors (Gr 1) - Ma/Mon &amp; Don/Thurs 13:45 – 14:45</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">T Cohens &amp; W Toerien</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Juniors (Gr 2) - Ma/Mon &amp; Don/Thurs 13:45 – 14:45</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">M Hartzenberg &amp; F Pretorius</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Juniors (Gr 3) - Ma/Mon &amp; Don/Thurs 14:15 – 15:15</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">C Vasconcelos &amp; B Lamont</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Seniors (Gr 4 – 7) - Ma/Mon &amp; Don/Thurs 14:45 – 16:00</td>
            <td className="border border-gray-400 px-4 py-2">Wed/Woens 14:45 – 17:00</td>
            <td className="border border-gray-400 px-4 py-2">S Rodgers, M du Toit, L Wolmarans, F Nel, S Hamman, G Olivier &amp; R Hagen</td>
          </tr>
          {/* Mini-Cricket */}
          <tr>
            <td rowSpan="3" className="border border-gray-400 px-4 py-2">Mini-Krieket / Cricket</td>
            <td className="border border-gray-400 px-4 py-2">0’7 &amp; 0’8 - Woens/Wed &amp; Don/Thurs 13:45 – 14:45</td>
            <td className="border border-gray-400 px-4 py-2">Don/Thurs 13:45 – 14:45</td>
            <td className="border border-gray-400 px-4 py-2">(0/7) D Botha &amp; N Kennedy, (0/8) C van Tonder &amp; S Palvie Swart</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">0’9 - Woens/Wed &amp; Don/Thurs 14:15 – 15:15</td>
            <td className="border border-gray-400 px-4 py-2">Don/Thurs 14:15 – 15:15</td>
            <td className="border border-gray-400 px-4 py-2">Y Shamrock &amp; M Carter</td>
          </tr>
          {/* Cricket */}
          <tr>
            <td rowSpan="4" className="border border-gray-400 px-4 py-2">Krieket / Cricket</td>
            <td className="border border-gray-400 px-4 py-2">0’10 - Ma/Mon &amp; Woens/Wed 14:45 – 15:45</td>
            <td className="border border-gray-400 px-4 py-2">Ma/Mon 14:45 – 17:30</td>
            <td className="border border-gray-400 px-4 py-2">L Jacobs &amp; Y Nxiwa</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">0’11 - Ma/Mon &amp; Woens/Wed 14:45 – 15:45</td>
            <td className="border border-gray-400 px-4 py-2">Woens/Wed 14:45 – 17:30</td>
            <td className="border border-gray-400 px-4 py-2">D Abrahams &amp; T Swart</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">0’12 - Dins/Tues &amp; Don/Thurs 14:45 – 15:45</td>
            <td className="border border-gray-400 px-4 py-2">Dins/Tues 14:45 – 17:30</td>
            <td className="border border-gray-400 px-4 py-2">G Lomas</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">0’13 - Ma/Mon 14:45 – 15:45 &amp; Don/Thurs 14:45 – 15:45</td>
            <td className="border border-gray-400 px-4 py-2">Don/Thurs 14:45 – 17:30</td>
            <td className="border border-gray-400 px-4 py-2">H Laubscher</td>
          </tr>
          {/* Athletics */}
          <tr>
            <td rowSpan="4" className="border border-gray-400 px-4 py-2">Atletiek / Athletics</td>
            <td className="border border-gray-400 px-4 py-2">Junior (0’7) - Woens/Wed &amp; Don/Thurs 13:45 – 14:45</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">S Miller &amp; J Anderson</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Junior (0’8) - Woens/Wed &amp; Don/Thurs 13:45 – 14:45</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">A Karsten, M Nombewu &amp; C Claassens</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Junior (0’9) - Woens/Wed &amp; Don/Thurs 14:15 – 15:15</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">C Koeries &amp; C Hafit</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Senior (0’10 – 0’13) - Ma/Mon, Woens/Wed &amp; Don/Thurs 14:45 – 15:45</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">D Da Silva, M van der Merwe, R Koen, A Kleyn, A Williams, T Theron, J Ford, R Verwey &amp; L Janse van Rensburg</td>
          </tr>
          {/* Choir */}
          <tr>
            <td rowSpan="2" className="border border-gray-400 px-4 py-2">Koor / Choir</td>
            <td className="border border-gray-400 px-4 py-2">Senior - Ma/Mon &amp; Don/Thurs 07:15 – 08:15</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">R Rabe, L Patterson, &amp; A Faiers</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Junior - Dins/Tues 14:00 – 15:00</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">L Patterson</td>
          </tr>
          {/* Library */}
          <tr>
            <td className="border border-gray-400 px-4 py-2">Biblioteek / Library</td>
            <td className="border border-gray-400 px-4 py-2">Ma/Mon &amp; Woens/Wed 14:45 – 15:45</td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2">V Verwey &amp; M Duncan</td>
          </tr>
        </tbody>
      </table>
    
        </div>
      </div>
    </div>
  );
};

export default ExtraMural;
