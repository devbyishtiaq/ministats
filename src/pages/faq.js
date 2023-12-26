import React from "react";
import MainLayout from "../layouts/MainLayout";
import { QuestionIcon } from "../icons";

const Faq = () => {
  return (
    <MainLayout header="custom">
      <section id="faqs">
        <div className="xl:py-20 py-10 xl:px-[60px] px-4">
          <div className="md:px-6 md:py-[40px] border border-dark-grey rounded-lg">
            {/* section heading */}
            <div className="space-y-2 max-w-[823px] mx-auto">
              <h1 className="font-bold font-primary xl:text-[40px] text-[28px] xl:leading-[52.4px] leading-[36.68px] text-center text-white">
                Frequently Asked Questions
              </h1>
              <p className="font-light xl:text-lg text-sm text-grey font-secondary text-center">
                Dive into our FAQs to discover how MiniStats revolutionizes
                player development with data-driven insights, guiding you
                towards excellence on the field.
              </p>
            </div>
            {/* faqs */}
            <div className="xl:mt-[40px] mt-6 grid md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
              {faqs.map((item) => (
                <div className="flex gap-4 md:p-0 p-4" key={item.id}>
                  {/* icon */}
                  <QuestionIcon className="min-w-[36px] min-h-[36px]" />
                  {/* info */}
                  <div className="space-y-1">
                    <h2 className="font-semibold text-base font-secondary text-white">
                      What is MiniStats?
                    </h2>
                    <p className="text-sm font-light font-secondary text-grey">
                      MiniStats is an advanced AI-powered platform designed to
                      analyze and enhance individual player performance in
                      soccer. It transforms game day recordings into
                      personalized insights, supporting players, coaches/private
                      trainers, and academies in their quest for improvement.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Faq;

const faqs = [
  {
    id: 1,
    title: "What is MiniStats?",
    text: "MiniStats is an advanced AI-powered platform designed to analyze and enhance individual player performance in soccer. It transforms game day recordings into personalized insights, supporting players, coaches/private trainers, and academies in their quest for improvement.",
  },
  {
    id: 2,
    title: "How do I use MiniStats?",
    text: "Using MiniStats is simple! Just record your game day with any device, upload the footage to MiniStats, and let our AI analyze your performance. Access your personalized report to inform your next training module.",
  },
  {
    id: 3,
    title: "What kind of data does MiniStats analyze?",
    text: "MiniStats analyzes a wide range of data, including movements, skills, and key moments from your game day. The AI combines this data with visually engaging replay moments to provide a comprehensive performance analysis.",
  },
  {
    id: 4,
    title: "Is MiniStats suitable for players of all ages?",
    text: "Absolutely! MiniStats customizes its analysis based on the player's age and skill set (ages 4 through 16). This ensures that insights and recommendations are tailored to the unique developmental needs of each player.",
  },
  {
    id: 5,
    title: "Can I share my MiniStats report with my personal trainer?",
    text: "Yes, you can! MiniStats allows parents and academies to grant access to a player's personal trainer. This collaborative approach enables the design of laser-focused training modules for targeted player development.",
  },
  {
    id: 6,
    title: "How often should I use MiniStats?",
    text: "MiniStats can be used as frequently as desired. Regular use allows for ongoing performance tracking and targeted improvements. Whether you're part of an academy or an individual player, MiniStats adapts to your training rhythm",
  },
  {
    id: 7,
    title: "Is MiniStats suitable for soccer academies and coaches?",
    text: "Absolutely! MiniStats is a valuable tool for academies and coaches, providing detailed insights into individual player performances. It supports the creation of personalized training sessions for collective improvement.",
  },
];
