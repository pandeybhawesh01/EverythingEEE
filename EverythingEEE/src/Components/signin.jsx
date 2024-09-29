/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase imports
import { app } from "../firebase-config";
import Form from'../Components/form.jsx'
const ContactUs = () => {
  const [email, setEmail] = useState(''); // Fixed hooks
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app); // Firebase authentication instance
    try {
      // Register the user using Firebase authentication
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className="md:w-[35%] w-[80%] m-auto shadow-2xl p-8 bg-sky-700 rounded-3xl" onSubmit={handleSubmit}>
      <div id="form" className="md:flex justify-center w-[100%] m-auto">
        <div id="left" className="w-[100%] flex-row justify-center">
          <div className="pt-3 md:text-xl text-2xl font-semibold">
            <label>Email: </label>
            {/* Fixed input type to "email" and removed extra spaces */}
            <input
              type="email"
              placeholder="Email"
              className="form-control md:h-[6vh] rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="pt-7 md:text-xl text-2xl font-semibold">
            <label>Password: </label>
            {/* Fixed input type to "password" and placeholder */}
            <input
              type="password"
              placeholder="Password"
              className="form-control md:h-[6vh] rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center pt-[5vh]">
        <button type="submit" className="hover:bg-blue-600 text-white font-bold py-2 px-[5vh] rounded-full hover:text-slate-900 hover:text-xl">
          Register
        </button>
      </div>
      <p>Already registered? <NavLink to="/form">Login</NavLink></p>
    </form>
  );
};

export default ContactUs;
