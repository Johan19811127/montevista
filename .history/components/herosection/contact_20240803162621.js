import React, { useState } from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessIcon from '@mui/icons-material/Business';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailIcon from '@mui/icons-material/Email';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Contactform from './contactform';
import { useRouter } from 'next/router';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const router = useRouter();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform form validation here if needed
    
        // Simulate form submission (you can replace this with your own API call)
        await new Promise((resolve) => setTimeout(resolve, 1000));
    
        // Redirect to the thank you page
        router.push('/thank-you');
      };
  return (
    <div className=" flex h-screen">
        <div className="flex flex-col container w-screen lg:w-[80%] lg:px-8  m-auto">
        <h1 className="text-3xl font-bold tracking-tight mt:auto mb-3 text-center text-dblue sm:text-6xl">Get in touch</h1>
        <div className="flex flex-col md:flex-row  p-4">
<div className="md:basis-1/2 text-center w-full my-auto p-8">

<p className="text-default text-dblue text-center leading-tight  font-md mt-5 mb-5 text-justify ">At Monte Vista Primary School, we value open communication and are always eager to hear from our community. Whether you have questions about our curriculum, want to learn more about our Early Development Center, or need assistance with any school-related matter, our dedicated staff is here to help. You can reach us by phone, email, or by visiting our school office during working hours. For your convenience, we've also provided a contact form below for any inquiries you may have. Our school is located in the heart of Cape Town, surrounded by a vibrant community that we proudly serve. We look forward to connecting with you and addressing any of your needs promptly and efficiently.</p>
<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><PhoneAndroidOutlinedIcon className="w-10 h-10 align-self-center" /></div>
<div className="basis-2/6"><p className=" text-default lg:text-lg font-md text-dblue text-start ">Telephone :</p></div>
<div className="basis-3/6"><p className="text-default lg:text-lg  text-dblue text-start"> <a href="tel:0215584637">(021) 558 4637</a></p></div>
</div>

<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><MailOutlineOutlinedIcon className="w-10 h-10 align-self-center"/></div>
<div className="basis-2/6"><p className="contacttextsml text-dblue text-default lg:text-lg text-start" style={{lineHeight:'1.2'}}>Email :<small className="subtext">(main)</small><br></br>Email :<small className="subtext">(School Fees)</small><br></br>Email :<small className="subtext">(Accounts)</small></p></div>
<div className="basis-3/6"><p className="contacttextsml text-dblue text-default lg:text-lg text-start" style={{lineHeight:'1.2'}}> <a href="mailto:montevistaprimaryschool@gmail.com">Montevistaprimaryschool@gmail.com</a><br></br><a href="mailto:fees.montevista@gmail.com">Fees.montevista@gmail.com</a><br></br><a href="mailto:finance@montevistaps.co.za">Finance@montevistaps.co.za</a></p></div>
</div>
<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><BusinessOutlinedIcon className="w-10 h-10 align-self-center"/></div>
<div className="basis-2/6"><p className="contacttextsml text-dblue text-default  lg:text-lg text-start" style={{lineHeight:'1.2'}}>Address :<small className="subtext"></small></p></div>
<div className="basis-3/6"><p className="contacttextsml text-dblue text-default lg:text-lg text-start" style={{lineHeight:'1.2'}}> <a href="">7 Huising Avenue<br/>Monte Vista<br/>7460</a></p></div>

</div>
<div className="flex flex-colflex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><WatchLaterOutlinedIcon className="w-10 h-10 align-self-center"/></div>
<div className="basis-2/6"><p className="contacttextsml text-dblue text-default lg:text-lg text-start" style={{lineHeight:'1.2'}}>Trading Hours :<br/><small className="subtext" style={{marginLeft:'0px'}}>(Clothing Store)</small></p></div>
<div className="basis-3/6"><p className="contacttextsml text-dblue text-default lg:text-lg text-start"  style={{lineHeight:'1.2'}}> Tuesdays 07:30am - 08:15am <br/>Wednesday 13:00pm - 14:30pm</p></div>

</div>
</div>



<div className="w-full my-auto p-8 md:basis-1/2 md:text-center">
<div className="container">
      
            <h2 className="text-3xl font-bold tracking-tight text-center text-dblue sm:text-4xl">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-5 mb-5">
                <div className="flex flex-row justify-content-center items-center">
                <label htmlFor="name" className="basis-1/4 block text-lg text-gray-700">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
              
                  onChange={handleChange}
                  required
                  className="basis-3/4 mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              </div>
              <div className="mt-5 mb-5">
              <div className="flex flex-row justify-content-center items-center">
             
                <label htmlFor="email" className="basis-1/4 block text-lg  text-dblue">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="basis-3/4 mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-100 focus:border-blue-900 sm:text-sm"
                />
              </div></div>
              <div className="mt-5 mb-5">
              <div className="flex flex-row justify-content-center items-center">
                <label htmlFor="message" className="basis-1/4 block text-lg  text-dblue">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  required
                  className="basis-3/4 mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div></div>
              <button
                type="submit"
                className="w-[50%] py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-dblue "
              >
                Submit
              </button>
            </form>
 </div></div></div></div></div>

  )
}
