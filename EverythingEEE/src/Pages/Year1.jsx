/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// Import necessary libraries and Firebase setup
import React, { useEffect, useState } from "react";
import img2 from '../assets/Bitlogo.jpg';
import { storage, ref, getDownloadURL } from "../firebase-config";
import { NavLink } from 'react-router-dom';
import Navbar from "../Components/navbar";

const data = {
  EDAC: {
    modules: {
      'Module 1': ['Semester1/dcmt mod 1 final.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 2': ['path_to_pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 3': ['path_to_pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 4': ['path_to_pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 5': ['path_to_pdf', 'https://www.youtube.com/watch?v=example3'],
    },
  },
  Maths: {
    modules: {
      'Module 1': ['Semester2/Maths1/Module_1_Sequence_Lecture_1.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 2': ['Semester2/Maths1/Module_2.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 3': ['Semester2/Maths1/Module_3.pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 4': ['Semester2/Maths1/Module_4.pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 5': ['Semester2/Maths1/Module_5.pdf', 'https://www.youtube.com/watch?v=example3'],
    },
  },
  PPS: {
    modules: {
      'Module 1': ['Semester2/PPS/PWC NOTES.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 2': ['Semester2/PPS/PWC NOTES.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 3': ['Semester2/PPS/PWC NOTES.pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 4': ['Semester2/PPS/PWC NOTES.pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 5': ['Semester2/PPS/PWC NOTES.pdf', 'https://www.youtube.com/watch?v=example3'],
    },
  },
  BEE: {
    modules: {	
      
      'Module 1': ['Semester2/BEE/Module 1.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 2': ['Semester2/BEE/Module 2.pdf', 'https://www.youtube.com/playlist?list=PLhSp9OSVmeyJBkLSO51JFPSEIIoeRiaJy'],
      'Module 3': ['Semester2/BEE/Module 3.pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 4': ['Semester2/BEE/Module 4.1.pdf', 'https://www.youtube.com/watch?v=example3'],
      'Module 5': ['Semester2/BEE/Module 5.1pptx.pdf', 'https://www.youtube.com/watch?v=example3'],
    },
  },
  // Add other subjects similarly...
};

const Year1 = () => {
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

    if (selectedModule && data[selectedSubject].modules[selectedModule][0]) {
      // Fetch the PDF only if it's selected
      fetchPdfUrl(data[selectedSubject].modules[selectedModule][0]);
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
      <Navbar></Navbar>

      

      {/* Main content section */}
      <div className="p-8 bg-black h-screen w-full">
      <div className=" text-4xl font-bold text-white pt-12 pl-1 text-center">
        Semester 2
      </div>
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
              <option value="pdf">PDF</option>
              <option value="link">Link</option>
            </select>
          </div>
        )}

        {/* Display PDF or YouTube video */}
        {selectedResource && (
          <div className="mb-4 mt-16 ml-6">
            {selectedResource === 'pdf' && pdfUrl ? (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-sky-500">
                Download PDF
              </a>
            ) : selectedResource === 'link' ? (
              <iframe
                width="560"
                height="315"
                src={getYouTubeEmbedURL(data[selectedSubject].modules[selectedModule][1])}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Year1;
