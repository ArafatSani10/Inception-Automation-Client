import React from 'react';
import Swal from 'sweetalert2';

const AddNewestCourse = () => {
    const handleAddNewestCourse = e => {
        e.preventDefault();
        const form = e.target;
        const detailsBackgroundImage = form.detailsBackgroundImage.value;
        const courseName = form.courseName.value;
        const workMethod = form.workMethod.value;
        const instructorImage = form.instructorImage.value;
        const instructorName = form.instructorName.value;
        const learn1 = form.learn1.value;
        const learn2 = form.learn2.value;
        const learn3 = form.learn3.value;
        const learn4 = form.learn4.value;
        const learn5 = form.learn5.value;
        const learn6 = form.learn6.value;
        const tag1 = form.tag1.value;
        const tag2 = form.tag2.value;
        const tag3 = form.tag3.value;
        const tag4 = form.tag4.value;
        const tag5 = form.tag5.value;
        const aboutCourse = form.aboutCourse.value;
        const date = form.date.value;
        const time = form.time.value;
        const courseFee = form.courseFee.value;
        const backgroundCardImage = form.backgroundCardImage.value;

        const newestCourse = {
            detailsBackgroundImage, courseName, workMethod, instructorImage, instructorName, learn1, learn2, learn3, learn4, learn5, learn6, tag1, tag2, tag3, tag4, tag5, aboutCourse, date, time, courseFee, backgroundCardImage
        };

        console.log(newestCourse);
        // send data to the server

        fetch('http://localhost:5000/newest', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newestCourse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Newest data send to database done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div className="max-w-xl mx-auto p-4 bg-gray-50 shadow-lg rounded-lg">
            <form onSubmit={handleAddNewestCourse}>
                {/* DetailsBackgroundImage */}
                <div className="mb-4">
                    <label htmlFor="detailsBackgroundImage" className="block text-sm font-semibold text-gray-700">
                        DetailsBackgroundImage
                    </label>
                    <input
                        type="text"
                        id="detailsBackgroundImage"
                        name="detailsBackgroundImage"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* CourseName */}
                <div className="mb-4">
                    <label htmlFor="courseName" className="block text-sm font-semibold text-gray-700">
                        CourseName
                    </label>
                    <input
                        type="text"
                        id="courseName"
                        name="courseName"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* WorkMethod */}
                <div className="mb-4">
                    <label htmlFor="workMethod" className="block text-sm font-semibold text-gray-700">
                        WorkMethod
                    </label>
                    <input
                        type="text"
                        id="workMethod"
                        name="workMethod"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* InstructorImage */}
                <div className="mb-4">
                    <label htmlFor="instructorImage" className="block text-sm font-semibold text-gray-700">
                        InstructorImage
                    </label>
                    <input
                        type="text"
                        id="instructorImage"
                        name="instructorImage"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* InstructorName */}
                <div className="mb-4">
                    <label htmlFor="instructorName" className="block text-sm font-semibold text-gray-700">
                        InstructorName
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        name="instructorName"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* What you will learn 1 */}
                <div className="mb-4">
                    <label htmlFor="learn1" className="block text-sm font-semibold text-gray-700">
                        What you will learn 1
                    </label>
                    <textarea
                        id="learn1"
                        name="learn1"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* What you will learn 2 */}
                <div className="mb-4">
                    <label htmlFor="learn2" className="block text-sm font-semibold text-gray-700">
                        What you will learn 2
                    </label>
                    <textarea
                        id="learn2"
                        name="learn2"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* What you will learn 3 */}
                <div className="mb-4">
                    <label htmlFor="learn3" className="block text-sm font-semibold text-gray-700">
                        What you will learn 3
                    </label>
                    <textarea
                        id="learn3"
                        name="learn3"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* What you will learn 4 */}
                <div className="mb-4">
                    <label htmlFor="learn4" className="block text-sm font-semibold text-gray-700">
                        What you will learn 4
                    </label>
                    <textarea
                        id="learn4"
                        name="learn4"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* What you will learn 5 */}
                <div className="mb-4">
                    <label htmlFor="learn5" className="block text-sm font-semibold text-gray-700">
                        What you will learn 5
                    </label>
                    <textarea
                        id="learn5"
                        name="learn5"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* What you will learn 6 */}
                <div className="mb-4">
                    <label htmlFor="learn6" className="block text-sm font-semibold text-gray-700">
                        What you will learn 6
                    </label>
                    <textarea
                        id="learn6"
                        name="learn6"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Tags 1 */}
                <div className="mb-4">
                    <label htmlFor="tag1" className="block text-sm font-semibold text-gray-700">
                        Tag 1
                    </label>
                    <input
                        type="text"
                        id="tag1"
                        name="tag1"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tags 2 */}
                <div className="mb-4">
                    <label htmlFor="tag2" className="block text-sm font-semibold text-gray-700">
                        Tag 2
                    </label>
                    <input
                        type="text"
                        id="tag2"
                        name="tag2"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tags 3 */}
                <div className="mb-4">
                    <label htmlFor="tag3" className="block text-sm font-semibold text-gray-700">
                        Tag 3
                    </label>
                    <input
                        type="text"
                        id="tag3"
                        name="tag3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tags 4 */}
                <div className="mb-4">
                    <label htmlFor="tag4" className="block text-sm font-semibold text-gray-700">
                        Tag 4
                    </label>
                    <input
                        type="text"
                        id="tag4"
                        name="tag4"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tags 5 */}
                <div className="mb-4">
                    <label htmlFor="tag5" className="block text-sm font-semibold text-gray-700">
                        Tag 5
                    </label>
                    <input
                        type="text"
                        id="tag5"
                        name="tag5"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* AboutCourse */}
                <div className="mb-4">
                    <label htmlFor="aboutCourse" className="block text-sm font-semibold text-gray-700">
                        AboutCourse
                    </label>
                    <textarea
                        id="aboutCourse"
                        name="aboutCourse"
                        rows="3"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Time (Updated as text input) */}
                <div className="mb-4">
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700">
                        Time
                    </label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        placeholder="Enter time"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* CourseFee */}
                <div className="mb-4">
                    <label htmlFor="courseFee" className="block text-sm font-semibold text-gray-700">
                        CourseFee
                    </label>
                    <input
                        type="text"
                        id="courseFee"
                        name="courseFee"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* BackgroundCardImage */}
                <div className="mb-4">
                    <label htmlFor="backgroundCardImage" className="block text-sm font-semibold text-gray-700">
                        BackgroundCardImage
                    </label>
                    <input
                        type="text"
                        id="backgroundCardImage"
                        name="backgroundCardImage"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddNewestCourse;

