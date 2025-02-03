import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddFeatured from "../Pages/Home/AddFeatured";
import FeaturedCourses from "../Pages/Home/FeaturedCourses";
import FeaturedCoursesDetails from "../Pages/Home/FeaturedCoursesDetails";
import AddNewestCourse from "../Pages/Home/NewestCourses/AddNewsestCourse";
import NewestCourses from "../Pages/Home/NewestCourses/NewestCourses";
import NewestCoursesDetails from "../Pages/Home/NewestCourses/NewestCoursesDetails";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/featuredCourse')
       
      },
      {
        path:'/abc',
        element:<NewestCourses></NewestCourses>,
        loader: () =>  fetch('http://localhost:5000/newest')
      },

      {
        path: '/addfeatured',
        element: <AddFeatured></AddFeatured>
      },
      {
        path: '/featuredCourse/:id',
        element: <FeaturedCoursesDetails></FeaturedCoursesDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/featuredCourse/${params.id}`)
      },
      {
        path:'/newest/:id', 
        element:<NewestCoursesDetails></NewestCoursesDetails>,
        loader:({params}) => fetch(`http://localhost:5000/newest/${params.id}`)
      },

      {
        path:'AddNewestCourse',
        element:<AddNewestCourse></AddNewestCourse>
      },
    ]
  },
]);