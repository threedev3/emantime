import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import Choose from "../../components/Choose/Choose.jsx";
import Mission from "../../components/mission/Mission.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import Features from "../../components/Features/Features.jsx";
import ExtraFeatures from "../../components/extraFeature/ExtraFeatures.jsx";
import Pricing from "../../components/pricing/Pricing.jsx";
import FreeTrial from "../../components/Freetrial/FreeTrial.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import LearnQuran from "../../components/LearnQuran/LearnQuran.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import PricingTop from "../../components/pricing/PricingTop.jsx";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon.jsx";
import CarouselComp from "../../components/carousel/CarouselComp.jsx";
import ChatIcon from "../../components/chatIcon/ChatIcon.jsx";

function Home() {
  return (
    <div>
      <Banner />
      <Choose />
      <Mission />
      <CarouselComp />
      <Features />
      <ExtraFeatures cardbg="bg-cardbg" />
      <PricingTop title="Our Premium Services At Affordable Pricing" />
      <Pricing />
      <Reviews />
      <FreeTrial />
      {/* <ContactForm /> */}
      <LearnQuran />
      <WhatsappIcon />
      {/* <ChatIcon /> */}
    </div>
  );
}

export default Home;
