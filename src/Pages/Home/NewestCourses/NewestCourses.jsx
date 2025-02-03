// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import NewestCard from './NewestCard';

// const NewestCourses = () => {
//     const newesrcourse = useLoaderData();
//     console.log(newesrcourse)
//     return (
//         <div>
//             <h1>Newest courses : {newesrcourse.length} </h1>

//             <div>
                
//                     {
//                         newesrcourse.map(newest => <NewestCard key={newest._id} newest={newest}>

//                         </NewestCard>)
//                     }
        
//             </div>
//         </div>
//     );
// };

// export default NewestCourses;

import React from 'react';
import NewestCard from './NewestCard';

const NewestCourses = ({ newestCourses }) => {
  return (
    <div>
      <h1 className='text-2xl opacity-80 font-bold mb-5'>Newest Courses: {newestCourses.length}</h1>
      <p className='text-lg opacity-75  mb-5'>#Recently published courses</p>
      <div>
        {newestCourses.map((newest) => (
          <NewestCard key={newest._id} newest={newest} />
        ))}
      </div>
    </div>
  );
};

export default NewestCourses;
