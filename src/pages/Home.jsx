import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";
import About from "../sections/About";
import FAQs from "../sections/FAQs";
import Organizers from "../sections/Organizers";
import Schedule from "../sections/Schedule";
import Speakers from "../sections/Speakers";
import Testimonial from "../sections/Testimonial";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <About />
        <Speakers />
        <Organizers />
        <Schedule />
        <Testimonial />
        <FAQs />
      </MainLayout>
    </div>
  );
};

export default Home;
