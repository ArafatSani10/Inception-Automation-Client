import React from 'react';
import lottiedata from '../../../src/assets/Animation - 1738153430323.json';
import Lottie from 'react-lottie';
import Card from '../Card/Card';
import FeaturedCourses from './FeaturedCourses';

const Home = () => {
    const defaultOptions = {
        loop: true, // অ্যানিমেশনটি লুপ হবে
        autoplay: true, // অ্যানিমেশনটি স্বয়ংক্রিয়ভাবে শুরু হবে
        animationData: lottiedata, // JSON ডেটা
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice", // অ্যানিমেশনটি প্রোপারলি সাইজ হবে
        }
    };

    return (
        <div>
            <div
                className="hero h-[70vh] max-sm:h-[86vh] relative  "
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/worldmap-background-design_1127-2318.jpg?t=st=1738158943~exp=1738162543~hmac=3395ce8a21326c35cf995e983ed721660677590ec99310e33fce153d3130ddcf&w=996")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay with reduced opacity */}
                <div className="absolute   inset-0 bg-white opacity-50"></div>

                {/* Content */}
                <div className="hero-content flex-col lg:flex-row-reverse relative z-10 flex justify-center items-center">
                    <div className="lg:w-1/2 sm:w-full flex justify-center">
                        {/* Lottie component with responsive size */}
                        <Lottie
                            options={defaultOptions}
                            height={510}  // Default height for large screen
                            width={360}   // Default width for large screen
                            className="w-full sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[300px]"
                        />
                    </div>
                    <div className="lg:w-1/2 px-4 md:px-10 mt-5 md:mt-0">
                        <h1 className="md:text-5xl  max-sm:text-3xl text-gray-600 font-bold text-left max-sm:text-start">
                            Let's inception for the <span className="hidden md:inline"> <br /> </span> future...
                        </h1>
                        <p className="py-6 text-2xl max-sm:text-sm font-sans opacity-70 text-left">
                            Take your career to the next level with industry ready Programs, An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
                        </p>


                        {/* Search Input Section */}
                        <div className="flex items-center mt-5">
                            <div className="relative text-sm w-full max-w-lg">
                                <input
                                    type="text"
                                    placeholder="Search courses, instructors, and organizations"
                                    className="input input-bordered shadow-2xl w-full rounded-full p-9 max-sm:p-7 border-2 border-gray-300 focus:outline-none"
                                />
                                <button className="btn btn-primary shadow-lg absolute right-0 top-0 mt-3 max-sm:mt-2 px-7 items-center mr-3 rounded-full bg-green-400 text-white hover:bg-green-500">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD COMPONENTS HERE.... */}
            <Card></Card>

            {/* Featured courses here.... */}
            <div className='mt-32'>
                <FeaturedCourses >
                    
                </FeaturedCourses>
            </div>
        </div>
    );
};

export default Home;
