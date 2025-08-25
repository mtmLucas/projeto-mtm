// src/components/VideoCard.jsx
import React from 'react';

function VideoCard({ titulo, urlDoVideo }) {
  return (
    <div className="w-lg bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className='flex justify-center'>

        <iframe 
        width="560"
        height="315" 
        src={urlDoVideo} 
        title={titulo} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>

      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{titulo}</h3>
      </div>
    </div>
  );
}

export default VideoCard;