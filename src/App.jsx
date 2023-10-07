import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/reset-password";
import Services from "./pages/services";
import ServiceDetails from "./pages/services/service-details";
import About from "./pages/about";
import Price from "./pages/price";
import Team from "./pages/team";
import TeamDetails from "./pages/team/team-details";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/blogs/blog-details";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
