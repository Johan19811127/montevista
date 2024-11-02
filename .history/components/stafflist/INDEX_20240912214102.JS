// StaffList2024.js
import React from 'react';

const StaffList2024 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Laerskool Monte Vista Primary - Staff List 2024
      </h1>

      {/* Foundation Phase */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Foundation Phase</h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 ">Phase</th>
              <th className="px-4 py-2 ">Grade</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Educator</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2" rowSpan={16}>Foundation phase</td>
              <td className="border px-4 py-2" rowSpan={4}>Grade R</td>
              <td className="border px-4 py-2">R1</td>
              <td className="border px-4 py-2">Botha D</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">R2</td>
              <td className="border px-4 py-2">Cohens T</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">R3 (Mentor)</td>
              <td className="border px-4 py-2">Van Tonder C</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">R4</td>
              <td className="border px-4 py-2">Pretorius F</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2" rowSpan={4}>Grade 1</td>
              <td className="border px-4 py-2">1E1</td>
              <td className="border px-4 py-2">Carter M</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">1E2</td>
              <td className="border px-4 py-2">Koen R</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">1E3</td>
              <td className="border px-4 py-2">Miller S</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">1E4 (Mentor)</td>
              <td className="border px-4 py-2">Christiani M</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2" rowSpan={4}>Grade 2</td>
              <td className="border px-4 py-2">2E1</td>
              <td className="border px-4 py-2">Karsten A</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">2E2</td>
              <td className="border px-4 py-2">Hartzenberg M</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">2E3 (Mentor)</td>
              <td className="border px-4 py-2">Claassens C</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">2E4</td>
              <td className="border px-4 py-2">Swart SP</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2" rowSpan={4}>Grade R</td>
              <td className="border px-4 py-2">3E1</td>
              <td className="border px-4 py-2">Lamont B</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">3E2 (Dept Head)</td>
              <td className="border px-4 py-2">Steyn B</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">3E3 (Mentor)</td>
              <td className="border px-4 py-2">Koeries C</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">3E4 (Acting Dept Head)</td>
              <td className="border px-4 py-2">Vasconselos C</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Intermediate Phase */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Intermediate Phase</h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Educator</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">4E1</td>
              <td className="border px-4 py-2">Nel F</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">4E2</td>
              <td className="border px-4 py-2">Jacobs L</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">4E3 (Mentor)</td>
              <td className="border px-4 py-2">Du Toit M</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">4E4</td>
              <td className="border px-4 py-2">Williams A</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">5E1</td>
              <td className="border px-4 py-2">Faiers A</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">5E2</td>
              <td className="border px-4 py-2">Verwey R</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">5E3</td>
              <td className="border px-4 py-2">Swart T</td>
              <td className="border px-4 py-2">Substitute WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">5E4 (Mentor)</td>
              <td className="border px-4 py-2">Wolmarans L</td>
              <td className="border px-4 py-2">WCED Contract</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">6A</td>
              <td className="border px-4 py-2">Duncan M</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">6E1</td>
              <td className="border px-4 py-2">Janse Van Rensburg L</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">6E2</td>
              <td className="border px-4 py-2">Hamman S</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">6E3 (Mentor)</td>
              <td className="border px-4 py-2">Kleyn A</td>
              <td className="border px-4 py-2">WCED Contract</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Senior Primary - Grade 7 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Senior Primary - Grade 7</h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Educator</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">7A</td>
              <td className="border px-4 py-2">Rabe R</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">7E1</td>
              <td className="border px-4 py-2">Verwey V</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">7E2 (Mentor)</td>
              <td className="border px-4 py-2">Ford J</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">7E3</td>
              <td className="border px-4 py-2">Van Der Merwe</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Specialist Educators */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Specialist Educators</h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">Subject Teacher / Dept Head</td>
              <td className="border px-4 py-2">Payne M</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Remedial Teacher / Dept Head</td>
              <td className="border px-4 py-2">Kunneke PF</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Music</td>
              <td className="border px-4 py-2">Patterson L</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Art</td>
              <td className="border px-4 py-2">Lomas G</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Coding & Robotics</td>
              <td className="border px-4 py-2">Da Silva D</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Extra-Mural Head</td>
              <td className="border px-4 py-2">Laubscher H</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Counsellor</td>
              <td className="border px-4 py-2">Rodgers S</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">LSEN</td>
              <td className="border px-4 py-2">Olivier G</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">isiXhosa</td>
              <td className="border px-4 py-2">Mcosana L</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Life Skills - FP</td>
              <td className="border px-4 py-2">Shamrock Y</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Life Skills - PT - Intersen</td>
              <td className="border px-4 py-2">Theron T</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Admin and General Assistants */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Admin and General Assistants</h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">Financial Officer</td>
              <td className="border px-4 py-2">Cronje J</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Admin Head</td>
              <td className="border px-4 py-2">Abrahams N</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Admin Clerk</td>
              <td className="border px-4 py-2">Arendse R</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Debtors Clerk</td>
              <td className="border px-4 py-2">Scheepers K</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Public Relations & System Control</td>
              <td className="border px-4 py-2">Cronje J</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Acting Deputy / Curricular Head</td>
              <td className="border px-4 py-2">Du Plessis L</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Headmaster</td>
              <td className="border px-4 py-2">Swart S</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* General Assistants */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">General Assistants</h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">Grounds & Maintenance</td>
              <td className="border px-4 py-2">Roux R</td>
              <td className="border px-4 py-2">WCED</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Rudolph T</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Rooy G</td>
              <td className="border px-4 py-2">WCED Contract</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">MacPherson B</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Felix A</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Facility Manager</td>
              <td className="border px-4 py-2">Jackson M</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Golding M</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Keyser B</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Everts J</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Nyazeka B</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Papier C</td>
              <td className="border px-4 py-2">SGB</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StaffList2024;

