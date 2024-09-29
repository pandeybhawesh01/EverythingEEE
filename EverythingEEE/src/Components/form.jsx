/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../firebase-config"; 

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      navigate('/resources'); 
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  return (
    <>
            <div className=" bg-black flex-row w-[100%] text-center items-center justify-center min-h-[100vh] pt-[15vh] ">
                
                    <div className="">
                        <div className=" text-6xl text-[#209EE4] font-bold">
                            EveryThing
                        </div>
                        <div className=" text-6xl md:pl-[27vh] pl-[15vh] text-[#209EE4]  font-bold">
                            EEE....
                        </div>
                    </div>
                    <div className='md:pt-10 pt-[10vh]'>
                    <div>
      <h1 className='text-center text-2xl font-bold'>Login</h1>
      <form className='md:w-[35%] w-[80%] m-auto shadow-2xl p-8 bg-sky-700 rounded-3xl' onSubmit={handleSubmit}>
        <div id='form' className='md:flex justify-center w-[100%] m-auto'>
          <div id='left' className='w-[100%] flex-row justify-center'>
            <div className='pt-3 md:text-xl text-2xl font-semibold'>
              <label>Email: </label>
              <input
                type="email"
                id='email'
                placeholder="Email"
                className="form-control md:h-[6vh] rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className='pt-7 md:text-xl text-2xl font-semibold'>
              <label>Password: </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control md:h-[6vh] rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center pt-[5vh]">
          <button
            type='submit'
            className="flex justify-center text-center hover:bg-blue-600 text-white font-bold py-2 px-[5vh] rounded-full hover:text-slate-900 hover:text-xl"
          >
            Login
          </button>
        </div>
        <p className="text-center mt-4">
          Don't have an account? <NavLink to="/landing" className="text-blue-500">Register</NavLink>
        </p>
      </form>
    </div>
                    </div>
                    
                

                
            </div>
            
        </>
    
  );
};

export default ContactUs;
