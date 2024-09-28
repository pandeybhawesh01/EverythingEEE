/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Components/navbar";
import shivam from '../assets/shivam.png';
import bhawesh from '../assets/image.png';


const AboutUs = () => {
    return (
        <>
            <Navbar />

            <div className="bg-slate-950 min-h-screen py-10">
                <header className="text-center mb-12 mt-12">
                    <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
                </header>

                <section className="container mx-auto flex flex-col justify-center items-center gap-10">
                    {/* First Card */}
                    <div className="bg-sky-600 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
                        <img
                            src={bhawesh}
                            alt="Team"
                            className="w-[255px] h-[255px] md:w-1/3 object-cover rounded-full"
                        />
                        <div className="p-6 w-full">
                            <p className="text-white">
                                An enthusiastic Electrical and Electronics Engineering (EEE) student at BIT Mesra, is deeply invested in problem-solving through DSA and web development. Recognizing the academic challenges faced by his peers, Bhawesh co-developed this platform to provide easy access to semester exam preparation resources. His dedication to enhancing the learning experience has been key in curating a website filled with valuable notes, tutorials, and past papers, making it an essential tool for EEE students.
                            </p>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="bg-sky-600 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
                        <img
                            src={shivam}
                            alt="Office"
                            className="w-[255px] h-[255px] md:w-1/3 object-cover rounded-full"
                        />
                        <div className="p-6 w-full">
                            <p className="text-white">
                            A dedicated student from the Electrical and Electronics Engineering (EEE) department at BIT Mesra, has a keen interest in problem-solving through Data Structures and Algorithms (DSA) and web development. His passion for coding and technology led him to co-create this platform, aimed at helping fellow EEE students excel in their academics. With a vision to simplify semester exam preparation, Shivam has contributed to building a resourceful website that offers essential notes, tutorials, and study materials in one place.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
