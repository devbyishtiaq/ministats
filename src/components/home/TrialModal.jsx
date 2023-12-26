import React, { useState } from "react";
import { CrossIcon } from "../../icons";
import ReCAPTCHA from "react-google-recaptcha";

const TrialModal = ({ setShow }) => {
  const [showNextStep, setShowNextStep] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false);
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-20">
      {!showNextStep && (
        <div className="bg-custom-black rounded-lg max-w-[700px] w-full">
          {/* title */}
          <div className="flex items-center px-6 justify-between py-4 border-b border-dark-grey">
            <h6 className="font-bold font-secondary text-base text-white">
              Start Free Trial
            </h6>
            <button onClick={() => setShow(false)}>
              <CrossIcon className="min-w-6 min-h-6" />
            </button>
          </div>
          {/* form */}
          <div className="flex flex-col space-y-6 !w-full mt-5 p-6">
            <div className="p-4 flex items-center gap-4 border border-dark-grey rounded-lg">
              <input
                id="individual"
                name="individual"
                type="radio"
                className="h-4 w-4 border-gray-300 text-secondary focus:secondary focus:ring-secondary"
              />
              <label
                htmlFor="individual"
                className="text-sm font-secondary text-white"
              >
                Individual Team
              </label>
            </div>
            <div className="p-4 flex items-center gap-4 border border-dark-grey rounded-lg">
              <input
                id="individual"
                name="individual"
                type="radio"
                checked
                className="h-4 w-4 border-gray-300 text-secondary focus:secondary focus:ring-secondary"
              />
              <label
                htmlFor="individual"
                className="text-sm font-secondary text-white"
              >
                Schools/College Team
              </label>
            </div>
            <div className="p-4 flex items-center gap-4 border border-dark-grey rounded-lg">
              <input
                id="individual"
                name="individual"
                type="radio"
                className="h-4 w-4 border-gray-300 text-secondary focus:secondary focus:ring-secondary"
              />
              <label
                htmlFor="individual"
                className="text-sm font-secondary text-white"
              >
                Academy (multiple teams)
              </label>
            </div>
            {/* buttons */}
            <div className="flex justify-end gap-4">
              <button className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-white hover:bg-white rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light">
                CANCEL
              </button>
              <button
                onClick={() => setShowNextStep(true)}
                className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-secondary hover:border-white hover:bg-white rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light bg-secondary"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      )}
      {/* second step */}
      {showNextStep && !showFinalStep && (
        <div className="bg-custom-black rounded-lg max-w-[700px]">
          {/* title */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark-grey">
            <h6 className="font-bold font-secondary text-base text-white">
              Trial Access Request
            </h6>
            <button
              onClick={() => {
                setShowFinalStep(false);
                setShow(false);
              }}
            >
              <CrossIcon className="min-w-6 min-h-6" />
            </button>
          </div>
          {/* form */}
          <div className="p-6 space-y-6">
            <p className="font-secondary text-sm text-white font-normal">
              Complete the form below to receive a unique link for the free
              trial version, and we'll get in touch!
            </p>
            {/* Contact Name */}
            <div className="space-y-2">
              <label
                htmlFor="contactname"
                className="block font-secondary text-sm font-normal text-white"
              >
                Contact name
              </label>
              <input
                type="text"
                name="contactname"
                id="contactname"
                autoComplete="contactname"
                className="block w-full py-2 px-3 text-white ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-transparent placeholder:text-grey text-sm"
                placeholder="Contact name"
              />
            </div>

            {/* club name */}
            <div className="space-y-2">
              <label
                htmlFor="clubname"
                className="block font-secondary text-sm font-normal text-white"
              >
                Club Name
              </label>
              <input
                type="text"
                name="clubname"
                id="clubname"
                autoComplete="clubname"
                className="block w-full py-2 px-3 text-white ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-transparent placeholder:text-grey text-sm"
                placeholder="Club name"
              />
            </div>
            {/* email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-secondary text-sm font-normal text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full py-2 px-3 text-white ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-transparent placeholder:text-grey text-sm"
                placeholder="Email"
              />
            </div>
            {/* email */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block font-secondary text-sm font-normal text-white"
              >
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="block w-full py-2 px-3 text-white ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-transparent placeholder:text-grey text-sm"
                placeholder="Phone"
              />
            </div>
            {/* recaptcha */}
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              style={{ height: "66px" }}
            />
            {/* buttons */}
            <div className="flex justify-end gap-4">
              <button className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-white hover:bg-white rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light">
                CANCEL
              </button>
              <button className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-secondary hover:bg-secondary rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light">
                PREVIOUS
              </button>
              <button
                onClick={() => setShowFinalStep(true)}
                className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-secondary hover:border-white hover:bg-white rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light bg-secondary"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}
      {/* final step */}
      {showFinalStep && (
        <div className="bg-custom-black rounded-lg max-w-[700px]">
          {/* title */}
          <div className="flex items-center justify-between py-4 px-6 border-b border-dark-grey">
            <h6 className="font-bold font-secondary text-base text-white">
              Info
            </h6>
            <button onClick={() => setShow(false)}>
              <CrossIcon className="min-w-6 min-h-6" />
            </button>
          </div>
          {/* body */}
          <div className="p-6">
            <h6 className="font-medium text-base font-secondary text-white">
              MiniStats Member
            </h6>
            <p className="text-sm font-light font-secondary text-white">
              Your Academy must be a MiniStats member. Contact your
              administrator to register players and unlock this feature.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrialModal;
