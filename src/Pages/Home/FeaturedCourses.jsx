import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCourseCard from './FeaturedCourseCard';

const FeaturedCourses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className="container mx-auto ">
            <h1 className='text-3xl font-bold'>Featured Courses : {courses.length} </h1>
            <p className='text-xl  opacity-35 mb-10 mt-4'>#Browse featured courses and become skillful</p>
            <div className='container'>

                {
                    courses.map(course => <FeaturedCourseCard key={course._id} courses={course}></FeaturedCourseCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedCourses;