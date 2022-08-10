import AboutUs from "../components/AboutUs";
import ExpertAt from "../components/ExpertAt";
import HeroSection from "../components/HeroSection";
import LawPlan from "../components/LawPlan";
import MakeAnAppoinment from "../components/MakeAnAppoinment";
import OurClient from "../components/OurClient";
import TestimonialSlider from "../components/Testimonial/TestimonialSlider";


export default function Home() {
  return (
    <>
      <HeroSection />
      <LawPlan />
      <AboutUs />
      <ExpertAt />
      <OurClient />
      <MakeAnAppoinment/>
    </>
  )
}
