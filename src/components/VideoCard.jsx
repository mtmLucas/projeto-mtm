// src/components/VideoCard.jsx
import React from 'react';

function VideoCard({ titulo, urlDoVideo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-80 hover:shadow-xl transition">

      <div className='flex justify-center'>

        <iframe
          className='w-full h-40 object-cover rounded-md mb-4'
          src={urlDoVideo}
          title={titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      <div className="p-2 flex justify-center ">
        <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
      </div>
    </div>
  );
}

export default VideoCard;