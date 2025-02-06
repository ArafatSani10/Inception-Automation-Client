import React from 'react';
import { MdDone } from 'react-icons/md';
import { PiStudent, PiBook, PiStar, PiCalendar } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';

const InstructorDetails = () => {
    const { instructorImage, workTitle, instructorName, followerFollowing, student, courses, reviews, meeting, about, skills, skills1, skills2, skills3, skills4, skills5, following, bg } = useLoaderData();

    const rating = reviews;
    const totalStars = 5;
    const stars = Array.from({ length: totalStars }, (_, index) => index < rating ? '★' : '☆');

    return (
        <div>
            {/* Existing Instructor Details Section */}
            <div className="relative flex flex-col w-full mx-auto border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-auto bg-cover bg-center"
                style={{ backgroundImage: "url('https://inceptionbd.com/store/1/default_images/default_cover.jpg')" }}>

                {/* Dark Overlay for Background Blur */}
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 blur-lg rounded-3xl"></div>

                {/* Main Content Section */}
                <div className="flex flex-col sm:flex-row gap-5 relative z-10 md:p-16">
                    {/* Instructor Image */}
                    <div className="relative mt-5 my-5 flex justify-center flex-shrink-0">
                        <img className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-lg transition-all duration-300" src={instructorImage} alt="Instructor" />
                        {/* Verification Icon */}
                        <MdDone className="absolute text-xl mt-32 max-sm:mt-20 border w-8 h-8 ml-28 bg-blue-500 text-white rounded-full" />
                    </div>

                    {/* Instructor Details */}
                    <div className="flex flex-col items-start space-y-3">
                        {/* Instructor Name */}
                        <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">{instructorName}</h1>

                        {/* Star Rating */}
                        <div className="flex justify-start space-x-1">
                            {stars.map((star, index) => (
                                <span key={index} className="text-yellow-500 text-3xl">{star}</span>
                            ))}
                        </div>

                        {/* Follower and Following with Divider */}
                        <div className="flex justify-start items-center mt-3 w-full space-x-8">
                            <div className="text-center">
                                <h1 className="text-lg text-white font-semibold">{followerFollowing}</h1>
                                <p className="text-sm font-semibold text-white opacity-75">Followers</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-lg text-white font-semibold">{following}</h1>
                                <p className="text-sm font-semibold text-white opacity-75">Following</p>
                            </div>
                        </div>

                        {/* Follow Button */}
                        <div className="flex justify-start mt-5">
                            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                {/* White Divider */}
                <div className="mt-4">
                    <hr className="border-t-2 border-white" />
                </div>

                {/* Stats Section (Grid Layout for better responsiveness) */}
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5'>

                    {/* Students Section */}
                    <div className="p-5 border-2 shadow-xl rounded-xl bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center items-center border bg-white p-4 rounded-full">
                            <PiStudent className="text-6xl text-green-600" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-white">{student}</h2>
                            <p className="text-sm font-semibold text-white opacity-75">Students</p>
                        </div>
                    </div>

                    {/* Courses Section */}
                    <div className="p-5 border-2 shadow-xl rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center items-center border bg-white p-4 rounded-full">
                            <PiBook className="text-6xl text-blue-600" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-white">{courses}</h2>
                            <p className="text-sm font-semibold text-white opacity-75">Courses</p>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="p-5 border-2 shadow-xl rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center items-center border bg-white p-4 rounded-full">
                            <PiStar className="text-6xl text-yellow-600" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-white">{reviews}</h2>
                            <p className="text-sm font-semibold text-white opacity-75">Reviews</p>
                        </div>
                    </div>

                    {/* Meeting Section */}
                    <div className="p-5 border-2 shadow-xl rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center items-center border bg-white p-4 rounded-full">
                            <PiCalendar className="text-6xl text-purple-600" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-white">{meeting}</h2>
                            <p className="text-sm font-semibold text-white opacity-75">Meetings</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* New Section Below Existing Content */}

            {/* New Section Below Existing Content */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-200 rounded-3xl max-sm:p-4 md:p-12 mt-11 shadow-xl w-full mx-auto">
                <h2 className="md:text-3xl max-sm:text-xl font-semibold text-gray-900">About</h2>
                <h1 className='h-1 bg-yellow-400 w-20 mb-5'></h1>
                <div className="text-lg text-gray-700 space-y-4">
                    {/* Looping through about content line by line */}
                    {about.split('\n').map((line, index) => (
                        <p key={index} className="leading-relaxed max-sm:text-[12px] font-mono font-bold opacity-65">{line}</p>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default InstructorDetails;
