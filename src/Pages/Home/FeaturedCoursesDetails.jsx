import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const FeaturedCoursesDetails = () => {
    const { courseName, instructorName } = useLoaderData();  // Course name and instructor name are loaded here

    return (
        <div className="max-w-full">
            <Helmet>
                <title>
                    Master Generative AI in Bangla | inceptionBD
                </title>
                
                </Helmet>


            {/* Background Image Section with overlay */}
            <div className="relative w-full h-[430px]">
                {/* Background Image */}
                <img
                    src="https://inceptionbd.com/store/1/Course/Generative%20AI%20cover.png"  // Replace with actual dynamic background image if required
                    alt="Course Background"
                    className="w-full h-full object-cover"  // Ensures the image covers the full area with proper aspect ratio
                />
                {/* Black overlay with opacity */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>  {/* Black overlay to darken the image */}

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-start w-full sm:w-1/2 p-6 sm:mx-32 sm:mt-52 items-start sm:text-left text-center">
                    {/* Course Name */}
                    <h1 className="text-white text-2xl font-bold mb-4 sm:mb-10">{courseName}</h1>

                    {/* Course Subject or Category */}
                    <h1 className="font-bold text-[13px] text-white underline mb-4">
                        <span className="text-red-200 font-[10px]">in</span> Artificial Intelligence(AI)
                    </h1>

                    {/* Star icons and rating */}
                    <div className="flex items-center justify-start sm:justify-start text-center sm:text-left">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <button className="border p-1 bg-green-300 ml-2">5.00</button>
                        <span className="mx-2 text-white">(3 ratings)</span>
                    </div>

                    {/* Instructor Name */}
                    <p className="text-white text-sm mt-6">
                        <span className="text-[12px]">created by</span>
                        <span className="underline">{instructorName}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCoursesDetails;
