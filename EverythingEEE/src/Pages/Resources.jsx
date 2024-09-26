/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../Components/Resources/Cards'
import image1 from '../assets/OIG1.jpeg'
import Navbar from '../Components/navbar'


const Resources = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='  text-center mb-5 mt-16'>
            <h1 className='text-4xl '>
                Resources for padhai likhai
            </h1>
        </div>
            <div className='flex flex-wrap bg-black'>
                <Card year="1st Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="2nd Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="3rd Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="4th Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="5th Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="6th Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="7th Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>
                <Card year="8th Semester"
                    imageAddress={image1}
                    sourceAdress="xyz" >
                </Card>

            </div>
        </>
    )
}

export default Resources