import React from 'react';
import Swal from 'sweetalert2';

const AddFeatured = () => {
    const handleAddCourse = e => {
        e.preventDefault();
        const form = e.target;
        const backgroundImage = form.backgroundImage.value;
        const courseName = form.courseName.value;
        const instructorImage = form.instructorImage.value;
        const instructorName = form.instructorName.value;
        const description = form.description.value;
        const time = form.time.value;
        const date = form.date.value;
        const courseFee = form.courseFee.value;

        const featureCourse = {backgroundImage,courseName,instructorImage,instructorName,description,time,date,courseFee}
        console.log(featureCourse);

        // send data to the server
        fetch('http://localhost:5000/featuredCourse', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            }, 
            body:JSON.stringify(featureCourse)
           
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user added succesfully..",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })



    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-4xl font-semibold text-center text-gray-700 mb-6">
                    Add Featured Courses
                </h2>
                <form onSubmit={handleAddCourse}>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="background-image">
                            Course Background Image URL
                        </label>
                        <input
                            type="text"
                            id="backgroundImage"
                            name="backgroundImage"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Course Background Image URL"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="course-name">
                            Course Name
                        </label>
                        <input
                            type="text"
                            id="courseName"
                            name="courseName"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Course Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="instructor-image">
                            Instructor Image URL
                        </label>
                        <input
                            type="text"
                            id="instructorImage"
                            name="instructorImage"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Instructor Image URL"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="instructor-name">
                            Instructor Name
                        </label>
                        <input
                            type="text"
                            id="instructorName"
                            name="instructorName"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Instructor Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="description">
                            Course Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Course Description"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="time">
                            Course Duration (hours)
                        </label>
                        <input
                            type="number"
                            id="time"
                            name="time"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Duration in Hours"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="date">
                            Course Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2" htmlFor="course-fee">
                            Course Fee
                        </label>
                        <input
                            type="text"
                            id="courseFee"
                            name="courseFee"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter Course Fee"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFeatured;
