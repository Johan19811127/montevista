// StaffList2024.js
import React from 'react';

const StaffList2024 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
       Monte Vista Primary School - Staff List 
      </h1>

      {/* Foundation Phase */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Educators</h2>

        <table className=" border border-blue-800 w-full lg:w-[1200px] mx-auto mb-6 shadow-lg ">
          <thead>
            <tr className="bg-blue-500 text-white text-md font-semibold border border-white">
              <th className="px-4 py-2 border border-white ">Phase</th>
              <th className="px-4 py-2 border border-white ">Grade</th>
              <th className="px-4 py-2 border border-white">Class</th>
              <th className="px-4 py-2 border border-white">Educator</th>
         
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center" rowSpan={16}>Foundation phase</td>
              <td className="border px-4 py-2 text-center" rowSpan={4}>Grade R</td>
              <td className="border px-4 py-2 ">R1</td>
              <td className="border px-4 py-2">Botha D</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">R2</td>
              <td className="border px-4 py-2">Cohens T</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">R3 (Mentor)</td>
              <td className="border px-4 py-2">Van Tonder C <span className="rounded-full -my-2 mx-2 py-[7px] px-[10pxtext-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">R4</td>
              <td className="border px-4 py-2">Pretorius F</td>
           
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 1</td>
              <td className="border px-4 py-2">1E1</td>
              <td className="border px-4 py-2">Carter M</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">1E2</td>
              <td className="border px-4 py-2">Koen R</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">1E3</td>
              <td className="border px-4 py-2">Miller S</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">1E4 (Mentor)</td>
              <td className="border px-4 py-2">Christiani M</td>
              
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 2</td>
              <td className="border px-4 py-2">2E1</td>
              <td className="border px-4 py-2">Karsten A</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">2E2</td>
              <td className="border px-4 py-2">Hartzenberg M</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">2E3 (Mentor)</td>
              <td className="border px-4 py-2">Claassens C</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">2E4</td>
              <td className="border px-4 py-2">Swart SP</td>
              
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 3</td>
              <td className="border px-4 py-2">3E1</td>
              <td className="border px-4 py-2">Lamont B</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">3E2 (Dept Head)</td>
              <td className="border px-4 py-2">Steyn B</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">3E3 (Mentor)</td>
              <td className="border px-4 py-2">Koeries C</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">3E4 (Acting Dept Head)</td>
              <td className="border px-4 py-2">Vasconselos C</td>
              
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2 text-center" rowSpan={12}>Intermediate Phase</td>
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 4</td>
              <td className="border px-4 py-2">4E1</td>
              <td className="border px-4 py-2">Nel F</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">4E2</td>
              <td className="border px-4 py-2">Jacobs L</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">4E3 (Mentor)</td>
              <td className="border px-4 py-2">Du Toit M</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">4E4</td>
              <td className="border px-4 py-2">Williams A</td>
           
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 5</td>
              <td className="border px-4 py-2">5E1</td>
              <td className="border px-4 py-2">Faiers A</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">5E2</td>
              <td className="border px-4 py-2">Verwey R</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">5E3</td>
              <td className="border px-4 py-2">Swart T</td>
             
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">5E4 (Mentor)</td>
              <td className="border px-4 py-2">Wolmarans L</td>
            
            </tr>
            <tr className="bg-white">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 6</td>
              <td className="border px-4 py-2">6A</td>
              <td className="border px-4 py-2">Duncan M</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">6E1</td>
              <td className="border px-4 py-2">Janse Van Rensburg L</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">6E2</td>
              <td className="border px-4 py-2">Hamman S</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">6E3 (Mentor)</td>
              <td className="border px-4 py-2">Kleyn A</td>
            
            </tr>
          </tbody>
        </table>
      </section>

      {/* Intermediate Phase */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4"></h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Educator</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
      
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
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">7E1</td>
              <td className="border px-4 py-2">Verwey V</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">7E2 (Mentor)</td>
              <td className="border px-4 py-2">Ford J</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">7E3</td>
              <td className="border px-4 py-2">Van Der Merwe</td>
              
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
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Remedial Teacher / Dept Head</td>
              <td className="border px-4 py-2">Kunneke PF</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Music</td>
              <td className="border px-4 py-2">Patterson L</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Art</td>
              <td className="border px-4 py-2">Lomas G</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Coding & Robotics</td>
              <td className="border px-4 py-2">Da Silva D</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Extra-Mural Head</td>
              <td className="border px-4 py-2">Laubscher H</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Counsellor</td>
              <td className="border px-4 py-2">Rodgers S</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">LSEN</td>
              <td className="border px-4 py-2">Olivier G</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">isiXhosa</td>
              <td className="border px-4 py-2">Mcosana L</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Life Skills - FP</td>
              <td className="border px-4 py-2">Shamrock Y</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Life Skills - PT - Intersen</td>
              <td className="border px-4 py-2">Theron T</td>
           
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
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Admin Head</td>
              <td className="border px-4 py-2">Abrahams N</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Admin Clerk</td>
              <td className="border px-4 py-2">Arendse R</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Debtors Clerk</td>
              <td className="border px-4 py-2">Scheepers K</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Public Relations & System Control</td>
              <td className="border px-4 py-2">Cronje J</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Acting Deputy / Curricular Head</td>
              <td className="border px-4 py-2">Du Plessis L</td>
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Headmaster</td>
              <td className="border px-4 py-2">Swart S</td>
              
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
              
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Rudolph T</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Rooy G</td>
            
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">MacPherson B</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Felix A</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Facility Manager</td>
              <td className="border px-4 py-2">Jackson M</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Golding M</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Keyser B</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Everts J</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Nyazeka B</td>
           
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Papier C</td>
           
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StaffList2024;

