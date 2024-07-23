import { useRef } from 'react'
import React from 'react'


const ContactUs = () => {

  return (
    <form  className='md:w-[35%] w-[80%] m-auto shadow-2xl p-8 bg-sky-700 rounded-3xl'>
    <div id='form' className='md:flex justify-cente  w-[100%] m-auto'>
    <div id='left' className='w-[100%] flex-row justify-center  '>
    <div className='pt-3 md:text-xl text-2xl font-semibold  '>
      <label  >Name : </label>
      <input type="text " id='name' name ="name" placeholder="Name" className="form-control md:h-[6vh] rounded-lg"  ></input>
    </div>
    <div className='pt-7 md:text-xl text-2xl font-semibold'>
      <label >Roll No : </label>
      <input type="text"  placeholder="Roll No" class="form-control md:h-[6vh] rounded-lg"  ></input>
    </div>
    </div>
    
    </div>
    <div className=" flex justify-center  text-center pt-[5vh]">
    <button  className=" flex justify-center  text-center hover: bg-blue-600  text-white font-bold py-2 px-[5vh] rounded-full text hover:text-slate-900 hover:text-xl">Start Studying</button> 
    </div>
  </form>
  );
}
export default ContactUs;