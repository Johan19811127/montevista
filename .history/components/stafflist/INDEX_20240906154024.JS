import React from 'react';

const staffData = [
  {
    phase: 'FOUNDATION PHASE',
    grades: [
      {
        grade: 'GRADE R EDUCATORS',
        educators: [
          { name: 'BOTHA D', role: 'WCED', class: 'R1' },
          { name: 'COHENS T', role: 'WCED', class: 'R2' },
          { name: 'VAN TONDER C', role: 'WCED', class: 'R3 (MENTOR)' },
          { name: 'PRETORIUS F', role: 'SGB', class: 'R4' },
        ],
      },
      {
        grade: 'GRADE 1 EDUCATORS',
        educators: [
          { name: 'CARTER M', role: 'SGB', class: '1E1' },
          { name: 'KOEN R', role: 'WCED', class: '1E2' },
          { name: 'MILLER S', role: 'SGB', class: '1E3' },
          { name: 'CHRISTIANI M', role: 'WCED (MENTOR)', class: '1E4' },
        ],
      },
      // Add other grades here...
    ],
  },
  {
    phase: 'INTERMEDIATE PHASE',
    grades: [
      {
        grade: 'GRADE 4 EDUCATORS',
        educators: [
          { name: 'NEL F', role: 'SGB', class: '4E1' },
          { name: 'JACOBS L', role: 'SGB', class: '4E2' },
          { name: 'DU TOIT M', role: 'WCED (MENTOR)', class: '4E3' },
          { name: 'WILLIAMS A', role: 'SGB', class: '4E4' },
        ],
      },
      // Add other grades here...
    ],
  },
  // Continue with other phases like Senior Phase, Specialist Educators, etc...
];

const StaffList = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Laerskool Monte Vista Primary - Staff List 2024</h1>
      
      {staffData.map((phase) => (
        <div key={phase.phase} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">{phase.phase}</h2>
          
          {phase.grades.map((grade) => (
            <div key={grade.grade} className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{grade.grade}</h3>
              <table className="w-full table-auto bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="p-3 text-left">Class</th>
                    <th className="p-3 text-left">Educator</th>
                    <th className="p-3 text-left">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {grade.educators.map((educator, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{educator.class}</td>
                      <td className="p-3">{educator.name}</td>
                      <td className="p-3">{educator.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StaffList;