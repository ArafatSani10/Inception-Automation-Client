import { Helmet } from 'react-helmet';
import { FaSearch } from 'react-icons/fa'; // FaSearch ইমপোর্ট করুন
import { FaCartShopping } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

const Search = () => {
    return (
        <div className="w-full mx-auto">
            <Helmet>
                <title>Home | Inception BD</title>
            </Helmet>
            <div className="flex flex-col sm:flex-row items-center mx-10 justify-between gap-3">

                {/* Search Input */}
                <div className="relative flex items-center w-full sm:w-1/3 mb-4 sm:mb-0">
                    <input
                        className="p-3 w-full border-2  rounded-lg pl-10"
                        placeholder="Search..."
                        type="text"
                    />
                    <FaSearch className="absolute left-3 text-gray-500" size={20} />
                </div>

                {/* Icons (Cart & Notifications) and Login/Register */}
                <div className="flex items-center max-sm:justify-between space-x-6 max-sm:space-x-10">
                    {/* Icons Section */}
                    <div className="flex items-center gap-4 opacity-40">
                        <FaCartShopping className="text-2xl text-black" />
                        <IoNotifications className="text-2xl text-black" />
                    </div>

                    {/* Login and Register Section */}
                    <div className="flex items-center gap-4 text-lg text-black">
                        <span className="cursor-pointer">Login</span>
                        <span className="cursor-pointer">Register</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Search;
