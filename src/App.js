import Courses from "./components/Courses";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";
import PopularCourses from "./components/PopularCourses";
function App() {
  return (
    <div className="mainContainer">
      <Navbar/>
      <Hero/>
      <Features/>
      <Courses/>
      <PopularCourses/>
      <Instructor/>
    </div>
  );
}

export default App;
