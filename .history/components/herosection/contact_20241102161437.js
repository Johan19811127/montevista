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
import Image from 'next/image';


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
    <div className="w-full min-h-screen content-center items-center">
      
       
        <div className="flex flex-col  my-auto p-2">
       

<div className="lg:basis-5/8 text-center my-auto w-full  p-3 md:p-4">
<h1 className="text-4xl font-bold tracking-tight mb-3 text-center text-gray-800 md:text-6xl">Get in touch</h1>
<p className="text-default text-gray-700 text-center leading-tight  font-md mt-5 mb-5 text-justify ">At Monte Vista Primary School, we value open communication and are always eager to hear from our community. Whether you have questions about our curriculum, want to learn more about our Early Development Center, or need assistance with any school-related matter, our dedicated staff is here to help. You can reach us by phone, email, or by visiting our school office during working hours. </p>
<div className="lg:container mx-auto lg:w-[80%] flex flex-col lg:flex-row p-3
">

<div className=" lg:basis-2/6 items-center text-start lg:px-5 "><p className=" text-xl mb-3 md:mb-1 lg:text-md font-bold text-gray-800 "><PhoneAndroidOutlinedIcon className="mr-5  md:w-12 md:h-12 align-self-center" />Telephone:</p></div>
<div className=" lg:basis-4/6 text-start "><p className="text-xl mb-3 md:mb-1 lg:text-md font-bold text-start"></p> <a href="tel:0215584637" className="text-md lg:text-md font-semibold text-start">(021) 558 4637</a></div>
</div>

<div className="lg:container mx-auto lg:w-[80%] flex flex-col lg:flex-row p-3">

<div className=" lg:basis-2/6 items-center text-start lg:px-5 "><p className=" text-xl mb-3 md:mb-1 lg:text-md font-bold text-gray-800 "><MailOutlineOutlinedIcon className=" mr-5  md:w-12 md:h-12 align-self-center"/>Email:</p></div>
<div className="lg:basis-4/6 text-start">
<div className="flex flex-col lg:flex-row">
  <div className="lg:basis-1/6 ">
<p className="text-md lg:text-md font-semibold text-start "> Main :</p></div>
<div className="lg:basis-5/6 text-start">
<a href="mailto:montevistaprimaryschool@gmail.com" className="text-md lg:text-md text-gray-700 font-normal text-start"> Montevistaprimaryschool@gmail.com</a></div></div>
<p className="text-md lg:text-md font-semibold text-start ">Fees: <a href="mailto:fees@montevistaps.co.za" className="ml-9 text-md lg:text-md text-gray-700 font-normal text-start">fees@montevistaps.co.za</a></p>
<p className="text-md lg:text-md font-semibold text-start ">Finance:<a href="mailto:finance@montevistaps.co.za" className="ml-3 text-md lg:text-md text-gray-700 font-normal text-start"> Finance@montevistaps.co.za</a></p>
<p className="text-md lg:text-md font-semibold text-start ">Store:<a href="mailto:finance@montevistaps.co.za" className="ml-7 text-md lg:text-md text-gray-700 font-normal text-start"> Clothingstore@montevistaps.co.za</a></p></div>
</div>
<div className="lg:container mx-auto lg:w-[80%] flex flex-col lg:flex-row p-3">

<div className=" lg:basis-2/6 items-center text-start lg:px-5 "><p className=" text-xl mb-3 md:mb-1 lg:text-md font-bold text-gray-800 "><BusinessOutlinedIcon className="mr-5  md:w-12 md:h-12 align-self-center"/>Address:</p></div>
<div className="lg:basis-4/6 text-start"><p className="text-lg lg:text-xl font-bold text-gray-800 text-start"></p>
 <a href="">7 Huising Avenue<br/>Monte Vista<br/>7460</a></div>

</div>
<div className="lg:container mx-auto lg:w-[80%] flex flex-col lg:flex-row p-3">

<div className="lg:basis-2/6 items-center text-start lg:px-5 "><p className=" text-lg mb-3 md:mb-1 lg:text-md font-bold text-gray-800 "><WatchLaterOutlinedIcon className="mr-5  md:w-12 md:h-12 align-self-center"/>Shop Hours:</p></div>
<div className="lg:basis-4/6 text-start"><p className="text-lg lg:text-xl font-bold text-gray-800 text-start"></p><p>Tuesdays 07:30am - 08:15am <br/>Wednesday 13:00pm - 14:30pm</p></div>

</div>
</div>

</div>
</div>



 


  )
}
