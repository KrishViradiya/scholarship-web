// // data/scholarships.js
// export const scholarships = [
//     {
//       id: 1,
//       title: 'Scholarship 1',
//       shortDescription: 'Short description for Scholarship 1.',
//       fullDescription: 'Detailed description for Scholarship 1.',
//       image: 'url_to_image_1',
//     },
//     // Add more scholarship objects as needed
//   ];

import React from "react";
import ScholarshipCard from "../Components/ScholarshipCard/ScholarshipCard";
import { FiSearch } from "react-icons/fi";

function Scholarship() {
  const cardArray = [
    {
      id: 1,
      title: "Sample Scholarship 1",
      slug: "sample-scholarship-1",
      shortDescription:
        "This is a sample scholarship with a short description.",
      fullDescription:
        "This is a sample scholarship with a longer and more detailed description. It provides financial assistance to deserving students for pursuing higher education.",
      image:
        "https://images.unsplash.com/photo-1695220539847-31f3a2453bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Sample Scholarship 2",
      slug: "sample-scholarship-2",
      shortDescription:
        "This is a sample scholarship for students interested in STEM fields.",
      fullDescription:
        "This sample scholarship is open to students of all backgrounds who are interested in pursuing STEM degrees. It provides financial assistance to cover the cost of tuition, fees, and other expenses.",
      image:
        "https://images.unsplash.com/photo-1695711453545-0b33b06df225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Sample Scholarship 3",
      slug: "sample-scholarship-3",
      shortDescription:
        "This is a sample scholarship for students who are passionate about making a difference in the world.",
      fullDescription:
        "This sample scholarship is open to students of all backgrounds who are passionate about making a difference in the world. It provides financial assistance to students who are pursuing degrees in fields such as social work, public health, and education.",
      image:
        "https://plus.unsplash.com/premium_photo-1695304999779-c72c5fce2c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Sample Scholarship 4",
      slug: "sample-scholarship-4",
      shortDescription:
        "This is a sample scholarship for students who are facing financial hardship.",
      fullDescription:
        "This sample scholarship is open to students of all backgrounds who are facing financial hardship. It provides financial assistance to help students cover the cost of tuition, fees, and other expenses.",
      image:
        "https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "Sample Scholarship 5",
      slug: "sample-scholarship-5",
      shortDescription:
        "This is a sample scholarship for students who are interested in pursuing a career in the arts.",
      fullDescription:
        "This sample scholarship is open to students of all backgrounds who are interested in pursuing a career in the arts. It provides financial assistance to students who are pursuing degrees in fields such as music, dance, theater, and visual art.",
      image:
        "https://plus.unsplash.com/premium_photo-1676068244015-6d08a8759079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "Sample Scholarship 2",
      slug: "sample-scholarship-2",
      shortDescription:
        "Another example of a scholarship with a brief description.",
      fullDescription:
        "This is a sample scholarship with a longer and more detailed description. It supports students in their educational journey by covering tuition fees and other expenses.",
      image:
        "https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      title: "Sample Scholarship 3",
      slug: "sample-scholarship-3",
      shortDescription:
        "A third sample scholarship with a concise description.",
      fullDescription:
        "This is a sample scholarship with a comprehensive description. It aims to assist students in their academic pursuits by offering financial aid.",
      image:
        "https://images.unsplash.com/photo-1695192665858-09995afefef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    // Add more sample scholarships as needed
  ];

  return (
    <>
      <div className="w-full flex flex-row justify-center mb-10 mt-10">
        <div className="bg-white rounded-full flex items-center w-1/3 pl-2 pr-4 py-2  shadow-lg ">
          <input
            type="text"
            placeholder="Scholarships.."
            className="w-full p-2 outline-none bg-transparent text-slate-900"
          />
          <button className="text-blue-500 hover:underline focus:outline-none">
            {<FiSearch className="text-2xl" />}
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {cardArray.map((item) => (
          <ScholarshipCard
            title={item.title}
            key={item.id}
            description={item.shortDescription}
            img={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default Scholarship;
