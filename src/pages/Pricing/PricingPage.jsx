import React from "react";
import Pricing from "../../components/pricing/Pricing";
import ContactForm from "../../components/ContactForm/ContactForm";
import LearnQuran from "../../components/LearnQuran/LearnQuran";
import SubBanner from "../../components/banner/SubBanner";
import PricingTop from "../../components/pricing/PricingTop";

function PricingPage() {
  return (
    <div>
      <SubBanner course="Pricing" />
      <PricingTop title="Our Economical Pricing" />
      <Pricing />
      {/* <ContactForm /> */}
      <LearnQuran />
    </div>
  );
}

export default PricingPage;
