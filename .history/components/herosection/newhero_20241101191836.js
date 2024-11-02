// pages/index.js
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NewHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);


  return (
 <>
    
        {/* Section 1 */}
       
        <div className="container my-auto mx-auto h-auto py-3 px-2  lg:px-8 h-auto flex flex-col justify-center align-center content-center items-center ">
        <h1 className="text-3xl leading-tight text-slate-800 font-bold my-4 font-bold text-center">Monte Vista Primary School</h1>
        <Image  src={isMobile ? '/cellhero.png' : '/Hero.png'} layout="responsive" width="1000" height="600" alt="Monte Vista Primary School" className=" w-full max-w-[1200] mx-auto py-5"></Image>
      
     
    
     
        <div className="container mx-auto lg:px-8 px-2">
          <p className=" leading-tight p-3 text-justify">
          Welcome to Monte Vista Primary school! We are a community of learners, explorers, and problem-solvers who believe that every child has the potential to be a hero. Our mission is to empower our students to discover their unique strengths, embrace their passions, and develop the skills they need to make a positive impact in the world. Whether your child is just starting their educational journey or is already a seasoned student, we are committed to providing them with a safe, inclusive, and engaging learning environment where they can thrive. Join us on this exciting adventure and let's create heroes together!
          </p>
          </div>
        
      </div>
      <section >
      {/* Section 2: About */}
      <div className="container my-auto mx-auto h-auto min-h-screen py-6 px-2  gap-4 lg:px-8 h-auto min-h-screen flex flex-col  md:flex-row justify-center align-center content-center items-center ">
   
      <div className="w-full md:basis-1/3 align-items-center h-full flex flex-col justify-items-center">
      <Image
            src="/herogirl3.png"
            alt="Monte Vista Primary School"
            width={500}
            height={600}
            className=" mx-auto text-center max-w-[80vw]"
          />
      </div>
      <div className="w-full md:basis-2/3 align-items-center h-full flex px-3 flex-col justify-items-center">
          <h2 className="text-4xl font-semibold text-slate-700 text-center">What Makes Us Different?</h2>
          <p className=" mt-3 lg:mt-6 font-semibold leading-tight leading-tight text-gray-700 text-center">As parents embark on the exciting journey of choosing the right educational environment for their children, Monte Vista Primary School stands out as a beacon of excellence with a commitment to providing a nurturing and innovative learning experience. At the heart of this exceptional institution is the deliberate decision to keep classrooms smaller, ensuring individualized attention for each child. With an average class size ranging from 25 to 30 learners, Monte Vista Primary School creates an environment where every student can thrive.</p>
    
     <p className="mt-3 lg:mt-6 font-semibold leading-tight text-gray-700 text-center">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>

<p className="mt-3 lg:mt-6 font-semibold leading-tight text-gray-700 text-center">In addition to academic achievements, we encourage our students to explore a diverse array of sports and cultural activities, nurturing holistic development. Furthermore, we offer aftercare services, providing essential support to working parents for the ongoing care of their children.</p>

<p className="mt-3 lg:mt-6 font-semibold leading-tight text-gray-700 text-center">Our forward-thinking management team is committed to pioneering innovations in education, continually seeking enhanced methods to engage and inspire our learners. By integrating the latest technologies, we cultivate dynamic and pertinent learning experiences for our students.</p>
        </div>
     
</div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="max-w-2xl mx-auto mb-8">
            Whether you have questions about our curriculum, need help, or want to visit, reach
            us via the following methods.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 px-8">
          <div>
          <div className="space-y-6">
      <div className="flex items-center">
        <i className="bi bi-headset text-3xl mr-4"></i>
        <div>
          <h5 className="font-semibold">Telephone:</h5>
          <a href="tel:0215584637">(021) 558 4637</a>
        </div>
      </div>
      <div className="flex items-center">
        <i className="bi bi-envelope-paper text-3xl mr-4"></i>
        <div>
          <h5 className="font-semibold">Email:</h5>
          <p>
            Main: <a href="mailto:montevistaprimaryschool@gmail.com">montevistaprimaryschool@gmail.com</a>
          </p>
          <p>
            Fees: <a href="mailto:fees.montevista@gmail.com">fees.montevista@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <i className="bi bi-house text-3xl mr-4"></i>
        <div>
          <h5 className="font-semibold">Address:</h5>
          <p>7 Huising Avenue, Monte Vista, 7460</p>
        </div>
      </div>
    </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2024 Monte Vista Primary School. All rights reserved.</p>
      </footer>
 

   
    </>
  )
}

