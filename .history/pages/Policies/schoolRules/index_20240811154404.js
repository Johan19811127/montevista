import Image from 'next/image';
import React from 'react';

const SchoolRules = () => {
  return (
    <>
   

    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:h-screen md:sticky md:top-0 lg:w-1/5 bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row">


<div className="md:container mx-auto border pb-3 mb-3 border-b-slate-400">
  <h1 className=" text-xl font-bold text-center ">Monte Vista Primary School </h1>
  <h1 className=" text-3xl  font-bold text-center mb:4 ">School Rules</h1>
  <a
  href="/admission_policy.pdf" // Path to the file in the public directory
  download="Admission_Policy.pdf" // The name of the file that will be downloaded
  className="flex px-auto align-center justify-center py-3 text-slate-900  font-bold  text-center bg-yellow-500 rounded-lg mx-auto my-3 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  Download the School Rules
</a>
</div>
</div>


 
<div className="container "
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li className="text-default text-justify"><a href="#lining-up" className="text-blue-500 hover:underline">A. Lining Up</a></li>
          <li className="text-default text-justify"><a href="#passages" className="text-blue-500 hover:underline">B. Passages</a></li>
          <li className="text-default text-justify"><a href="#classrooms" className="text-blue-500 hover:underline">C. Classrooms</a></li>
          <li className="text-default text-justify"><a href="#playground" className="text-blue-500 hover:underline">D. Playground</a></li>
          <li className="text-default text-justify"><a href="#tuck-shop" className="text-blue-500 hover:underline">E. Tuck Shop</a></li>
          <li className="text-default text-justify"><a href="#absenteeism" className="text-blue-500 hover:underline">F. Absenteeism</a></li>
          <li className="text-default text-justify"><a href="#cell-phones" className="text-blue-500 hover:underline">G. Cell Phones / Electronic Devices</a></li>
          <li className="text-default text-justify"><a href="#dress-code" className="text-blue-500 hover:underline">H. Dress Code and “Civvies Day”</a></li>
          <li className="text-default text-justify"><a href="#general" className="text-blue-500 hover:underline">I. General</a></li>
          <li className="text-default text-justify"><a href="#toilets" className="text-blue-500 hover:underline">J. Toilets/Cloakroom Rules</a></li>
          <li className="text-default text-justify"><a href="#hall" className="text-blue-500 hover:underline">K. Hall</a></li>
          <li className="text-default text-justify"><a href="#foyer" className="text-blue-500 hover:underline">L. Foyer</a></li>
          <li className="text-default text-justify"><a href="#administrative-area" className="text-blue-500 hover:underline">M. Administrative Area</a></li>
          <li className="text-default text-justify"><a href="#after-hours" className="text-blue-500 hover:underline">N. School Building After Hours</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
      <main className="flex">


<div className="max-w-5xl mx-auto p-6 bg-white  rounded-lg">
<div className="flex flex-col md:flex-row">

<div className=" w-1/1 md:w-1/4"><Image src="/Badge.png" width="180" height="180" alt="Monte Vista Primary School Badge" className=" mx-auto max-w-[30vw] w-[80%]  "></Image></div>
<div className=" w-1//1 md:w-3/4  px-4">
<div className="md:container md:ml-8 md:mx-auto">
  <h1 className=" text-2xl md:text-4xl font-bold text-left ">Monte Vista Primary School </h1>
  <h1 className=" text-2xl md:text-3xl font-bold text-left mb:4 ">Admission Policy 2023</h1>

<address className="text-start">
  <b className="font-bold mr-3">A:</b>
   Huising Avenue, Monte Vista 7460    </address>
    <a href="tel:+27215584637" className="text-center" ><b className="font-bold mr-3 text-center">T:</b>021 558 4637</a><br></br>
   
  <a href="mailto:montevistaprimaryschool@gmail.com" className="text-center"><b className="font-bold mr-3 text-center">E:</b>montevistaprimaryschool@gmail.com</a><br></br>
  <a
  href="/admission_policy.pdf" // Path to the file in the public directory
  download="Admission_Policy.pdf" // The name of the file that will be downloaded
  className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg  my-3 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  Download the Signed Admission Policy
</a>
  </div>
  </div>
  </div>


<hr className="divide-solid mt-3 mb-9 divide-slate-800"></hr>
        <section id="lining-up" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">A. Lining Up</h2>
          <p className="mb-2">
            Learners must go to their lines immediately at the sound of the first siren. Nobody may arrive late at the lines.
          </p>
          <p>
            When the second siren sounds, there must be silence, and learners must be ready to lead into class.
          </p>
        </section>

        <section id="passages" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">B. Passages</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">Learners may not talk, run, play, or loiter in the passages before, during, or after school hours.</li>
            <li className="text-default text-justify">
              When changing classes, learners must move in a single file on the left side of the passage with suitcases carried away from the wall.
            </li>
            <li className="text-default text-justify">
              When learners move to and from classrooms at the beginning and end of the day and the beginning and end of breaks, they must walk in two lines.
            </li>
            <li className="text-default text-justify">
              Learners in the top passages may only move outside once the learners in the bottom passages are already outside.
            </li>
            <li className="text-default text-justify">Learners may not drag their feet on the floors in the passages, as this leaves black marks.</li>
            <li className="text-default text-justify">The hooks outside the classrooms may not be tampered with when learners are moving along the passages.</li>
            <li className="text-default text-justify">Learners are forbidden to eat in the passages or the cloakrooms. No running and playing of games are allowed in the passages.</li>
          </ul>
        </section>

        <section id="classrooms" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">C. Classrooms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">No learners are allowed in the classrooms before school.</li>
            <li className="text-default text-justify">Classrooms and desks must be kept clean and tidy at all times. Writing on walls and desks is strictly forbidden.</li>
            <li className="text-default text-justify">No learner is allowed to talk or walk around the classroom during lessons unless he/she has been given permission by the educator.</li>
            <li className="text-default text-justify">
              If for some reason the educator has to leave the classroom, an assistant must be called. Under no circumstances may a class be left unsupervised.
            </li>
            <li className="text-default text-justify">
              When learners leave the classroom, they must make sure that it is tidy and each learner must ensure that his/her desk is neatly packed.
            </li>
            <li className="text-default text-justify">No clothes or bags may be left on the hooks outside the classrooms after school.</li>
            <li className="text-default text-justify">
              When entering another educator’s classroom, learners must knock, enter, and greet in a polite manner.
            </li>
            <li className="text-default text-justify">No learners will be allowed in the classroom during breaks or after school without the supervision of an educator.</li>
            <li className="text-default text-justify">No learner may eat during class hours. The educator may confiscate the food.</li>
          </ul>
        </section>

        <section id="playground" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">D. Playground</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">During breaks learners must play in their respective areas.</li>
            <li className="text-default text-justify">Learners must throw their sandwich wrappings, peels, bread crusts, etc. in the dirt bins.</li>
            <li className="text-default text-justify">The following will not be allowed during breaks, before school, or after school on the playgrounds:</li>
            <ul className="list-disc pl-10 space-y-2">
              <li className="text-default text-justify">Ride bicycles (learners must mount or dismount their bicycles at the gate and push their bicycles to the bicycle racks).</li>
              <li className="text-default text-justify">Bicycles may not be left in front of the main gate of the school or in front of the entrance to the rugby/athletics field.</li>
              <li className="text-default text-justify">Learners may not play between or near the bicycle racks.</li>
              <li className="text-default text-justify">No tampering with bicycles will be allowed.</li>
              <li className="text-default text-justify">Climbing of trees, breaking of branches, and pulling off of leaves and berries is not allowed.</li>
              <li className="text-default text-justify">Climbing over fences is prohibited.</li>
              <li className="text-default text-justify">Games that stain, tear, or damage school clothes are not allowed.</li>
              <li className="text-default text-justify">Rugby, cricket, tennis, netball, etc. may not be played in school uniform – only the correct attire may be used for this purpose.</li>
              <li className="text-default text-justify">Only tennis and netball may be played on the courts.</li>
              <li className="text-default text-justify">No game may be played with a hardball.</li>
              <li className="text-default text-justify">Any form of fireworks (e.g., firecrackers), BB guns, firearms, or dangerous knives are not allowed on the playgrounds.</li>
              <li className="text-default text-justify">Learners may not chew bubble gum on the school premises.</li>
              <li className="text-default text-justify">Learners may not enter or leave the school via the foyer.</li>
              <li className="text-default text-justify">The netball posts may not be used for basketball.</li>
              <li className="text-default text-justify">The school playgrounds are there for the enjoyment of all learners. Allow your fellow learners this privilege.</li>
              <li className="text-default text-justify">If anything is broken or damaged during break time, it must be reported to the headmaster/deputy headmaster immediately.</li>
              <li className="text-default text-justify">No learner is allowed to leave the school premises during school hours without the permission of the headmaster or the deputy headmaster.</li>
              <li className="text-default text-justify">Learners may not play in the garden area in front of the school – this includes the area between the side of the hall, past the front gate, to the corner of the staffroom.</li>
            </ul>
          </ul>
        </section>

        <section id="tuck-shop" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">E. Tuck Shop</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">
              At the beginning of breaks learners must line-up in single file between the barriers in front of the tuck shop hatch.
            </li>
            <li className="text-default text-justify">Only two learners at a time may stand in front of the tuck shop hatch.</li>
            <li className="text-default text-justify">
              Pushing, pushing-in, or any form of misconduct will not be allowed and any culprit will be dealt with according to the code of conduct.
            </li>
            <li className="text-default text-justify">No learners will be served from the side door of the tuck shop.</li>
          </ul>
        </section>

        <section id="absenteeism" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">F. Absenteeism</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">
              Should a learner not attend school, the parent must state the reason for the absenteeism and/or supply a doctor’s certificate to the educator.
            </li>
            <li className="text-default text-justify">
              The learner must then inform the following educators who might be involved: Music/choir, Sports coaches, Society and/or club educators.
            </li>
          </ul>
        </section>

        <section id="cell-phones" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">G. Cell Phones / Electronic Devices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">We do not encourage learners to bring cell phones/electronic devices to school at all.</li>
            <li className="text-default text-justify">
              If they do so, the school will not accept responsibility if a cell phone/electronic device gets stolen or damaged.
            </li>
            <li className="text-default text-justify">Cell phones/electronic devices MUST be completely switched OFF during class time.</li>
            <li className="text-default text-justify">
              Phones or electronic devices will be collected by the educator and placed in a locked cupboard until the end of the day. If not, it will be confiscated immediately and kept in the office for a certain period. (Circular 2007/01)
            </li>
          </ul>
        </section>

        <section id="dress-code" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">H. Dress Code and “Civvies Day”</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">
              Learners are expected to wear the official School uniform and appear neat and tidy at all times. No additions to the uniform that are not in accordance with the regulations will be allowed.
            </li>
            <li className="text-default text-justify">
              Only learners that have applied and have submitted the relevant supporting documentation and received the necessary permission from the School Governing Body, may deviate from the official School uniform for religious reasons as contemplated in Annexure A of the School Rules.
            </li>
            <li className="font-bold">Summer:</li>
            <ul className="list-disc pl-10 space-y-2">
              <li className="text-default text-justify">Girls: black school shoes; short white socks / MVP branded white socks; white short-sleeved open-neck shirt; Monte Vista school skirt.</li>
              <li className="text-default text-justify">Boys: black school shoes; long grey Monte Vista school socks; grey pants (long or short); white short-sleeved open-neck shirt.</li>
            </ul>
            <li className="font-bold">Winter:</li>
            <ul className="list-disc pl-10 space-y-2">
              <li className="text-default text-justify">
                Girls: black school shoes; long grey Monte Vista school socks or black pantyhose (opaque); Monte Vista school skirt or Monte Vista blue school slacks; white long-sleeved shirt; Monte Vista school tie.
              </li>
              <li className="text-default text-justify">Boys: black school shoes; long grey Monte Vista school socks; grey pants (long or short); white long-sleeved shirt; Monte Vista school tie.</li>
            </ul>
            <li className="text-default text-justify">
              Learners can wear a Monte Vista school jersey/pull-over and/or Monte Vista school anorak throughout the year. The jersey/pull-over may not be worn with PT-clothing.
            </li>
            <li className="text-default text-justify">
              Official Monte Vista Primary SCHOOL SUITCASE. This is the only suitcase that may be used.
            </li>
            <li className="font-bold">Civvies Days:</li>
            <ul className="list-disc pl-10 space-y-2">
              <li className="text-default text-justify">
                The only difference in the clothing on a “civvies day” is that the school uniform may be replaced by suitable casual clothes. The academic programme will proceed as usual.
              </li>
              <li className="text-default text-justify">
                IMPORTANT: NO UNACCEPTABLE OR OFFENSIVE SLOGANS ON ANY CLOTHING WHICH ARE IN CONFLICT WITH THE ETHOS OF OUR SCHOOL WILL BE ALLOWED.
              </li>
              <li className="font-bold">Dress code for girls:</li>
              <ul className="list-disc pl-10 space-y-2">
                <li className="text-default text-justify">Clothing must be suitable to wear to school.</li>
                <li className="text-default text-justify">No revealing, shoulder-less tops with low cleavage or bare midriff.</li>
                <li className="text-default text-justify">
                  Jewellery like bangles and necklaces must be worn in moderation. No visible body piercings except earrings.
                </li>
                <li className="text-default text-justify">Caps may not be worn inside the school buildings.</li>
                <li className="text-default text-justify">All underwear must be covered.</li>
                <li className="text-default text-justify">No make-up is allowed (as stated in the school rules).</li>
                <li className="text-default text-justify">Hair may be worn loose, but the colouring of hair is not permitted.</li>
              </ul>
              <li className="font-bold">Dress code for boys:</li>
              <ul className="list-disc pl-10 space-y-2">
                <li className="text-default text-justify">Clothing must be suitable to wear to school.</li>
                <li className="text-default text-justify">No visible body piercings.</li>
                <li className="text-default text-justify">No earrings.</li>
                <li className="text-default text-justify">Caps may not be worn inside the school building.</li>
                <li className="text-default text-justify">All underwear must be covered.</li>
                <li className="text-default text-justify">Hair must be according to school rules (no coloring).</li>
              </ul>
            </ul>
            <li className="text-default text-justify">Learners who transgress this dress code will not be permitted to wear casual clothes on subsequent civvies days.</li>
          </ul>
        </section>

        <section id="general" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">I. General</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">New learners are permitted to complete a particular term in the uniform of their previous school.</li>
            <li className="text-default text-justify">All articles of clothing must be clearly marked.</li>
            <li className="text-default text-justify">Lost clothing is handed in at reception and can be redeemed from the secretary.</li>
            <li className="text-default text-justify">
              A school tracksuit may only be worn as part of the sports uniform and on the days that the learners have physical education.
            </li>
            <li className="text-default text-justify">Nails must be kept short and clean and no nail polish, gel, tipp-ex, etc. may be used on nails.</li>
            <li className="text-default text-justify">Make-up may not be worn.</li>
            <li className="font-bold">Hair:</li>
            <ul className="list-disc pl-10 space-y-2">
              <li className="font-bold">Boys:</li>
              <ul className="list-disc pl-10 space-y-2">
                <li className="text-default text-justify">Hair regulations are based on neatness, naturalness, and styles which are appropriate to a boy dressed in a uniform.</li>
                <li className="text-default text-justify">Hair may not hang over ears and collar.</li>
                <li className="text-default text-justify">The fringe must not hang below the eyebrows.</li>
                <li className="text-default text-justify">Hair may not be permed, dyed, tinted, or washed in any coloring agent whatsoever.</li>
                <li className="text-default text-justify">Boys may not have long hair that requires to be tied up.</li>
                <li className="text-default text-justify">No steps, ‘undercuts,’ ridges, or peculiar styles are permitted.</li>
                <li className="text-default text-justify">No gel will be allowed.</li>
                <li className="text-default text-justify">No patterns may be shaved into the hair or eyebrows.</li>
              </ul>
              <li className="font-bold">Girls:</li>
              <ul className="list-disc pl-10 space-y-2">
                <li className="text-default text-justify">Hair regulations are based on neatness, naturalness, and styles which are appropriate to a girl dressed in a uniform.</li>
                <li className="text-default text-justify">Hair must be tied away from the face with elastic bands and/or ribbons.</li>
                <li className="text-default text-justify">Braids must be a natural color, and no beads allowed in the braids.</li>
                <li className="text-default text-justify">The fringe must not touch the eyebrows.</li>
                <li className="text-default text-justify">Girls may only wear white or black accessories in their hair.</li>
                <li className="text-default text-justify">Hair must not be permed, highlighted, dyed, tinted, or washed in any coloring agent whatsoever.</li>
                <li className="text-default text-justify">No steps, ‘undercuts,’ ridges, or peculiar styles are permitted.</li>
                <li className="text-default text-justify">No jewelry, besides watches and medic-alert disks, etc., may be worn with the school uniform.</li>
                <li className="text-default text-justify">
                  Girls with single holes in the earlobes may wear plain rings (silver or gold sleeper rings) or solid ball studs (silver or gold studs, no diamante or colored stones).
                </li>
                <li className="text-default text-justify">Boys are not allowed to wear any jewelry in their ears.</li>
                <li className="text-default text-justify">No other piercings allowed for all learners.</li>
              </ul>
            </ul>
          </ul>
        </section>

        <section id="toilets" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">J. Toilets/Cloakroom Rules</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">The use of PT change rooms is forbidden for all learners during breaks or before school.</li>
            <li className="text-default text-justify">Learners who cannot behave hygienically in the toilets will be dealt with severely.</li>
            <li className="text-default text-justify">Toilets must be flushed after use.</li>
            <li className="text-default text-justify">No learner may mess with the toilet paper in the toilets.</li>
            <li className="text-default text-justify">Soap at wash-basins in cloakrooms should be used to wash hands after a visit to the toilet.</li>
            <li className="text-default text-justify">The area in and around toilets (and urinals in boys' toilets) must be kept neat and tidy at all times.</li>
            <li className="text-default text-justify">It is not a talking, eating, or meeting place.</li>
            <li className="text-default text-justify">Hanging around the toilet area/change rooms is therefore forbidden.</li>
            <li className="text-default text-justify">Boys are to stand on the step (where applicable) when using the urinal.</li>
            <li className="text-default text-justify">
              Any learner who at any time behaves in an improper, indecent, unhygienic, and destructive manner in the toilets and change rooms is guilty of a serious misdemeanor.
            </li>
            <li className="text-default text-justify">
              No learner may at any time eat sandwiches in the toilet area or force rolls of toilet paper into the toilet or throw pieces of wet toilet paper up against the ceiling. Strong action shall be taken against such learners.
            </li>
          </ul>
        </section>

        <section id="hall" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">K. Hall</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">At no time will a learner be allowed in the hall without the supervision of an educator.</li>
            <li className="text-default text-justify">Learners may not use the hall as thoroughfare (shortcut).</li>
            <li className="text-default text-justify">Learners may not run or play in the hall without supervision.</li>
            <li className="text-default text-justify">Learners may not eat or drink in the hall during the normal course of a school day.</li>
            <li className="text-default text-justify">Learners may not go on the stage unless instructed to do so by an educator.</li>
            <li className="text-default text-justify">The equipment (e.g., sound and lighting) may only be used by an educator or trained assistants.</li>
            <li className="text-default text-justify">No apparatus or chairs may be dragged across the floor. Such items must be picked up before they are moved.</li>
            <li className="text-default text-justify">When leaving the hall, ensure that all the side doors are closed.</li>
            <li className="text-default text-justify">If chairs and/or tables are used, ensure that they are clean before they are packed away.</li>
            <li className="text-default text-justify">Photographs, etc., may not be removed from the hall without permission.</li>
            <li className="text-default text-justify">Any damage must be reported immediately.</li>
          </ul>
        </section>

        <section id="foyer" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">L. Foyer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">The foyer may not be used as a thoroughfare.</li>
            <li className="text-default text-justify">The foyer serves as the ‘showpiece’ of the school and should be viewed as such.</li>
            <li className="text-default text-justify">Nothing may be done which might diminish this image.</li>
            <li className="text-default text-justify">The glass door between the foyer and the rest of the school must be closed at all times to ensure the safety of the staff.</li>
            <li className="text-default text-justify">
              Should the foyer need to be decorated for one or another reason, the erection of such decorations may not cause any damage to the existing structure in the foyer.
            </li>
          </ul>
        </section>

        <section id="administrative-area" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">M. Administrative Area</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">Learners may not enter the administrative area without permission.</li>
            <li className="text-default text-justify">The staff room and staff kitchens are out of bounds for all learners.</li>
          </ul>
        </section>

        <section id="after-hours" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">N. School Building After Hours</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-default text-justify">Learners may not wander aimlessly around the school buildings after 14:30.</li>
            <li className="text-default text-justify">Rules regarding behavior in classrooms and corridors are also applicable after 14:30.</li>
          </ul>
        </section>

        <p className="mt-8 text-right">S.J.E. Swart, Headmaster</p>
      </div>
   </main>
   </div>
   </div>
   </>
  );
};

export default SchoolRules;