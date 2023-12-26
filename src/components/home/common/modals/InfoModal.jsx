import { CrossIcon } from "../../../../icons";

const InfoModal = ({ setOpen }) => {
  return (
    <div className="fixed overflow-y-auto h-[100vh] inset-0 bg-black/80 flex justify-center items-start z-20 md:px-0 px-4 pt-10">
      <div className="bg-custom-black rounded-lg max-w-[500px]">
        {/* title */}
        <div className="flex items-center justify-between py-4 px-6 border-b border-dark-grey">
          <h6 className="font-bold font-secondary text-base text-white">
            Info
          </h6>
          <button onClick={() => setOpen(false)}>
            <CrossIcon className="min-w-6 min-h-6" />
          </button>
        </div>
        {/* body */}
        <div className="p-6">
          <h6 className="font-medium text-base font-secondary text-white">
            MiniStats Member
          </h6>
          <p className="text-sm font-light font-secondary text-white">
            Your Academy must be a MiniStats member. Contact your administrator
            to register players and unlock this feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
