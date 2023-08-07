import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandStackoverflow } from 'react-icons/tb'
import { Pacifico, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets:["latin"],
    weight:['400']
})

const _variants = {
  hover:{
      y:-5,
      transition:{delay:0, duration:0.1}
  },
}

const monoton = Pacifico({
  subsets:["latin"],
  weight:["400"]
})
function ContactForm() {
  const [state, handleSubmit] = useForm("myyaqagk");
  if (state.succeeded) {
      return (
        <div>
            Thank you
        </div>
      );
  }
  return (
    <div
    className='w-full px-10'>
    <section>
      <form onSubmit={handleSubmit} className=''>
        {/* <div className="">
        <div className='pb-12 text-left'>
          <label className='text-5xl font-black text-orange-500'>{"I'M HERE TO MAKE YOUR EXPERIENCE BETTER AND MAKE INTERFACES THAT CAPTURE YOUR ATTENTION."}</label>
        </div>
        </div> */}
        {/* <div className='pb-2'>
          <label htmlFor="name" className='text-white text-3xl'>Full Name</label>
        </div> */}
        <div className="">
        <div className='pb-5'>
          <input type='text' name='Full Name' placeholder='Full Name' className='w-full h-10 md:h-20 rounded-3xl text-center outline-none font-bold text-black' />
        </div>
        {/* <div className='text-white pb-2 text-3xl'>
            <label htmlFor="email" className=''>Email Address</label>
        </div> */}
        <div className='pb-5'>
            <input
            id="email"
            type="email" 
            name="email"
            placeholder='Email ID'
            className='w-full h-10 md:h-20 rounded-3xl text-center outline-none font-bold text-black'
            />
        </div>
        {/* <div className='pb-2'>
          <label htmlFor="subject" className='text-white text-3xl'>Subject</label>
        </div> */}
        <div className='pb-5'>
          <input type='text' name='Subject' placeholder='Subject' className=' rounded-3xl text-center outline-none font-bold textblack w-full h-10 md:h-20' />
        </div>
        <div>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        </div>
        <div className='pb-5'>
            <textarea
            id="message"
            name="message"
            className='rounded-3xl h-20 md:h-40 w-full text-center outline-none font-bold text-black'
            placeholder='Write a message here...'
            />
        </div>
        <div>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        </div>
        <div
        className='flex justify-center font-bold'>
            <button type="submit" disabled={state.submitting} className='bg-textgreen rounded-xl px-5 py-2 border-textgreen text-black transition-all ease-in-out border-2 outline-none'>Submit</button>
        </div>
        </div>
    </form>
    </section>
    </div>
  );
}
function Form() {
  return (
    <ContactForm />
  );
}
export default Form;