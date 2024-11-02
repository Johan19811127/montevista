// pages/sportsSchedule.js

import React from "react";

const ExtraMural = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center py-4">2024 Summer Sports Schedule</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Sport</th>
                <th className="px-4 py-2 text-left">Practice Days & Times</th>
                <th className="px-4 py-2 text-left">Matches</th>
                <th className="px-4 py-2 text-left">Coaches</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Tennis</td>
                <td className="border px-4 py-2">
                  <p>Juniors (Gr 1)</p>
                  <p>Mon & Thurs 13:45 – 14:45</p>
                  <p>Juniors (Gr 2)</p>
                  <p>Mon & Thurs 13:45 – 14:45</p>
                  <p>Juniors (Gr 3)</p>
                  <p>Mon & Thurs 14:15 – 15:15</p>
                  <p>Seniors (Gr 4 – 7)</p>
                  <p>Mon & Thurs 14:45 – 16:00</p>
                </td>
                <td className="border px-4 py-2">
                  <p>Seniors (Gr 4 – 7)</p>
                  <p>Wed 14:45 – 17:00</p>
                </td>
                <td className="border px-4 py-2">
                  <p>Juniors: T Cohens & W Toerien</p>
                  <p>Seniors: S Rodgers, M du Toit, L Wolmarans, F Nel, S Hamman, G Olivier & R Hagen</p>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border px-4 py-2">Mini Cricket</td>
                <td className="border px-4 py-2">
                  <p>Gr 0’7 & 0’8</p>
                  <p>Wed & Thurs 13:45-14:45</p>
                  <p>Gr 0’9</p>
                  <p>Wed & Thurs 14:15-15:15</p>
                </td>
                <td className="border px-4 py-2">
                  <p>Gr 0’7 & 0’8</p>
                  <p>Thurs 13:45-14:45</p>
                  <p>Gr 0’9</p>
                  <p>Thurs 14:15-15:15</p>
                </td>
                <td className="border px-4 py-2">
                  <p>Gr 0’7: D Botha & N Kennedy</p>
                  <p>Gr 0’8: C van Tonder & S Palvie Swart</p>
                  <p>Gr 0’9: Y Shamrock & M Carter</p>
                </td>
              </tr>
              {/* Continue adding rows similarly for other sports */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default extraMural;
