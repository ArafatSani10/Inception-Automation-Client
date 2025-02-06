import React from 'react';

const InsCard = ({ instructor }) => {
    const { instructorImage, workTitle, instructorName, followerFollowing, student, courses, reviews, meeting, about, skills, skills1, skills2, skills3, skills4, skills5, following, bg } = instructor;

    // Calculate rating based on reviews or another relevant metric (assuming it's a number out of 5)
    const rating = reviews;  // assuming reviews represent the rating out of 5
    const totalStars = 5;

    // Create an array of filled and empty stars
    const stars = Array.from({ length: totalStars }, (_, index) => index < rating ? '★' : '☆');

    return (
        <div className="p-5 border rounded-lg shadow-lg">
            <div>
                <img className="h-40  w-40 rounded-full mx-auto" src={instructorImage} alt={instructorName} />
                <h3 className="text-center font-bold md:text-lg  max-sm:text-[17px] mt-4">{instructorName}</h3>
                <p className='text-center opacity-75 mt-3 max-sm:text-sm md:text-[16px]'>{workTitle}</p>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center mt-2">
                {stars.map((star, index) => (
                    <span key={index} className="text-yellow-500 text-3xl">{star}</span>
                ))}
            </div>

            <div>
                <button className='btn md:mx-36 max-sm:mx-28 mt-5 bg-green-400 text-white hover:bg-green-300 hover:text-black'> Profile</button>
            </div>
        </div>
    );
};

export default InsCard;
