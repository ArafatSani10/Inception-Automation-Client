import React from 'react';
import { GiAntibody } from 'react-icons/gi';
import Swal from 'sweetalert2';

const AddInstructor = () => {
    const handleAddInstuctor = e => {
        e.preventDefault();
        const form = e.target;
        const instructorImage = form.instructorImage.value;
        const workTitle = form.workTitle.value;
        const instructorName = form.instructorName.value;
        const followerFollowing = form.followerFollowing.value;
        const student = form.student.value;
        const courses = form.courses.value;
        const reviews = form.reviews.value;
        const meeting = form.meeting.value;
        const about = form.about.value;
        const skills = form.skills.value;
        const skills1 = form.skills1.value;
        const skills2 = form.skills2.value;
        const skills3 = form.skills3.value;
        const skills4 = form.skills4.value;
        const skills5 = form.skills5.value;
        const bg = form.bg.value;

        const following = form.following.value;
        const Instructors = {instructorImage, workTitle, instructorName, followerFollowing, student, courses, reviews, meeting, about, skills,skills1,skills2,skills3,skills4,skills5, following,bg
            
        };
        console.log(Instructors);

        // send data to the server
        fetch("http://localhost:5000/instructor", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Instructors)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })


    }
    return (
        <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Add Instructor</h2>
            <form onSubmit={handleAddInstuctor} className="space-y-4">
                {/* Instructor Image */}
                <div>
                    <label htmlFor="instructorImage" className="block text-sm font-medium">Instructor Image URL</label>
                    <input
                        type="text"
                        id="instructorImage"
                        name="instructorImage"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="bg" className="block text-sm font-medium">BG</label>
                    <input
                        type="text"
                        id="bg"
                        name="bg"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Work Title */}
                <div>
                    <label htmlFor="workTitle" className="block text-sm font-medium">Work Title</label>
                    <input
                        type="text"
                        id="workTitle"
                        name="workTitle"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Instructor Name */}
                <div>
                    <label htmlFor="instructorName" className="block text-sm font-medium">Instructor Name</label>
                    <input
                        type="text"
                        id="instructorName"
                        name="instructorName"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Follower/Following */}
                <div>
                    <label htmlFor="followerFollowing" className="block text-sm font-medium">Follower/Following</label>
                    <input
                        type="text"
                        id="followerFollowing"
                        name="followerFollowing"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Student */}
                <div>
                    <label htmlFor="student" className="block text-sm font-medium">Student</label>
                    <input
                        type="text"
                        id="student"
                        name="student"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Courses */}
                <div>
                    <label htmlFor="courses" className="block text-sm font-medium">Courses</label>
                    <input
                        type="text"
                        id="courses"
                        name="courses"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Reviews */}
                <div>
                    <label htmlFor="reviews" className="block text-sm font-medium">Reviews</label>
                    <input
                        type="text"
                        id="reviews"
                        name="reviews"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Meeting */}
                <div>
                    <label htmlFor="meeting" className="block text-sm font-medium">Meeting</label>
                    <input
                        type="text"
                        id="meeting"
                        name="meeting"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* About */}
                <div>
                    <label htmlFor="about" className="block text-sm font-medium">About</label>
                    <input
                        type="text"
                        id="about"
                        name="about"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Skills */}
                <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Skills</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                {/* Skills1 */}
                <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Skills1</label>
                    <input
                        type="text"
                        id="skills1"
                        name="skills1"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                      {/* Skills */}
                      <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Skills2</label>
                    <input
                        type="text"
                        id="skills2"
                        name="skill2"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                      {/* Skills */}
                      <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Skills3</label>
                    <input
                        type="text"
                        id="skills3"
                        name="skills3"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                      {/* Skills */}
                      <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Skills4</label>
                    <input
                        type="text"
                        id="skills4"
                        name="skills4"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                      {/* Skills */}
                      <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Skills5</label>
                    <input
                        type="text"
                        id="skills5"
                        name="skills5"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>






                {/* Following */}
                <div>
                    <label htmlFor="skills" className="block text-sm font-medium">Following</label>
                    <input
                        type="text"
                        id="following"
                        name="following"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>



                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddInstructor;
