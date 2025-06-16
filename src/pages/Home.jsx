import { useEffect } from "react";
import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";
import About from "../sections/About";
// import FAQs from "../sections/FAQs";
import Organizers from "../sections/Organizers";
import Schedule from "../sections/Schedule";
import Speakers from "../sections/Speakers";
// import Testimonial from "../sections/Testimonial";

// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Speakers />
        </div>
        <div data-aos="fade-up">
          <Organizers />
        </div>
        <div data-aos="fade-up">
          <Schedule />
        </div>

        {/* <Testimonial /> */}
        {/* <FAQs /> */}
      </MainLayout>
    </div>
  );
};

export default Home;
