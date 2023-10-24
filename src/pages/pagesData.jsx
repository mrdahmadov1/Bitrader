import Home from "./home";
import Register from "./auth/register";
import Login from "./auth/login";
import ResetPassword from "./auth/resetPassword";
import About from "./about";
import Services from "./services";
import ServiceDetails from "./services/serviceDetails";
import Price from "./price";
import Team from "./team";
import TeamDetails from "./team/teamDetails";
import Blogs from "./blogs";
import BlogDetails from "./blogs/blogdetails";
import Contact from "./contact";
import NotFound from "./notFound";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
  {
    path: "register",
    element: <Register />,
    title: "Sign Up",
  },
  {
    path: "login",
    element: <Login />,
    title: "Sign In",
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
    title: "Reset Password",
  },
  {
    path: "services",
    title: "Services",
    children: [
      {
        path: "",
        element: <Services />,
        title: "All Services",
      },
      {
        path: ":id",
        element: <ServiceDetails />,
        title: "Service",
      },
    ],
  },
  {
    path: "about",
    title: "About",
    children: [
      {
        path: "",
        element: <About />,
        title: "About Us",
      },
      {
        path: "price",
        element: <Price />,
        title: "Price",
      },
      {
        path: "team",
        title: "Teams",
        children: [
          {
            path: "",
            element: <Team />,
            title: "All Team",
          },
          {
            path: ":id",
            element: <TeamDetails />,
            title: "Member",
          },
        ],
      },
    ],
  },
  {
    path: "blogs",
    title: "Blogs",
    children: [
      {
        path: "",
        element: <Blogs />,
        title: "All Blogs",
      },
      {
        path: ":id",
        element: <BlogDetails />,
        title: "Blog",
      },
    ],
  },
  {
    path: "contact",
    element: <Contact />,
    title: "contact",
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404",
  },
];

export default pagesData;
