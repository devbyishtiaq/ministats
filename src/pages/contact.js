import MainLayout from "../layouts/MainLayout";
import { ContactBg } from "../assets/images";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  return (
    <MainLayout header="custom">
      <section id="contact-us">
        <div className="xl:py-20 py-10 xl:px-[60px] px-4 flex lg:flex-nowrap flex-wrap gap-6 justify-between">
          {/* contact form */}
          <div className="p-8 border border-dark-grey rounded-lg">
            <span className="font-secondary xl:text-xl text-lg xl:leading-[30px] font-normal text-secondary">
              CONTACT US
            </span>
            <h1 className="xl:text-[40px] text-[28px] font-bold xl:leading-[52.4px] leading-[36.68px] font-primary text-white mt-6">
              Get in touch with us
            </h1>
            <p className="font-secondary xl:text-lg text-sm font-light text-grey mt-4">
              We'd love to hear from you! Use the form below to contact us and
              we'll respond as soon as we can .<br />
              <br /> If you are an existing user, feel free to shoot us an email
              directly at{" "}
              <a
                href="mailto: support@ministats.ai"
                className="underline text-secondary"
              >
                support@ministats.ai
              </a>{" "}
              rather than use the form below.
              <br />
              <br /> We typically respond to all inquiries within 24 hours!
            </p>
            {/* form */}
            <form action="" className="mt-8">
              <div className="grid grid-cols-12 gap-6">
                {/* first name */}
                <div className="space-y-2 lg:col-span-6 col-span-12">
                  <label
                    htmlFor="firstname"
                    className="block font-secondary text-sm font-normal text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="firstname"
                    className="block w-full py-2 text-white px-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-custom-black placeholder:text-grey text-sm"
                    placeholder="First name"
                  />
                </div>
                {/* last name */}
                <div className="space-y-2 lg:col-span-6 col-span-12">
                  <label
                    htmlFor="lastname"
                    className="block font-secondary text-sm font-normal text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="lastname"
                    className="block w-full py-2 text-white px-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-custom-black placeholder:text-grey text-sm"
                    placeholder="Last name"
                  />
                </div>
                {/* email */}
                <div className="space-y-2 lg:col-span-6 col-span-12">
                  <label
                    htmlFor="email"
                    className="block font-secondary text-sm font-normal text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full py-2 text-white px-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-custom-black placeholder:text-grey text-sm"
                    placeholder="Email"
                  />
                </div>
                {/* phone */}
                <div className="space-y-2 lg:col-span-6 col-span-12">
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
                    className="block w-full py-2 text-white px-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-custom-black placeholder:text-grey text-sm"
                    placeholder="Number"
                  />
                </div>
                {/* message */}
                <div className="space-y-2 col-span-12">
                  <label
                    htmlFor="message"
                    className="block font-secondary text-sm font-normal text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="block w-full p-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-custom-black placeholder:text-grey text-grey text-sm"
                    defaultValue={""}
                  />
                </div>
                {/* recaptcha */}
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  style={{ height: "66px" }}
                />
                {/* button */}
                <div className="col-span-12">
                  <button className="xl:py-3 py-2 font-custom xl:px-5 px-4 border border-secondary hover:border-primary rounded-[40px] text-white text-sm transition-all delay-100 font-light bg-secondary hover:bg-primary">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* image */}
          <img
            src={ContactBg}
            alt=""
            className="xl:ml-auto mx-auto lg:mt-0 mt-6"
            style={{
              boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.50)",
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
