import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './ScholarshipCard.css';

function ScholarshipCard({ title, img, description, id }) {

  const url = "scholarship/" + id;

  return (
    <div className='w-[300px] h-[450px] m-4 p-2 rounded-xl shadow-md flex flex-col' id='s-card'>
      <Link
        to={url}
        className="bg-white rounded-lg overflow-hidden  mx-auto max-w-md hover:shadow-lg transition-shadow duration-300"
      >
        <img className="w-full h-56 object-cover rounded-2xl my-1 mt-1" src={img} alt="Scholarship" />
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-700 line-clamp-4 text-justify h-[96px]">
            {description}
          </p>
          <div className="mt-4 text-right">
            <p className="text-blue-500 hover:text-blue-600 cursor-pointer">Read More</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ScholarshipCard;
