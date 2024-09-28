/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Card(props) {
  const [showCircles, setShowCircles] = useState(false); 

  const handleButtonClick = () => {
    setShowCircles(!showCircles);
  };

  return (
    <div className="relative max-w-sm rounded-full overflow-visible shadow-lg mt-5 mr-3 ml-2 bg-slate-200 h-80 w-80 shadow-cyan-500">
      <div className="text-center justify-center mt-12">
        <div className="font-bold text-6xl mb-2 text-center">{props.year}</div>
        <div className='mt-28'>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
        >
          Click
        </button>
        </div>
      </div>

      {showCircles && (
        <>
          
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-slate-300 rounded-full flex items-center justify-center shadow-lg">
            <div className="text-center">
              <a href={props.sourceAdress}>
                <div className="font-bold text-lg mb-2">{props.sem1}</div>
              </a>
            </div>
          </div>

          
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-slate-300 rounded-full flex items-center justify-center shadow-lg">
            <div className="text-center">
              <a href={props.sourceAdress}>
                <div className="font-bold text-lg mb-2">{props.sem2}</div>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
