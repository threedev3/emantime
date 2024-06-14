import React, { useState } from "react";
import PricingTop from "./PricingTop";
import PricingCard from "../PricingCard/PricingCard";

const pricingData = {
  tab1: [
    {
      id: 1,
      title: "2 Days/Week",
      price: "$30/mo",
      description: "For Weekends $30/mo",
      features: [
        "30 min lessons",
        "8 Classes/Month",
        "4 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 2,
      title: "3 Days/Week",
      price: "$45/mo",
      description: "For Weekends $45/mo",
      features: [
        "30 min lessons",
        "12 Classes/Month",
        "6 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 3,
      title: "4 Days/Week",
      price: "$60/mo",
      description: "For Weekends $60/mo",
      features: [
        "30 min lessons",
        "16 Classes/Month",
        "8 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 4,
      title: "5 Days/Week",
      price: "$75/mo",
      description: "For Weekends $75/mo",
      features: [
        "30 min lessons",
        "20 Classes/Month",
        "10 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
  ],
  tab2: [
    {
      id: 1,
      title: "2 Days/Week",
      price: "$30/mo",
      description: "For Weekends $30/mo",
      features: [
        "30 min lessons",
        "8 Classes/Month",
        "4 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 2,
      title: "3 Days/Week",
      price: "$45/mo",
      description: "For Weekends $45/mo",
      features: [
        "30 min lessons",
        "12 Classes/Month",
        "6 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 3,
      title: "4 Days/Week",
      price: "$60/mo",
      description: "For Weekends $60/mo",
      features: [
        "30 min lessons",
        "16 Classes/Month",
        "8 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 4,
      title: "5 Days/Week",
      price: "$75/mo",
      description: "For Weekends $75/mo",
      features: [
        "30 min lessons",
        "20 Classes/Month",
        "10 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
  ],
  tab3: [
    {
      id: 1,
      title: "2 Days/Week",
      price: "$60/mo",
      description: "For Weekends $30/mo",
      features: [
        "30 min lessons",
        "8 Classes/Month",
        "4 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 2,
      title: "3 Days/Week",
      price: "$100/mo",
      description: "For Weekends $45/mo",
      features: [
        "30 min lessons",
        "12 Classes/Month",
        "6 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 3,
      title: "4 Days/Week",
      price: "$140/mo",
      description: "For Weekends $60/mo",
      features: [
        "30 min lessons",
        "16 Classes/Month",
        "8 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 4,
      title: "5 Days/Week",
      price: "$180/mo",
      description: "For Weekends $75/mo",
      features: [
        "30 min lessons",
        "20 Classes/Month",
        "10 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
  ],
  tab4: [
    {
      id: 1,
      title: "2 Days/Week",
      price: "$30/mo",
      description: "For Weekends $30/mo",
      features: [
        "30 min lessons",
        "8 Classes/Month",
        "4 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 2,
      title: "3 Days/Week",
      price: "$45/mo",
      description: "For Weekends $45/mo",
      features: [
        "30 min lessons",
        "12 Classes/Month",
        "6 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 3,
      title: "4 Days/Week",
      price: "$60/mo",
      description: "For Weekends $60/mo",
      features: [
        "30 min lessons",
        "16 Classes/Month",
        "8 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
    {
      id: 4,
      title: "5 Days/Week",
      price: "$75/mo",
      description: "For Weekends $75/mo",
      features: [
        "30 min lessons",
        "20 Classes/Month",
        "10 Hours/Month",
        "For Arab Teachers 20% extra will be charged.",
      ],
    },
  ],
};

function Pricing() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div>
      <div className="bg-white relative max-w-full">
        <div className="">
          <div className="relative isolate overflow-hidden bg-[url('/src/assets/img/bannerimg.png')] bg-no-repeat bg-cover bg-center px-6 py-8 lg:py-8 shadow-2xl md:pt-16">
            <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center lg:justify-between lg:gap-x-10">
              <div className="mb-6">
                <ul className="lg:flex lg:justify-between lg:gap-6 md:flex md:justify-center md:gap-3 md:flex-nowrap flex justify-center flex-wrap gap-3">
                  <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:justify-between sm:gap-6">
                    <li
                      className={`cursor-pointer text-center lg:py-4 lg:px-9 py-2 px-6 bg-navText rounded-full text-white shadow-xl  ${
                        activeTab === "tab1"
                          ? "bg-pricingActive text-white  transition ease-in-out duration-300"
                          : ""
                      }`}
                      onClick={() => handleTabChange("tab1")}
                    >
                      Tajweed - 3 Modules
                    </li>
                    <li
                      className={`cursor-pointer text-center lg:py-4 lg:px-9 py-2 px-6 bg-navText rounded-full text-white shadow-xl ${
                        activeTab === "tab2"
                          ? "text-white bg-pricingActive transition ease-in-out duration-300"
                          : ""
                      }`}
                      onClick={() => handleTabChange("tab2")}
                    >
                      Quran Reading
                    </li>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:justify-between sm:gap-6">
                    <li
                      className={`cursor-pointer text-center lg:py-4 lg:px-9 py-2 px-6 bg-navText rounded-full text-white shadow-xl ${
                        activeTab === "tab3"
                          ? "text-white bg-pricingActive transition ease-in-out duration-300"
                          : ""
                      }`}
                      onClick={() => handleTabChange("tab3")}
                    >
                      Quran Memorization
                    </li>
                    <li
                      className={`cursor-pointer text-center lg:py-4 lg:px-9 py-2 px-6 bg-navText rounded-full text-white shadow-xl ${
                        activeTab === "tab4"
                          ? "text-white bg-pricingActive transition ease-in-out duration-300"
                          : ""
                      }`}
                      onClick={() => handleTabChange("tab4")}
                    >
                      Islamic Teachings
                    </li>
                  </div>
                </ul>
              </div>

              <div
                className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ease-in-out mt-5 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {pricingData[activeTab].map((plan) => (
                  <PricingCard key={plan.id} {...plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
