/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// Import necessary libraries and Firebase setup
import React, { useEffect, useState } from "react";
import img2 from '../assets/Bitlogo.jpg';
import { storage, ref, getDownloadURL } from "../firebase-config";
import { NavLink } from 'react-router-dom';

const data = {
  EDAC: {
    modules: {
      'Module 1': ['PDF', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy', 'Semester1/dcmt mod 1 final.pdf'],
      'Module 2': ['PDF', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy', 'path_to_pdf'],
      'Module 3': ['PDF', 'https://www.youtube.com/watch?v=example3', 'path_to_pdf'],
      // Add the rest of your modules...
    },
  },
  // Add other subjects similarly...
};

const Year2 = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const fetchPdfUrl = async (path) => {
      try {
        const fileRef = ref(storage, path);
        const url = await getDownloadURL(fileRef);
        setPdfUrl(url);
      } catch (error) {
        console.error("Error fetching PDF from Firebase: ", error);
      }
    };

    if (selectedModule && data[selectedSubject].modules[selectedModule][2]) {
      // Fetch the PDF only if it's selected
      fetchPdfUrl(data[selectedSubject].modules[selectedModule][2]);
    }
  }, [selectedModule, selectedSubject]);

  // Function to extract YouTube video or playlist ID from URL
  const getYouTubeEmbedURL = (url) => {
    if (url.includes('list=')) {
      const playlistID = new URL(url).searchParams.get('list');
      return `https://www.youtube.com/embed/videoseries?list=${playlistID}`;
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoID = match && match[2].length === 11 ? match[2] : null;
    return `https://www.youtube.com/embed/${videoID}`;
  };

  return (
    <>
      {/* Header section */}
      <div className='relative bg-black h-24 flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='text-[rgb(32,158,228)] text-7xl font-bold ml-4 mt-2 mb-2'>Semester 2</div>
          <div id="container" className='mr-8 ml-28'>
            <ul className='flex space-x-8 ml-10'>
              <li><NavLink to="/" className={"text-3xl text-white hover:text-sky-600 ml-5"}>Home</NavLink></li>
              <li><NavLink to="/resources" className={"text-3xl text-white hover:text-sky-600 ml-7"}>Resources</NavLink></li>
              <li><NavLink to="/workshops" className={"text-3xl text-white hover:text-sky-600 ml-7"}>Alumni</NavLink></li>
              <li><NavLink to="/contactUs" className={"text-3xl text-white hover:text-sky-600 ml-7"}>Contact Us</NavLink></li>
              <li><NavLink to="/about" className={"text-3xl text-white hover:text-sky-600 ml-7"}>About Us</NavLink></li>
            </ul>
          </div>
        </div>
        <div id="logo" className='absolute top-0 right-0 p-2'>
          <img className="h-20 w-20 rounded-full mr-3" src={img2} alt="Logo" />
        </div>
      </div>

      {/* Main content section */}
      <div className="p-8 bg-black h-screen w-full">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Subject</label>
          <select
            className="w-full border border-gray-300 p-2 rounded shadow-md hover:shadow-xl hover:shadow-sky-800"
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedModule(null);
              setSelectedResource(null);
              setPdfUrl(null);  // Reset PDF URL when subject changes
            }}
          >
            <option value="">Select a subject</option>
            {Object.keys(data).map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        {selectedSubject && (
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Module</label>
            <select
              className="w-full border border-gray-300 p-2 rounded shadow-md hover:shadow-xl hover:shadow-sky-800"
              onChange={(e) => {
                setSelectedModule(e.target.value);
                setSelectedResource(null);  // Reset selected resource
                setPdfUrl(null);  // Reset PDF URL when module changes
              }}
            >
              <option value="">Select a module</option>
              {Object.keys(data[selectedSubject].modules).map((module) => (
                <option key={module} value={module}>{module}</option>
              ))}
            </select>
          </div>
        )}

        {selectedModule && (
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Notes/PDF</label>
            <select
              className="w-full border border-gray-300 p-2 rounded shadow-md hover:shadow-xl hover:shadow-sky-800"
              onChange={(e) => setSelectedResource(e.target.value)}
            >
              <option value="">Select a note or PDF</option>
              {data[selectedSubject].modules[selectedModule].map((item, index) => (
                <option key={index} value={item}>{index === 0 ? 'PDF' : 'Link'}</option>
              ))}
            </select>
          </div>
        )}

        {/* Display PDF or YouTube video */}
        {selectedResource && (
          <div className="mb-4 mt-16 ml-6">
            {selectedResource === 'PDF' && pdfUrl ? (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-sky-500">
                Download PDF
                </a>
            ) : (
              <iframe
                width="560"
                height="315"
                src={getYouTubeEmbedURL(data[selectedSubject].modules[selectedModule][1])}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Year2;
