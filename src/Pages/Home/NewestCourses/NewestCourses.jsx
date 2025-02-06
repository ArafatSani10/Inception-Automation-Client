

import React from 'react';
import NewestCard from './NewestCard';

const NewestCourses = ({ newestCourses }) => {
  return (
    <div>
      <h1 className='text-2xl opacity-80 font-bold mb-5'> Courses: {newestCourses.length}</h1>
      <p className='text-lg opacity-75  mb-5'>#Recently published courses</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {newestCourses.map((newest) => (
          <NewestCard key={newest._id} newest={newest} />
        ))}
      </div>
    </div>
  );
};

export default NewestCourses;
