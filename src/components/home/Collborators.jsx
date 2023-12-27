import {
  Collaborator1,
  Collaborator2,
  Collaborator1Lg,
  Collaborator2Lg,
} from "../../assets/images";

const Collborators = () => {
  return (
    <section id="collaborations" className="bg-secondary">
      {/* desktop */}
      <div className="xl:p-20 px-4 py-10 md:flex hidden items-center justify-between">
        {/* collaborator image */}
        <img src={Collaborator1Lg} alt="" className="" />
        {/* section heading */}
        <div className="space-y-5 max-w-[721px] text-center">
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
            Academies we've collaborated with.
          </h2>
          <p className="xl:text-lg text-sm font-secondary font-light text-grey">
            Explore our partnerships with leading academies, reflecting our
            extensive collaboration and proven expertise in the field.
          </p>
        </div>
        {/* collaborator image */}
        <img src={Collaborator2Lg} alt="" className="" />
      </div>
      {/* mobile */}
      <div className="xl:p-20 px-4 py-10 md:hidden">
        <div className="space-y-2 text-center">
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
            Academies we've collaborated with.
          </h2>
          <p className="xl:text-lg text-sm font-secondary font-light text-grey">
            Explore our partnerships with leading academies, reflecting our
            extensive collaboration and proven expertise in the field.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 mt-[40px]">
          <img src={Collaborator1} alt="" className="w-[120.011px] h-[120px]" />
          <img src={Collaborator2} alt="" className="w-[108.402px] h-[120px]" />
        </div>
      </div>
    </section>
  );
};

export default Collborators;
