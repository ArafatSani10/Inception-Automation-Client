
// import React, { useEffect, useState } from 'react';
// import lottiedata from '../../../src/assets/Animation - 1738153430323.json';
// import Lottie from 'react-lottie';
// import Card from '../Card/Card';
// import FeaturedCourses from './FeaturedCourses';
// import NewestCourses from './NewestCourses/NewestCourses';
// import Instructor from '../InstructorsPage/Instructor';

// const Home = () => {
//     const [newestCourses, setNewestCourses] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch newest courses data
//     useEffect(() => {
//         fetch('http://localhost:5000/newest')
//             .then((response) => response.json())
//             .then((data) => {
//                 setNewestCourses(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching newest courses:", error);
//                 setLoading(false);
//             });
//     }, []);



//     const defaultOptions = {
//         loop: true, // animation will loop
//         autoplay: true, // animation will start automatically
//         animationData: lottiedata, // JSON data
//         rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice", // animation will properly size
//         }
//     };

//     return (
//         <div>
//             <div
//                 className="hero h-[70vh] max-sm:h-[86vh] relative"
//                 style={{
//                     backgroundImage: 'url("https://img.freepik.com/free-vector/worldmap-background-design_1127-2318.jpg?t=st=1738158943~exp=1738162543~hmac=3395ce8a21326c35cf995e983ed721660677590ec99310e33fce153d3130ddcf&w=996")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div className="absolute inset-0 bg-white opacity-50"></div>
//                 <div className="hero-content flex-col lg:flex-row-reverse relative z-10 flex justify-center items-center">
//                     <div className="lg:w-1/2 sm:w-full flex justify-center">
//                         <Lottie
//                             options={defaultOptions}
//                             height={510}
//                             width={360}
//                             className="w-full sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[300px]"
//                         />
//                     </div>
//                     <div className="lg:w-1/2 px-4 md:px-10 mt-5 md:mt-0">
//                         <h1 className="md:text-5xl max-sm:text-3xl text-gray-600 font-bold text-left max-sm:text-start">
//                             Let's inception for the <span className="hidden md:inline"> <br /> </span> future...
//                         </h1>
//                         <p className="py-6 text-2xl max-sm:text-sm font-sans opacity-70 text-left">
//                             Take your career to the next level with industry ready Programs, An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
//                         </p>
//                         <div className="flex items-center mt-5">
//                             <div className="relative text-sm w-full max-w-lg">
//                                 <input
//                                     type="text"
//                                     placeholder="Search courses, instructors, and organizations"
//                                     className="input input-bordered shadow-2xl w-full rounded-full p-9 max-sm:p-7 border-2 border-gray-300 focus:outline-none"
//                                 />
//                                 <button className="btn btn-primary shadow-lg absolute right-0 top-0 mt-3 max-sm:mt-2 px-7 items-center mr-3 rounded-full bg-green-400 text-white hover:bg-green-500">
//                                     Search
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* CARD COMPONENTS HERE.... */}
//             <Card></Card>

//             {/* Featured courses here.... */}
//             <div className='mt-32'>
//                 <FeaturedCourses></FeaturedCourses>
//             </div>

//             {/* Newest Courses - Pass the fetched data as a prop */}
//             <div className="mt-32">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <NewestCourses newestCourses={newestCourses} />
//                 )}
//             </div>



//             {/* Best selling  Courses - Pass the fetched data as a prop */}

//             <div className="mt-32">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <NewestCourses newestCourses={newestCourses} />
//                 )}
//             </div>



//             {/* out inceptions instructors starts here */}

//          <Instructor></Instructor>

//             {/* out inceptions instructors ends here */}
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import lottiedata from '../../../src/assets/Animation - 1738153430323.json';
import Lottie from 'react-lottie';
import Card from '../Card/Card';
import FeaturedCourses from './FeaturedCourses';
import NewestCourses from './NewestCourses/NewestCourses';
import Instructor from '../InstructorsPage/Instructor';

const Home = () => {
    const [newestCourses, setNewestCourses] = useState([]);
    const [instructors, setInstructors] = useState([]); // State for instructors
    const [loading, setLoading] = useState(true);

    // Fetch newest courses data
    useEffect(() => {
        fetch('http://localhost:5000/newest')
            .then((response) => response.json())
            .then((data) => {
                setNewestCourses(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching newest courses:", error);
                setLoading(false);
            });
    }, []);

    // Fetch instructors data
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then((response) => response.json())
            .then((data) => setInstructors(data))
            .catch((error) => {
                console.error("Error fetching instructors:", error);
            });
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottiedata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero h-[70vh] max-sm:h-[86vh] relative" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/worldmap-background-design_1127-2318.jpg?t=st=1738158943~exp=1738162543~hmac=3395ce8a21326c35cf995e983ed721660677590ec99310e33fce153d3130ddcf&w=996")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <div className="hero-content flex-col lg:flex-row-reverse relative z-10 flex justify-center items-center">
                    <div className="lg:w-1/2 sm:w-full flex justify-center">
                        <Lottie options={defaultOptions} height={510} width={360} className="w-full sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[300px]" />
                    </div>
                    <div className="lg:w-1/2 px-4 md:px-10 mt-5 md:mt-0">
                        <h1 className="md:text-5xl max-sm:text-3xl text-gray-600 font-bold text-left max-sm:text-start">
                            Let's inception for the <span className="hidden md:inline"> <br /> </span> future...
                        </h1>
                        <p className="py-6 text-2xl max-sm:text-sm font-sans opacity-70 text-left">
                            Take your career to the next level with industry ready Programs, An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
                        </p>
                        <div className="flex items-center mt-5">
                            <div className="relative text-sm w-full max-w-lg">
                                <input type="text" placeholder="Search courses, instructors, and organizations" className="input input-bordered shadow-2xl w-full rounded-full p-9 max-sm:p-7 border-2 border-gray-300 focus:outline-none" />
                                <button className="btn btn-primary shadow-lg absolute right-0 top-0 mt-3 max-sm:mt-2 px-7 items-center mr-3 rounded-full bg-green-400 text-white hover:bg-green-500">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Components */}
            <Card />

            {/* Featured Courses */}
            <div className='mt-32'>
                <FeaturedCourses />
            </div>

            {/* Newest Courses */}
            <div className="mt-32 p-3">
                {loading ? <p>Loading...</p> : <NewestCourses newestCourses={newestCourses} />}
            </div>


            {/* Newest Courses */}
            <div className="mt-32 p-3">
                {loading ? <p>Loading...</p> : <NewestCourses newestCourses={newestCourses} />}
            </div>

            {/* Instructor Section */}
            <div className="mt-32 p-5">
                {instructors.length > 0 ? (
                    <Instructor instructors={instructors} />
                ) : (
                    <p>Loading instructors...</p>
                )}
            </div>
        </div>
    );
};

export default Home;




