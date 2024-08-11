import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessIcon from '@mui/icons-material/Business';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailIcon from '@mui/icons-material/Email';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

export default function Contact() {
  return (
    <div>
        <div className="flex flex-row mx-auto my-auto container lg:w-[80%] lg:px-8 h-screen p-4">
<div className="basis-1/2 text-center w-full my-auto p-8">
<h1 className="text-3xl font-bold tracking-tight text-center text-slate-800 sm:text-6xl">Contact us</h1>
<p className="text-default text-dblue text-center leading-tight  font-md mt-5 mb-5 text-justify ">At Monte Vista Primary School, we value open communication and are always eager to hear from our community. Whether you have questions about our curriculum, want to learn more about our Early Development Center, or need assistance with any school-related matter, our dedicated staff is here to help. You can reach us by phone, email, or by visiting our school office during working hours. For your convenience, we've also provided a contact form below for any inquiries you may have. Our school is located in the heart of Cape Town, surrounded by a vibrant community that we proudly serve. We look forward to connecting with you and addressing any of your needs promptly and efficiently.</p>
<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><PhoneAndroidOutlinedIcon className="w-10 h-10 align-self-center" /></div>
<div className="basis-2/6"><p className="text-lg font-md text-dblue ">Telephone :</p></div>
<div className="basis-3/6"><p className="contacttextsml"> <a href="tel:0215584637">(021) 558 4637</a></p></div>
</div>

<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><MailOutlineOutlinedIcon className="w-10 h-10 align-self-center"/></div>
<div className="basis-2/6"><p className="contacttextsml text-lg" style={{lineHeight:'1.2'}}>Email :<small className="subtext">(main)</small><br></br>Email :<small className="subtext">(School Fees)</small><br></br>Email :<small className="subtext">(Accounts)</small></p></div>
<div className="basis-3/6"><p className="contacttextsml text-lg" style={{lineHeight:'1.2'}}> <a href="mailto:montevistaprimaryschool@gmail.com">Montevistaprimaryschool@gmail.com</a><br></br><a href="mailto:fees.montevista@gmail.com">Fees.montevista@gmail.com</a><br></br><a href="mailto:finance@montevistaps.co.za">Finance@montevistaps.co.za</a></p></div>
</div>
<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><BusinessOutlinedIcon className="w-10 h-10 align-self-center"/></div>
<div className="basis-2/6"><p className="contacttextsml text-lg" style={{lineHeight:'1.2'}}>Address :<small className="subtext"></small></p></div>
<div className="basis-3/6"><p className="contacttextsml text-lg" style={{lineHeight:'1.2'}}> <a href="">7 Huising Avenue<br/>Monte Vista<br/>7460</a></p></div>

</div>
<div className="flex flex-row mx-auto my-auto  p-3">
<div className="basis-1/6"><WatchLaterOutlinedIcon /></div>
<div className="basis-2/6"><p className="contacttextsml text-lg text-start" style={{lineHeight:'1.2'}}>Trading Hours :<br/><small className="subtext" style={{marginLeft:'0px'}}>(Clothing Store)</small></p></div>
<div className="basis-3/6"><p className="contacttextsml text-lg"  style={{lineHeight:'1.2'}}> Tuesdays 07:30am - 08:15am <br/>Wednesday 13:00pm - 14:30pm</p></div>

</div>
</div>
</div>


<div className="basis-1/2"></div>
        </div>

  )
}
