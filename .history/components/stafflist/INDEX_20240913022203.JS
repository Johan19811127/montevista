// StaffList2024.js
import React from 'react';

const StaffList2024 = () => {
  return (
    <div className="container lg:w-[1200px] mx-auto p-4">
      <h1 className=" text-2xl lg:text-3xl font-bold text-center mb-5">
       The Monte Vista Primary School Team
      </h1>
<p className="mb-6 leading-tight mx-3 text-justify">At Monte Vista Primary School, we are proud to introduce a passionate and dedicated team of educators, administrators, and support staff who work together to create an environment where every learner can thrive. Our team is committed to fostering academic excellence, personal growth, and a love for learning in each student, ensuring that they feel valued and supported throughout their educational journey. With a shared vision of nurturing well-rounded individuals, we work tirelessly to provide a safe, engaging, and inclusive space for all learners at Monte Vista.</p>
      <section className="mb-6">
        <h2 className="text-xl lg:text-2xl font-semibold mb-4">Educators</h2>

        <table className=" border border-blue-800 w-full lg:w-[1200px] mx-auto mb-6 shadow-sm text-blue-800 ">
          <thead>
            <tr className="bg-blue-500 text-white text-md font-semibold border border-white">
              <th className="px-4 py-2 border border-white w-[30%] lg:w-[35%] ">Phase</th>
              <th className="px-4 py-2 border border-white  w-[20%] ">Grade</th>
              <th className="px-4 py-2 border border-white  w-[10%]">Class</th>
              <th className="px-4 py-2 border border-white w-[40%] lg:w-[35%] ">Educator</th>
         
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center" rowSpan={16}>Foundation phase</td>
              <td className="border px-4 py-2 text-center" rowSpan={4}>Grade R</td>
              <td className="border px-4 py-2 text-center ">R1</td>
              <td className="border px-4 py-2">Botha D</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">R2</td>
              <td className="border px-4 py-2">Cohens T</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">R3 </td>
              <td className="border px-4 py-2">Van Tonder C <span className="ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white border border-blue-500 ">
              <td className="border px-4 py-2 text-center">R4</td>
              <td className="border px-4 py-2">Pretorius F</td>
           
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 1</td>
              <td className="border px-4 py-2 text-center">1E1</td>
              <td className="border px-4 py-2">Carter M</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">1E2</td>
              <td className="border px-4 py-2">Koen R</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">1E3</td>
              <td className="border px-4 py-2">Miller S</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">1E4</td>
              <td className="border px-4 py-2">Christiani M<span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 2</td>
              <td className="border px-4 py-2 text-center">2E1</td>
              <td className="border px-4 py-2">Karsten A</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">2E2</td>
              <td className="border px-4 py-2">Hartzenberg M</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">2E3 </td>
              <td className="border px-4 py-2">Claassens C<span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">2E4</td>
              <td className="border px-4 py-2">Swart SP</td>
              
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 3</td>
              <td className="border px-4 py-2 text-center">3E1</td>
              <td className="border px-4 py-2">Lamont B</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">3E2 </td>
              <td className="border px-4 py-2">Steyn B <span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-yellow-400 text-slate-700">D</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">3E3</td>
              <td className="border px-4 py-2">Koeries C<span className="ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">3E4 </td>
              <td className="border px-4 py-2">Vasconselos C <span className="ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-yellow-400 text-slate-700">A</span></td>
              
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={12}>Intermediate Phase</td>
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 4</td>
              <td className="border px-4 py-2 text-center">4E1</td>
              <td className="border px-4 py-2">Nel F</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">4E2</td>
              <td className="border px-4 py-2">Jacobs L</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">4E3 </td>
              <td className="border px-4 py-2">Du Toit M<span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">4E4</td>
              <td className="border px-4 py-2">Williams A</td>
           
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 5</td>
              <td className="border px-4 py-2 text-center">5E1</td>
              <td className="border px-4 py-2">Faiers A</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">5E2</td>
              <td className="border px-4 py-2">Verwey R</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">5E3</td>
              <td className="border px-4 py-2">Swart T</td>
             
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">5E4 </td>
              <td className="border px-4 py-2">Wolmarans L<span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
            
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 6</td>
              <td className="border px-4 py-2 text-center">6A</td>
              <td className="border px-4 py-2">Duncan M</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">6E1</td>
              <td className="border px-4 py-2">Janse Van Rensburg L</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">6E2</td>
              <td className="border px-4 py-2">Hamman S</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">6E3 </td>
              <td className="border px-4 py-2">Kleyn A<span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
            
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={4}>Senior Phase</td>
            <td className="border px-4 py-2 text-center" rowSpan={4}>Grade 7</td>
              <td className="border px-4 py-2 text-center">7A</td>
              <td className="border px-4 py-2">Rabe R</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">7E1</td>
              <td className="border px-4 py-2">Verwey V</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">7E2</td>
              <td className="border px-4 py-2">Ford J<span className="ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-blue-500 text-white">M</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 text-center">7E3</td>
              <td className="border px-4 py-2">Van Der Merwe</td>
              
            </tr>
            <tr className="bg-white ">
            <td className="border px-4 py-2 text-center" rowSpan={11}>Specialist Educators</td>
              <td className="border px-4 py-2" colSpan={2}>Subject Teacher / Dept Head</td>
              <td className="border px-4 py-2">Payne M <span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-yellow-400 text-slate-700">D</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2"colSpan={2}>Remedial Teacher / Dept Head</td>
              <td className="border px-4 py-2">Kunneke PF <span className=" ml-3 lg:ml-7 rounded-full -my-2 mx-2 py-[7px] px-[10px] text-xs leading-tight font-bold bg-yellow-400 text-slate-700">D</span></td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 " colSpan={2}>Music</td>
              <td className="border px-4 py-2">Patterson L</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2 " colSpan={2}>Art</td>
           
              <td className="border px-4 py-2">Lomas G</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2" colSpan={2}>Coding & Robotics</td>
              <td className="border px-4 py-2">Da Silva D</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2"colSpan={2}>Extra-Mural Head</td>
              <td className="border px-4 py-2">Laubscher H</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2" colSpan={2}>Counsellor</td>
              <td className="border px-4 py-2">Rodgers S</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2" colSpan={2}>LSEN</td>
              <td className="border px-4 py-2">Olivier G</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2" colSpan={2}>isiXhosa</td>
              <td className="border px-4 py-2">Mcosana L</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2" colSpan={2}>Life Skills - FP</td>
              <td className="border px-4 py-2">Shamrock Y</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2" colSpan={2}>Life Skills - PT - Intersen</td>
              <td className="border px-4 py-2">Theron T</td>
           
            </tr>
             
          </tbody>
        </table>
      </section>

 


      {/* Senior Primary - Grade 7 */}
 

      {/* Specialist Educators */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4"></h2>

        <table className="table-auto w-full mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
          
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
            <tr className="bg-white ">
              <td className="border px-4 py-2">Financial Officer</td>
              <td className="border px-4 py-2">Cronje J</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">Admin Head</td>
              <td className="border px-4 py-2">Abrahams N</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">Admin Clerk</td>
              <td className="border px-4 py-2">Arendse R</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">Debtors Clerk</td>
              <td className="border px-4 py-2">Scheepers K</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">Public Relations & System Control</td>
              <td className="border px-4 py-2">Cronje J</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">Acting Deputy / Curricular Head</td>
              <td className="border px-4 py-2">Du Plessis L</td>
              
            </tr>
            <tr className="bg-white ">
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
            <tr className="bg-white ">
              <td className="border px-4 py-2">Grounds & Maintenance</td>
              <td className="border px-4 py-2">Roux R</td>
              
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Rudolph T</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Rooy G</td>
            
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">MacPherson B</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Felix A</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">Facility Manager</td>
              <td className="border px-4 py-2">Jackson M</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Golding M</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Keyser B</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Everts J</td>
           
            </tr>
            <tr className="bg-white ">
              <td className="border px-4 py-2">General Assistant</td>
              <td className="border px-4 py-2">Nyazeka B</td>
           
            </tr>
            <tr className="bg-white ">
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

