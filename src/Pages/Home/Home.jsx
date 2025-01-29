import React from 'react';
import lottiedata from '../../../src/assets/Animation - 1738153430323.json';
import Lottie from 'react-lottie';

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
        <div
            className="hero min-h-screen relative"
            style={{
                backgroundImage: 'url("https://img.freepik.com/free-vector/worldmap-background-design_1127-2318.jpg?t=st=1738152508~exp=1738156108~hmac=5f15992e83ddb8d50d14ce75714644915f9dca8742fddfc017241d325195ed89&w=996")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Add an overlay with white background but with reduced opacity */}
            <div className="absolute inset-0 bg-white opacity-50"></div> {/* Adjusted opacity for the overlay */}

            {/* Content */}
            <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
                <div className="lg:w-1/2 sm:w-full flex justify-center">
                    {/* Lottie component with responsive size */}
                    <Lottie
                        options={defaultOptions}
                        height={500}  // Default height for large screen
                        width={400}   // Default width for large screen
                        className="w-full max-sm:w-[250px] max-sm:h-[150px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[400px]"  // Adjust sizes for mobile, tablet, and large screens
                    />
                </div>
                <div className="lg:w-1/2 px-4 md:px-10 mt-5 md:mt-0">
                    <h1 className="md:text-5xl font-sans max-sm:text-4xl text-gray-600 font-bold text-left max-sm:text-start">
                        Let's inception for the <span className="hidden md:inline"> <br /> </span> future..!
                    </h1>
                    <p className="py-6 text-2xl font-sans text-left">
                        Take your career to the next level with industry ready Programs, An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
                    </p>

                    {/* Search Input Section */}
                    <div className="flex items-center mt-5">
                        <div className="relative text-sm w-full max-w-lg">
                            <input
                                type="text"
                                placeholder="Search courses, instructors, and organizations"
                                className="input input-bordered shadow-2xl w-full rounded-full p-9 max-sm:p-7 border-2 border-gray-300 focus:outline-none"  // Rounded and increased padding
                            />
                            {/* Button inside the input */}
                            <button className="btn btn-primary shadow-lg absolute right-0 top-0 mt-3 max-sm:mt-2    px-7  items-center mr-3 rounded-full bg-green-400 text-white hover:bg-green-500">
                                Search
                            </button> {/* Button inside the input */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
