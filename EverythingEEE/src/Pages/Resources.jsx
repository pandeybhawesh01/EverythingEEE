/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../Components/Resources/Cards'
import image1 from '../assets/OIG1.jpeg'
import Header from '../Components/Header'


const Resources = () => {
    return (
        <>
        <Header></Header>
        <div className='  text-center mb-5 '>
            <h1 className='text-4xl '>
                Resources for padhai likhai
            </h1>
        </div>
            <div className='flex flex-wrap bg-black'>
                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

                <Card year="First Year"
                    imageAddress={image1}
                    sourceAdress="xyz" >

                </Card>

            </div>
        </>
    )
}

export default Resources