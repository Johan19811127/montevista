// pages/index.js

import Image from 'next/image';

export default function NewHero() {
  return (
 <>
      <div className="content mt-10 px-5 flex-col-reverse flex md:flex-row gap-8 h-full">
        {/* Section 1 */}
        <div className="md:w-1/2 align-items-center h-full justify-content-center">
        <div className="lg:p-8 p-4 text-center m-auto">
          <h1 className="lg:text-6xl text-3xl leading tight  font-bold text-center">Monte Vista</h1>
          <h2 className="text-2xl text-center mt-2">Primary School</h2>
          <p className="text-lg leading-tight py-6">
          Welcome to Monte Vista Primary school! We are a community of learners, explorers, and problem-solvers who believe that every child has the potential to be a hero. Our mission is to empower our students to discover their unique strengths, embrace their passions, and develop the skills they need to make a positive impact in the world. Whether your child is just starting their educational journey or is already a seasoned student, we are committed to providing them with a safe, inclusive, and engaging learning environment where they can thrive. Join us on this exciting adventure and let's create heroes together!
          </p>
        </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/intro.png"
            alt="Monte Vista Primary School"
            width={400}
            height={300}
            className="drop-shadow-lg w-[50%] max-w-[50vw] text-center"
          />
        </div>
      </div>

      {/* Section 2: About */}
      <section className="py-10 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">What Makes Us Different?</h2>
          <p className="mt-4 max-w-4xl mx-auto">
            Monte Vista Primary School stands out as a beacon of excellence with a commitment
            to nurturing innovative learning experiences...
          </p>
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
  );
}
