import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { MdDone, MdFavorite, MdOutlineDone, MdOutlineLightbulb } from "react-icons/md";
import FAQ from "./FAQ";
import { AiOutlineLike } from "react-icons/ai";
import { FaAddressCard, FaHeadphones } from "react-icons/fa";
import { CiCalendar, CiShare2, CiTimer } from "react-icons/ci";
import { GrGift } from "react-icons/gr";
import { GoPersonAdd } from "react-icons/go";
import { PiStudent } from "react-icons/pi";

const FeaturedCoursesDetails = () => {
    const { courseName, instructorName, backgroundImage, instructorImage, description, time, date, courseFee } = useLoaderData();

    return (
        <div className="max-w-full bg-gray-100">
            <Helmet>
                <title>Master Generative AI in Bangla | inceptionBD</title>
            </Helmet>
            {/* Background Image Section */}
            <div className="relative w-full h-[430px] sm:h-[500px]">
                <img
                    src="https://inceptionbd.com/store/1/Course/Generative%20AI%20cover.png"
                    alt="Course Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-start w-full sm:w-1/2 p-6  sm:mt-52 items-start sm:text-left text-center">
                    <h1 className="text-white text-xl sm:text-3xl font-bold mb-4 sm:mb-10">{courseName}</h1>
                    <h1 className="font-bold text-[13px] text-white underline mb-4">
                        <span className="text-red-200 font-[10px]">in</span> Artificial Intelligence(AI)
                    </h1>
                    <div className="flex items-center justify-start sm:justify-start text-center sm:text-left">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-yellow-400 text-lg">★</span>
                        <button className="border p-1 bg-green-300 ml-2">5.00</button>
                        <span className="mx-2 text-white">(3 ratings)</span>
                    </div>
                    <p className="text-white text-sm mt-6">
                        <span className="text-[12px]">created by</span>
                        <span className="underline">{instructorName}</span>
                    </p>
                </div>
            </div>

            {/* Flex Section with 60% and 40% split */}
            <div className="flex flex-col sm:flex-row mt-8  ">
                {/* Left Side: Course Details (60% width) */}
                <div className="w-full sm:w-[1100px] mx-auto border-2  rounded-lg">
                    <div className="w-full  p-3">
                        {/* What You Will Learn */}
                        <h1 className="text-lg font-bold   mb-4">What You Will Learn?</h1>
                        <div className="border p-4 bg-slate-200 opacity-70 space-y-3 rounded-md">
                            <p className="flex items-center gap-2"><MdOutlineDone /> Understand the fundamentals of Generative AI</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Work with LLMS and GANS for next and image generation.</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Learn to Optimize AI models for better experience</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Explore ethical considerations in AI content generation.</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Build and train advanced Generative Models.</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Develop real-world projects like chatbots and image creators.</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Deploy Generative AI applications into production.</p>
                            <p className="flex items-center gap-2"><MdOutlineDone /> Gain hands-on experience with cutting-edge tools and frameworks.</p>
                        </div>

                        {/* Course Description */}
                        <h1 className="font-bold w-full  text-xl mt-6 text-gray-500">About This Course</h1>
                        <p className="opacity-50 w-full border text-[18px] mt-3">{description}</p>

                        {/* Requirements */}
                        <div>
                            <h1 className="text-lg font-bold mt-6">Requirements</h1>
                            <div className="p-2 bg-base-200 opacity-70 space-y-4 rounded-md">
                                <p className="flex items-center gap-2"><MdOutlineDone /> Basic understanding of AI and machine learning.</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Proficiency in Python Programming.</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Familiarity with ML frameworks like TensorFlow or PyTorch.</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Knowledge of neural networks and deep learning concepts.</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Basic experience with data preprocessing and visualization.</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Understanding of probability and statistics.</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Familiarity with cloud platforms (optional).</p>
                                <p className="flex items-center gap-2"><MdOutlineDone /> Interest in creative AI applications.</p>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h1 className="text-lg font-bold mt-6">FAQ</h1>
                            <FAQ />
                        </div>

                        {/* Comments Section */}
                        <div className="mt-6">
                            <h1 className="text-2xl font-semibold">Comments</h1>
                            <textarea
                                className="w-full p-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows="4"
                                placeholder="Write your comment..."
                            ></textarea>
                            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg font-bold">Post Comment</button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Additional Content (40% width) */}
                <div className="w-full -mt-80 sm:w-[500px] bg-base-200 p-5 rounded-lg">
                    <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                        <figure>
                            <img
                                src={backgroundImage}
                                alt="courses" />
                        </figure>
                        <div>
                            <h1 className="text-green-400 text-4xl text-center font-bold mt-5 my-5">Free</h1>
                            <button className="p-2 border bg-green-400 mx-28 max-sm:p-2 max-sm:text-[12px] px-4 rounded-xl my-2 text-white">Enroll on course</button>
                            <div className="text-center  text-sm opacity-50">
                                <h1 className="flex text-sm gap-1 items-center max-sm:mx-16 mx-16"> <AiOutlineLike className="text-xl hidden"></AiOutlineLike>  5 Days money back guarantee</h1>
                            </div>
                            {/* this live class includes */}
                            <div>
                                <h1 className="font-bold mt-6 mx-3">This live class includes:</h1>
                                <div className="space-y-2 text-sm opacity-65 p-5">
                                    <h1 className="flex items-center gap-1"> <MdOutlineLightbulb ></MdOutlineLightbulb> Official certificate</h1>
                                    <h1 className="flex items-center gap-1"> <FaHeadphones ></FaHeadphones> Instructor support</h1>
                                </div>
                            </div>

                            <div className="border-2 mx-5 mt-5  shadow-xl rounded-lg p-6  flex items-center gap-2 ">
                                <h1 className="flex-col  px-3"> <CiCalendar className="mx-5" ></CiCalendar> Reminder</h1>
                                <h1 className="flex-col  px-3"> <MdFavorite className="mx-5" ></MdFavorite> Favorite</h1>
                                <h1 className="flex-col  px-3"> <CiShare2 className="mx-3" ></CiShare2> Share</h1>
                            </div>

                            {/* Gift this course section */}
                            <div className="mt-5 mx-5 my-3 gap-3 border-2 p-2 rounded-xl flex  items-center">
                                <h1 className="w-10 h-10 rounded-full bg-green-200 flex justify-center items-center">
                                    <GrGift />
                                </h1>
                                <div>
                                    <h1 className="font-bold opacity-60">Gift this course</h1>
                                    <p className="text-[12px]">send this course as a gift to your  friends..</p>
                                </div>
                            </div>

                            {/* live class */}
                            <div className=" mx-5 mt-5 border-2 shadow-xl rounded-lg p-6">
                                <h1 className="font-bold">Live class specifications</h1>
                                <h1 className="h-1 w-9 bg-green-500 border"></h1>

                                <div className="space-y-5 mt-5">
                                    <div className="flex opacity-65 justify-between">
                                        <span className="flex   items-center gap-2"><CiCalendar className="text-xl"></CiCalendar>Start date :</span>
                                        <h1 className="max-sm:text-sm">3 Feb 2025 | 19:00</h1>
                                    </div>
                                    <div className="flex opacity-65 justify-between">
                                        <span className="flex   items-center gap-2"><GoPersonAdd className="text-xl" ></GoPersonAdd>Capacity :</span>
                                        <h1>unlimited</h1>
                                    </div>
                                    <div className="flex opacity-65 justify-between">
                                        <span className="flex   items-center gap-2"><CiTimer className="text-xl" ></CiTimer>Duration :</span>
                                        <h1>5:00 Hours </h1>
                                    </div>
                                    <div className="flex opacity-65 justify-between">
                                        <span className="flex   items-center gap-2"> <PiStudent className="text-xl" ></PiStudent>Students :</span>
                                        <h1>49</h1>
                                    </div>
                                    <div className="flex opacity-65 justify-between">
                                        <span className="flex   items-center gap-2"><FaAddressCard ></FaAddressCard>Sessions :</span>
                                        <h1>0</h1>
                                    </div>
                                </div>
                            </div>


                            {/* instructor section */}
                            <div className="mx-5 mt-5 border-2 shadow-xl rounded-lg p-6" >
                                <div className="mt-5 my-5 flex justify-center">
                                    <img className="w-[120px] h-[130px] rounded-full" src={instructorImage} alt="" />
                                    <MdDone className="text-xl mt-24 border w-8 h-8 -ml-6 bg-blue-500 text-white rounded-full" ></MdDone>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold opacity-80 text-center">{instructorName}</h1>
                                    <p className="text-center max-sm:text-[10px] opacity-65">Data Scientist, AI mentor, Innovator.</p>
                                </div>
                                <div className="text-center">
                                    <span className="text-yellow-400 font-bold text-2xl">★</span>
                                    <span className="text-yellow-400 font-bold text-2xl">★</span>
                                    <span className="text-yellow-400 font-bold text-2xl">★</span>
                                    <span className="text-yellow-400 font-bold text-2xl">★</span>
                                    <span className="text-yellow-400 font-bold text-2xl">★</span>
                                    <button className="border  mx-5 h-6 rounded-lg w-12 bg-green-300 ">5.00</button>
                                </div>
                                <div>
                                    <button className="border text-white hover:bg-green-600 w-2/3 max-sm:mx-10 mx-16 mt-5 my-3 h-10 rounded-lg  bg-green-400"> Profile</button>
                                </div>
                            </div>
                            {/* tags */}
                            <div className="mx-5 mt-5 my-5 border-2 shadow-xl rounded-lg p-6">
                                <div className="mt-5 mx-5 my-5">
                                    <h1 className="font-bold opacity-70">Tags</h1>
                                    <h1 className="h-1 w-12 bg-green-500 border"></h1>
                                </div>
                                <div className=" space-y-3">
                                    <h1 className="border text-[13px] p-2 bg-gray-300 cursor-pointer opacity-70 hover:bg-gray-400 rounded-lg transition-all duration-1000">
                                        Generative AI Course In Bangla
                                    </h1>
                                    <h1 className="border text-[13px] p-2 bg-gray-300 cursor-pointer opacity-70 hover:bg-gray-400 rounded-lg transition-all duration-1000">
                                        Generative AI Course Hands-on Projects
                                    </h1>
                                    <h1 className="border text-[13px] p-2 bg-gray-300 cursor-pointer opacity-70 hover:bg-gray-400 rounded-lg transition-all duration-1000">
                                        LLMs Course Bangla
                                    </h1>
                                    <h1 className="border text-[13px] p-2 bg-gray-300 cursor-pointer opacity-70 hover:bg-gray-400 rounded-lg transition-all duration-1000">
                                        GANs Bangla Tutorial
                                    </h1>
                                    <h1 className="border text-[13px] p-2 bg-gray-300 cursor-pointer opacity-70 hover:bg-gray-400 rounded-lg transition-all duration-1000">
                                        Learn Generative AI
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCoursesDetails;


