import React from 'react';
import { CiCalendar, CiTimer } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const NewestCard = ({ newest }) => {
    const {_id, detailsBackgroundImage, courseName, workMethod, instructorImage, instructorName, learn1, learn2, learn3, learn4, learn5, learn6, tag1, tag2, tag3, tag4, tag5, aboutCourse, date, time, courseFee, backgroundCardImage } = newest;

    return (
        <div className="card card-compact bg-white rounded-xl shadow-lg overflow-hidden w-[420px] hover:scale-105 transform transition-all duration-300">
            <figure className="relative">
                <img
                    src={backgroundCardImage}
                    alt="Course Background"
                    className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-xl"></div>
            </figure>
            <div className="card-body p-6">
                {/* Instructor Info */}
                <div className='flex items-center gap-3 mb-4'>
                    <img className='w-12 h-12 rounded-full border-2 border-green-500' src={instructorImage} alt="Instructor" />
                    <h2 className="text-xl font-semibold text-gray-800">{instructorName}</h2>
                </div>

                {/* Course Name */}
                <Link to={`/newest/${_id}`}>  <h3 className="text-xl font-bold text-gray-900 mb-2">{courseName}</h3></Link>

                {/* Work Method */}
                <div className='flex items-center gap-1 mb-3'>
                    <span className="text-sm text-gray-500">In</span>
                    <p className='underline text-sm text-gray-700'>{workMethod}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-yellow-400 text-4xl">★</span>
                    ))}
                    <button className="bg-green-300 text-white text-sm font-semibold py-1 px-3 rounded-lg ml-4">5.00</button>
                </div>

                {/* Time & Date */}
                <div className='flex  justify-between mb-4'>
                    <div className='flex items-center text-gray-600 text-sm'>
                        <CiTimer className="mr-2 text-xl" /> <h1 className='text-xl'>{time}</h1>
                    </div>
                    <div className='flex items-center text-gray-600 text-sm'>
                        <CiCalendar className="mr-2 text-xl" /> <h1 className='text-xl'>{date}</h1>
                    </div>
                </div>

                {/* Course Fee */}
                <div className='mt-4'>
                    <h4 className="text-2xl font-bold text-green-500">{courseFee}</h4>
                </div>
            </div>
        </div>
    );
};

export default NewestCard;
