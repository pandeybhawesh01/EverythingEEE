/* eslint-disable no-unused-vars */
// Year1.js
import React, { useEffect, useState } from "react";
import { storage, ref, getDownloadURL } from "../firebase-config";

const Year1 = () => {
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      // Define the paths to your files here, removing 'gs://' and bucket name
      const paths = [
        'Semester1/dcmt mod 1 final.pdf',
      ];

      try {
        const fileRefs = paths.map(path => ref(storage, path));
        const urls = await Promise.all(fileRefs.map(fileRef => getDownloadURL(fileRef)));
        setFileUrls(urls);
      } catch (error) {
        console.error("Error fetching file URLs: ", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      {fileUrls.map((url, index) => (
        <div key={index}>
          <a href={url} target="_blank" rel="noopener noreferrer">File {index + 1}</a>
        </div>
      ))}

      
    </div>
  );
};

export default Year1;
