import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Testimonials from "../components/home/Testimonials";
import Collborators from "../components/home/Collborators";
import HowItWorks from "../components/home/HowItWorks";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import Insights from "../components/home/Insights";
import { useParams } from "react-router";

const Home = () => {
  let { id } = useParams();
  useEffect(() => {
    const scrollToElement = () => {
      if (id) {
        const targetElement = document.getElementById(`${id}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    scrollToElement();
  }, [id]);

  return (
    <React.Fragment>
      <MainLayout>
        {/* hero */}
        <Hero />
        {/* what we do */}
        <WhatWeDo />
        {/* insights */}
        <Insights />
        {/* how it works */}
        <HowItWorks />
        {/* collaborations */}
        <Collborators />
        {/* testimonials */}
        <Testimonials />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;
