/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../Components/Resources/Cards';
import image1 from '../assets/OIG1.jpeg';
import Navbar from '../Components/navbar';

const Resources = () => {
  return (
    <>
      <div className=" flex-col w-full text-center items-center justify-center min-h-screen pt-[15vh] bg-black">
        <Navbar />
        <div className='text-center mb-5 mt-16'>
          <h1 className='text-4xl text-blue-600 font-bold underline'>
            Resources
          </h1>
        </div>
        <div className='flex justify-around space-x-4'>
          {/* Adjust the justify-between to justify-center and add spacing */}
          <Card 
            year="1st year"
            sem1="1st sem"
            sem2="2nd sem"

            imageAddress={image1} 
            sourceAdress="/Year1" 
          />
          <Card 
          year="2nd year"
          sem1="1st sem"
          sem2="2nd sem"
            
            imageAddress={image1} 
            sourceAdress="/Year2" 
          />
          </div>
          <div className='flex justify-around space-x-4 mt-16'>
          <Card 
          year="3rd year"
          sem1="1st sem"
          sem2="2nd sem"
            
            imageAddress={image1} 
            sourceAdress="/Year3" 
          />
          <Card 
          year="4th year"
          sem1="1st sem"
          sem2="2nd sem"
            
            imageAddress={image1} 
            sourceAdress="/Year4" 
          />
          </div>
          
        
      </div>
    </>
  );
}

export default Resources;
