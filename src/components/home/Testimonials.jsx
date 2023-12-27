import React, { useState, useEffect } from "react";
import {
  Stars,
  TestimonialImage1,
  TestimonialImage2,
  TestimonialImage3,
} from "../../assets/images";
import { ArrowLeft, ArrowRight } from "../../icons";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <section id="testimonials">
      <div className="xl:py-20 py-10 xl:px-[60px] px-4">
        {/* section heading */}
        <div className="flex flex-col items-center text-center xl:space-y-4 space-y-3">
          <span className="xl:text-xl text-sm font-secondary font-normal text-[#F7AD0B] xl:leading-[30px] leading-6 uppercase">
            SUCCESS STORIES
          </span>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
            Member Testimonials
          </h2>
          <p className="xl:text-lg text-sm font-secondary font-light text-grey max-w-[648px]">
            Discover perception and experiences directly from our valued members
            in their own words.
          </p>
        </div>
        {/* slider buttons */}
        <div className="lg:flex hidden items-center gap-3 justify-end text-white pr-2">
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white hover:bg-secondary transition-all duration-100"
            onClick={prevSlide}
          >
            <ArrowLeft stroke="#222" />
          </button>
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white hover:bg-secondary transition-all duration-100"
            onClick={nextSlide}
          >
            <ArrowRight stroke="#222" />
          </button>
        </div>
        <div
          className={`flex lg:flex-nowrap flex-wrap gap-4 md:gap-12 xl:mt-8 mt-6 transition-opacity duration-700`}
        >
          <div className="border border-dark-grey py-6 px-6 rounded-lg flex flex-col xl:space-y-4 space-y-3">
            <img src={Stars} className="w-[152px]" alt="" />
            <p
              className={`text-grey font-light font-secondary xl:text-lg text-sm xl:leading-[30px] leading-[23px] tracking-[0.18px]`}
            >
              {testimonials[currentSlide].text}
            </p>
            <span className="text-white text-lg font-medium">
              {testimonials[currentSlide].author}
            </span>
          </div>
          {/* image */}
          <div className="xl:min-w-[592px] lg:min-w-[400px] min-w-[310px] mx-auto">
            <img
              src={testimonials[currentSlide].image}
              alt=""
              className=""
              style={{
                boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.50)",
              }}
            />
          </div>
        </div>
        {/* slider buttons */}
        <div className="flex lg:hidden items-center justify-center mt-6 gap-3 text-white pr-2">
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white hover:bg-secondary transition-all duration-100"
            onClick={prevSlide}
          >
            <ArrowLeft stroke="#222" />
          </button>
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white hover:bg-secondary transition-all duration-100"
            onClick={nextSlide}
          >
            <ArrowRight stroke="#222" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const testimonials = [
  {
    id: 1,
    text: "Our team's sponsors, comprised of parents and guardians, appreciate the inclusive transparency behind our coaches' decisions on game day. MiniStats has become an invaluable tool for us and our sponsors, providing insightful data on each player. This data not only helps us understand their strengths but also pinpoints areas for improvement. The platform has truly facilitated a more informed and collaborative approach to our team's development.",
    author: "Marcus Bracy",
    image: TestimonialImage1,
  },
  {
    id: 2,
    text: "As both a passionate dad and a team coach, my son's development is a top priority. While trusting the process has always been essential, MiniStats has been a revelation. Until now, decisions to enhance my son's skills were mostly intuition-based. With MiniStats, I now have a comprehensive awareness that guides me in a more informed and purposeful approach to his advancement. It reaffirms my belief that a child's development should be a shared responsibility, with tools like MiniStats empowering parents to play an active role alongside the academy.",
    author: "Robert Pieroni",
    image: TestimonialImage2,
  },
  {
    id: 3,
    text: "In the last three years, we invested in paid personal training sessions for both of our sons. Despite the dedication, it was challenging for the trainer to attend their games and provide personalized insights for improvement. Enter MiniStats – a game-changer! Collaborating seamlessly with our son's academy, the weekly Player Card reports we receive are now shared with the trainer. This collaboration has revolutionized our sons' training experience, translating into remarkable improvements in just the last three months. The impact has far exceeded what we invested in the past three years. MiniStats has not only enhanced the value of our training sessions but has also become an invaluable tool in our sons' developmental journey.",
    author: "Aristo Setiawan",
    image: TestimonialImage3,
  },
];
