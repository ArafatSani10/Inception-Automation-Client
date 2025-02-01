const Card = () => {
    return (
        <div className="max-sm:mt-96 w-full mx-auto md:mt-96 lg:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card bg-base-100 shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:text-white hover:bg-purple-950 hover:shadow-2xl">
                <figure className="w-36 mt-16 rounded-3xl mx-auto p-5 bg-gradient-to-r from-blue-300 to-green-200">
                    <img
                        src="https://inceptionbd.com/assets/default/img/stats/teacher.svg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">3</h2>
                    <h2 className="card-title">Skillful instructors</h2>
                    <p>Start learning from experienced instructors</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-4 hover:text-white hover:bg-purple-950 hover:shadow-2xl">
                <figure className="w-36 mt-16 rounded-3xl mx-auto p-5 bg-gradient-to-r from-blue-300 to-gray-500">
                    <img
                        src="https://inceptionbd.com/assets/default/img/stats/student.svg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">53</h2>
                    <h2 className="card-title">Happy student</h2>
                    <p>Enrolled in our courses and improved their skills</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-4 hover:text-white hover:bg-purple-950 hover:shadow-2xl">
                <figure className="w-36 mt-16 rounded-3xl mx-auto p-5 bg-gradient-to-r from-red-300 to-green-500">
                    <img
                        src="https://inceptionbd.com/assets/default/img/stats/video.svg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">1</h2>
                    <h2 className="card-title">Live classes</h2>
                    <p>Improve your skills using live Knowledge flow</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-4 hover:text-white hover:bg-purple-950 hover:shadow-2xl">
                <figure className="w-36 mt-16 rounded-3xl mx-auto p-5 bg-gradient-to-r from-green-300 to-red-500">
                    <img
                        src="https://inceptionbd.com/assets/default/img/stats/course.svg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">4</h2>
                    <h2 className="card-title">Video Courses</h2>
                    <p>Learn without any geographical & time limitations</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
