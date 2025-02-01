import { Helmet } from "react-helmet";
import { FaClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { Link } from "react-router-dom";

const FeaturedCourseCard = ({ courses }) => {
    const { _id, backgroundImage, courseName, instructorImage, instructorName, description, time, date, courseFee } = courses;

    return (

        <div>

            <div className="relative w-full h-[600px] max-w-8xl rounded-lg shadow-lg overflow-hidden mb-8">

                {/* Background image with content over it */}
                <div className="absolute inset-0 w-full h-full">
                    <Link to={`/featuredCourse/${_id}`}>
                        <img
                            src={backgroundImage}
                            alt={courseName}
                            className="w-full h-full object-cover"
                        />
                    </Link>
                </div>

                {/* Content inside the card on the left side */}
                <div className="absolute inset-y-0 max-sm:-mx-2 left-0 w-[400px] bg-black bg-opacity-40 p-5 flex flex-col justify-center">
                    <div className="bg-white  p-6 rounded-lg shadow-lg w-full">
                        {/* Course Name */}
                        <h2 className="text-[18px] font-semibold text-center text-gray-800 mb-4">{courseName}</h2>

                        {/* Instructor Info (Image and Name on the same line) */}
                        <div className="flex items-center gap-1  mb-4">
                            <img className="w-12 h-12 rounded-full" src={instructorImage} alt={instructorName} />
                            <h3 className="text-lg opacity-40 font-medium text-gray-700">{instructorName}</h3>
                        </div>

                        {/* Description (below the instructor info) */}
                        <p className="text-[15px] text-gray-500 mb-4">{description}</p>

                        {/* Course Info (Time, Date, and Fee in one line) */}
                        <div className="flex justify-between items-center text-gray-700">
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <p>{time}:00 hours</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoIosCalendar />
                                <p>{date}</p>
                            </div>
                            <p className="font-semibold text-white  border p-2 px-5 rounded-lg  bg-green-300">{courseFee}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourseCard;
