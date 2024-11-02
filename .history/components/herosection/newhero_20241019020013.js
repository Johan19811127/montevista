// pages/index.js
import Layout from '../components/Layout';
import Image from 'next/image';

export default function New() {
  return (
 <>
      <div className="content mt-10 px-5 md:flex gap-8">
        {/* Section 1 */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-center">Monte Vista</h1>
          <h2 className="text-2xl text-center mt-2">Primary School</h2>
          <p className="text-lg py-6">
            Welcome to Monte Vista Primary School! We are a community of learners, explorers,
            and problem-solvers who believe that every child has the potential to be a hero...
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/intro.png"
            alt="Monte Vista Primary School"
            width={400}
            height={300}
            className="shadow-lg"
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
