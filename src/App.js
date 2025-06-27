import ContactUs from "./components/ContactUs";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";
import PopularCourses from "./components/PopularCourses";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="mainContainer">
      <Navbar/>
      <Hero/>
      <Features/>
      <Courses/>
      <PopularCourses/>
      <Skills/>
      <Education/>
      <Reviews/>
      <Instructor/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
