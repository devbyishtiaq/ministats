import { AiIcon, NotesIcon, ReportCard, UploadIcon } from "../../icons";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className={`bg-hiw bg-cover bg-center bg-no-repeat`}
    >
      <div className="relative inset-0 bg-black/30 backdrop-blur-[3px] xl:py-20 py-10 xl:px-[60px] px-4 ">
        <div className="flex flex-col items-center">
          {/* section heading */}
          <div className="flex flex-col text-center xl:space-y-5 space-y-3">
            <span className="xl:text-xl text-sm font-secondary font-normal text-secondary xl:leading-[30px] leading-6 uppercase">
              HOW ITS WORK
            </span>
            <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] uppercase">
              Player Evolution
            </h2>
            <p className="xl:text-lg text-sm font-secondary font-light text-grey max-w-[648px]">
              Fuel player evolution through AI-powered insights.
            </p>
          </div>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 gap-6 xl:px-24 mt-10">
          {cards.map((item) => (
            <div
              className="bg-custom-black rounded-lg flex gap-6 p-6"
              key={item.id}
            >
              {item.icon}
              <div className="flex flex-col space-y-3">
                <h3 className="xl:text-xl text-base xl:leading-[30px] leading-[26px] font-medium font-secondary text-white">
                  {item.title}
                </h3>
                <p className="xl:text-base text-sm text-grey font-light font-secondary">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

const cards = [
  {
    id: 1,
    icon: (
      <NotesIcon className="xl:min-w-[48px] min-w-[38px] xl:min-h-[48px] min-h-[38px]" />
    ),
    title: "Academy Records Game-Day Footage",
    text: "Capture the excitement of your teams competitive game day actions, using any automated recording device of your choice. From kick off to sprints and then final whistle, capture each minutes and moments of the games.",
  },
  {
    id: 2,
    icon: (
      <UploadIcon className="xl:min-w-[48px] min-w-[38px] xl:min-h-[48px] min-h-[38px]" />
    ),
    title: "Seamless Upload to MiniStats",
    text: "Easily upload the recorded competitive game day footage to MiniStats. Our intuitive platform ensures a smooth and user-friendly experience, making it easy to share your teams soccer events with us.",
  },
  {
    id: 3,
    icon: (
      <AiIcon className="xl:min-w-[48px] min-w-[38px] xl:min-h-[48px] min-h-[38px]" />
    ),
    title: "AI-Powered Age-to-Skill Analyzer",
    text: "MiniStats takes the reins from here, employs AI algorithms to analyze every aspect of your individual players' performances, combining precise data analysis with visually captivating moments which led to each metric. Importantly, the analyzed data is tailored to match the age-specific metrics.",
  },
  {
    id: 4,
    icon: (
      <ReportCard className="xl:min-w-[48px] min-w-[38px] xl:min-h-[48px] min-h-[38px]" />
    ),
    title: "Player's Card Sent to Player's Sponsor(s)",
    text: "Access player cards for detailed game day performance breakdowns and summaries. Use these insights to guide strategic improvements aligned with the player's skill level. Sponsors can facilitate collaboration with personal trainers to create tailored training modules for individual development needs.",
  },
];
