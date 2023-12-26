import {
  ServiceImage1,
  ServiceImage2,
  ServiceImage3,
} from "../../assets/images";
import { Quote } from "../../icons";

const Insights = () => {
  return (
    <section>
      {/* first */}
      <div className="xl:py-20 py-10 xl:px-[60px] px-4 grid md:grid-cols-2 grid-cols-1 xl:gap-[63px] md:gap-[30px] gap-6 md:justify-between items-center">
        {/* section heading */}
        <div className="flex flex-col xl:space-y-4 space-y-2">
          <span className="xl:text-xl text-sm font-secondary font-normal text-secondary xl:leading-[30px] leading-6 uppercase">
            LEARN FROM YOUR POST-GAME METRICS
          </span>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
            Visual insight like never before
          </h2>
          <p className="xl:text-lg text-sm font-secondary font-light text-grey max-w-[648px]">
            We provide a user-friendly visual summary of a player’s performance
            on their every move on the the field, facilitation a deeper
            understanding of their game play.
          </p>
        </div>
        {/* image */}
        <img src={ServiceImage1} alt="" className="md:ml-auto" />
      </div>
      {/* second */}
      <div className="xl:py-20 py-10 xl:px-[60px] px-4 grid md:grid-cols-2 grid-cols-1 xl:gap-[63px] md:gap-[30px] gap-6 items-center">
        {/* image */}
        <img src={ServiceImage2} alt="" className="sm:order-1 order-2" />
        {/* info */}
        <div className="flex flex-col xl:space-y-4 space-y-2 sm:order-2 order-1">
          <span className="xl:text-xl text-sm font-secondary font-normal text-secondary xl:leading-[30px] leading-6 uppercase">
            NO TWO PLAYERS ARE ALIKE
          </span>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
            TAILORED TRAINING FOR INDIVIDUAL GROWTH
          </h2>
          <p className="xl:text-lg text-sm font-secondary font-light text-grey max-w-[648px]">
            No more generic approaches. We empower private trainers, coaches or
            parent who self-train their player to deliver a laser focused
            sessions based on post-games metrics, ensuring that every minute of
            training contribute to player's progress
          </p>
        </div>
      </div>
      {/* third */}
      <div className="xl:py-20 py-10 xl:px-[60px] px-4 grid md:grid-cols-2 grid-cols-1 xl:gap-[65px] md:gap-[30px] gap-6 items-center">
        {/* info */}
        <div className="flex flex-col xl:space-y-4 space-y-2">
          <span className="xl:text-xl text-sm font-secondary font-normal text-secondary xl:leading-[30px] leading-6 uppercase">
            PREDICTION MODEL INTO THE FUTURE
          </span>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
            TRACK YOUR JOURNEY
          </h2>
          <p className="xl:text-lg text-sm lg:w-auto md:w-[350px] font-secondary font-light text-grey max-w-[648px]">
            From the first kick to achieving greatness on the field, we keep
            meticulous record of your development. Your soccer story,
            documented, forecasted and celebrated.
          </p>
        </div>
        {/* image */}
        <div className="relative">
          <div className="relative float-right">
            <img
              src={ServiceImage3}
              alt=""
              className="h-[325px] md:h-[427px] xl:h-auto"
            />
            <div className="flex flex-col p-4 md:p-5 rounded-2xl bg-custom-black absolute md:bottom-[48px] bottom-[25.5px] xl:-left-[210px] md:-left-[100px] xs:-left-[115px] -left-[50px] md:w-[377px] xs:w-[315px] w-72">
              <Quote />
              <p className="xl:text-sm text-xs leading-5 md:leading-6 font-light mt-3 font-secondary text-white">
                If a parent feel their child should be in a better academy
                system, let them use his/her data matched with their age skill
                level to decide that.you can't have a 7yr old, with good skills
                and compare them to a 35 yr old Messi just because he/she
                aspires to be like him. That's unrealistic
              </p>
              <span className="font-bold text-secondary">Coach Mike</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
