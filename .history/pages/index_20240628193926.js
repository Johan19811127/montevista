import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import AnimatedText from "@/components/Name";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
   
    
  return (
    <main>
           <div className="row hvh100 colorsection">
           < div class="col-md-6">
          <img src="/heroboy.png" alt="Monte Vista primary School" className="heroimg"></img>
        </div>
        <div className="col-md-6 text-center">
<AnimatedText></AnimatedText>

        </div></div>
      <div className="container">
   
        <div className="row hvh100 ">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <img src="/60Badge.png" className="badge60" alt="In 2023 Monte Vista Primary School celebrated its 60th anniversary"></img>
      <h1 className="h1">Monte Vista </h1>
      <h2 className="h2 mb-4">Primary School</h2>
     
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ps-3 pe-1 text-justify">

     
    <p className="bodytext text-justify">As parents embark on the exciting journey of choosing the right educational environment for their children, Monte Vista Primary School stands out as a beacon of excellence with a commitment to providing a nurturing and innovative learning experience. At the heart of this exceptional institution is the deliberate decision to keep classrooms smaller, ensuring individualized attention for each child. With an average class size ranging from 25 to 30 learners, Monte Vista Primary School creates an environment where every student can thrive.</p>
    <p className="bodytext text-justify">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>
<p className="bodytext text-justify">In addition to academic achievements, we encourage our students to explore a diverse array of sports and cultural activities, nurturing holistic development. Furthermore, we offer aftercare services, providing essential support to working parents for the ongoing care of their children.</p>

<p className="bodytext text-justify">Our forward-thinking management team is committed to pioneering innovations in education, continually seeking enhanced methods to engage and inspire our learners. By integrating the latest technologies, we cultivate dynamic and pertinent learning experiences for our students.</p>
      </div>
      </div>
      </div>
      <div className="row colorsection">
         <div className="col-md-6  d-flex flex-column align-items-center justify-content-center ">
          <h3 className="h1">Contact us</h3>
         <div className="container p-5 text-center">

<p className="bodytext">At Monte Vista Primary School, we value open communication and are always eager to hear from our community. Whether you have questions, need assistance, or want to share your thoughts, our team is here to help. Feel free to reach out to us through any of the provided contact methods. We are dedicated to providing a supportive and responsive environment for our learners, parents, and community members. Your feedback and inquiries are important to us as we strive to offer the best educational experience possible.</p>
<div className="row pl-5">
<div className="col-2"><PhoneIphoneIcon /></div>
<div className="col-4"><p className="contacttext">Telephone :</p></div>
<div className="col-6"><p className="contacttext"> (021) 558 4637</p></div>

</div>
<div className="row pl-5">
<div className="col-2"><PhoneIphoneIcon /></div>
<div className="col-4"><p className="contacttext" style={{lineHeight:'1.1'}}>Email :<small className="subtext">(main)</small><br></br>Email :<small className="subtext">(School Fees)</small><br></br>Email :<small className="subtext">(Accounts)</small></p></div>
<div className="col-6"><p className="contacttext" style={{lineHeight:'1.1'}}> <a href="mailto:montevistaprimaryschool@gmail.com">Montevistaprimaryschool@gmail.com</a><br></br><a href="mailto:fees.montevista@gmail.com">Fees.montevista@gmail.com</a></a></p></div>

</div>
<div className="row pl-5">
<div className="col-2"></div>
<div className="col-4"><p className="contacttext">Email :<small className="subtext">(School Fees)</small></p></div>
<div className="col-6"><p className="contacttext"> Montevistaprimaryschool@gmail.com</p></div>

</div>
<div className="row pl-5">
<div className="col-2"><PhoneIphoneIcon /></div>
<div className="col-4"><p className="contacttext">Email :<small className="subtext">(Accounts - Creditors)</small></p></div>
<div className="col-6"><p className="contacttext"> Montevistaprimaryschool@gmail.com</p></div>

</div>
</div>
</div>
    
       
         <div className="col-md-6  d-flex flex-column align-items-center justify-content-center ">
         <img src="/Girl1.PNG" className="childimg"></img>

         </div>
        </div>
    </main>
  );
}
