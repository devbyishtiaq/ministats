import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CrossIcon } from "../../../../icons";
import ReCAPTCHA from "react-google-recaptcha";
import { useAppContext } from "../../../../context/AppContext";
import { Button, InputGroup } from "../../../../ui";
import { toast } from "react-toastify";
import { sendContactForm } from "../../../../api/sendContactForm";

const TrialModal = () => {
  const { closeModal } = useAppContext();
  const [selectedOption, setSelectedOption] = useState("individual");
  const [activeStep, setActiveStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);

  // handle ReCAPTCHA verification
  const onReCAPTCHAChange = (value) => {
    console.log(value, "value goes here");
    if (value) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  // valiation schema for contact form
  const schema = z.object({
    contactname: z.string().min(1, "Contact name is required"),
    clubname: z.string().min(1, "Club name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\d+$/, "Phone number must be a number"),
  });

  // destructure required functions from useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // handle form submission
  const onSubmit = async (data) => {
    try {
      const formData = { ...data, selectedOption };
      const result = await sendContactForm(formData, isVerified);

      if (result.success) {
        toast.success(result.message);
        reset();
        console.log(result.message);
      } else {
        toast.error(result.message);
        console.error(result.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const handleOptionChange = (item) => {
    setSelectedOption(item);
  };
  const goToNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="fixed h-[100vh] overflow-y-auto inset-0 bg-black/80 flex justify-center items-start z-[9999] md:px-0 px-4 py-10">
      {activeStep === 1 && (
        <div className="bg-custom-black rounded-lg max-w-[500px] w-full">
          {/* title */}
          <div className="flex items-center px-6 justify-between py-4 border-b border-dark-grey">
            <h6 className="font-bold font-secondary text-base text-white">
              Start Free Trial
            </h6>
            <Button
              onClick={() => closeModal(false)}
              bg="transparent"
              className="border-none hover:bg-transparent"
              padding=""
            >
              <CrossIcon className="min-w-6 min-h-6" />
            </Button>
          </div>
          {/* form */}
          <div className="flex flex-col space-y-6 !w-full mt-5 p-6">
            <div className="p-4 flex items-center gap-4 border border-dark-grey rounded-lg relative">
              <input
                id="individual"
                name="individual"
                type="radio"
                className="h-4 w-4 border-gray-300 text-secondary focus:secondary focus:ring-secondary"
                checked={selectedOption === "individual"}
              />
              <div
                onClick={() => handleOptionChange("individual")}
                className="absolute inset-0 bg-transparent"
              />

              <label
                htmlFor="individual"
                className="text-sm font-secondary text-white"
              >
                Individual Team
              </label>
            </div>
            <div className="p-4 flex items-center gap-4 border border-dark-grey rounded-lg relative">
              <input
                id="schoolCollege"
                name="individual"
                type="radio"
                className="h-4 w-4 border-gray-300 text-secondary focus:secondary focus:ring-secondary"
                checked={selectedOption === "schoolCollege"}
              />
              <div
                onClick={() => handleOptionChange("schoolCollege")}
                className="absolute inset-0 bg-transparent"
              />
              <label
                htmlFor="schoolCollege"
                className="text-sm font-secondary text-white"
              >
                Schools/College Team
              </label>
            </div>
            <div className="p-4 flex items-center gap-4 border border-dark-grey rounded-lg relative">
              <input
                id="academy"
                name="individual"
                type="radio"
                className="h-4 w-4 border-gray-300 text-secondary focus:secondary focus:ring-secondary"
                checked={selectedOption === "academy"}
                onChange={handleOptionChange}
              />
              <div
                onClick={() => handleOptionChange("academy")}
                className="absolute inset-0 bg-transparent"
              />
              <label
                htmlFor="academy"
                className="text-sm font-secondary text-white"
              >
                Academy (multiple teams)
              </label>
            </div>
            {/* buttons */}
            <div className="flex justify-end gap-4">
              <Button
                onClick={() => closeModal(false)}
                padding="sm"
                bg="transparent"
              >
                CANCEL
              </Button>
              <Button onClick={goToNextStep} padding="sm">
                CONTINUE
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* second step */}
      {activeStep === 2 && (
        <div className="bg-custom-black rounded-lg max-w-[500px]">
          {/* title */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark-grey">
            <h6 className="font-bold font-secondary text-base text-white">
              Trial Access Request
            </h6>
            <Button
              onClick={() => closeModal(false)}
              bg="transparent"
              className="border-none hover:bg-transparent"
              padding=""
            >
              <CrossIcon className="min-w-6 min-h-6" />
            </Button>
          </div>
          {/* form */}
          <div className="p-6 space-y-6">
            <p className="font-secondary text-sm text-white font-normal">
              Complete the form below to receive a unique link for the free
              trial version, and we'll get in touch!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Contact Name */}
              <InputGroup
                htmlfor="contactname"
                labelText="Contact Name"
                inputName="contactname"
                placeholder="Contact name"
                inputType="text"
                register={register}
                errors={errors}
              />

              {/* club name */}
              <InputGroup
                htmlfor="clubname"
                labelText="Club Name"
                inputName="clubname"
                placeholder="Club name"
                inputType="text"
                register={register}
                errors={errors}
              />
              {/* email */}
              <InputGroup
                htmlfor="email"
                labelText="Email"
                inputName="email"
                placeholder="Email"
                inputType="email"
                register={register}
                errors={errors}
              />
              {/* email */}
              <InputGroup
                htmlfor="phone"
                labelText="Phone"
                inputName="phone"
                placeholder="Phone"
                inputType="text"
                register={register}
                errors={errors}
              />
              {/* recaptcha */}
              <ReCAPTCHA
                sitekey="6Les-jcpAAAAABfRKG3-mqdD60aSOv3HKWPbDnzN"
                style={{ height: "66px" }}
                onChange={onReCAPTCHAChange}
              />
              {/* buttons */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => closeModal(false)}
                  className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-white hover:bg-white rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light"
                >
                  CANCEL
                </button>
                <button
                  onClick={goToPreviousStep}
                  className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-secondary hover:bg-secondary rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light"
                >
                  PREVIOUS
                </button>
                <button className="xl:py-[10px] py-2 font-custom xl:px-4 px-4 border border-secondary hover:border-white hover:bg-white rounded-[49px] text-white hover:text-black transition-all delay-100 text-sm font-light bg-secondary">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrialModal;
