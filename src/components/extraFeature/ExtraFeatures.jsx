import React, { useState } from "react";
import CourseCard from "../coursecard/CourseCard";
import FeatureCard from "../FeatureCard/FeatureCard";
import TrialModal from "../trialModal/TrialModal";

function ExtraFeatures({ order, cardbg }) {
  const [openModal, setOpenModal] = useState(false);
  const extra = [
    {
      title: "20-Day Surah Challenge",
      description:
        "Embark on an enlightening journey to memorize 20 Surahs in just 20 days!",
    },
    {
      title: "Tajweed Made Simple",
      description: "Kickstart your journey with the fundamentals of Tajweed",
    },
    {
      title: "Quranic Wisdom Guide",
      description:
        "A handy guide to essential verses, teachings, and pearls of wisdom.",
    },
    {
      title: "Certified Experts",
      description:
        "Delve deeper with Five Tailored Sessions Every Week led by our distinguished, certified experts.",
    },
  ];

  return (
    <div className="bg-white relative max-w-full">
      <div className="">
        <div className="relative isolate overflow-hidden bg-[url('/src/assets/img/mosquewhite.png')] bg-no-repeat bg-cover bg-center bg-missionbg px-6 py-8 lg:py-16 md:pt-16 ">
          <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-10">
            <div className={`${order}`}>
              <div className="max-w-2xl lg:flex-auto lg:py-32 lg:text-left lg:px-8 px-2">
                <h2 className="text-xl font-bold tracking-tight text-gray-600 sm:text-2xl lg:text-3xl">
                  Start your Quran Journey right now and get closer to Allah
                  Almighty!
                </h2>
                <p className="mt-6 sm:text-base text-sm  text-black">
                  Register now for the free trial and let us help you learn the
                  quran with proper tajweed just like the natives!
                </p>

                <div className="mt-4" onClick={() => setOpenModal(true)}>
                  <button className="p-2 px-6 bg-gradient-to-r from-btnGradRight to-btnGradLeft text-white font-medium rounded-full sm:text-base text-sm">
                    Get Free Trial
                  </button>
                </div>
              </div>
            </div>

            <div className="relative max-w-2xl h-auto ">
              <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid grid-cols-1 gap-5">
                {extra.map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    cardbg={cardbg}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
}

export default ExtraFeatures;
