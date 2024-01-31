import MainInput from "@/components/MainInput";
import ContactFormComponent from "@/components/contactForm";

const ContactUs = () => {

  return (
    <div className="w-full mt-10 px-40 flex flex-col gap-10 ">
      <div className="flex flex-col self-start gap-2">
        <h1 className="font-bold text-3xl sec-font">Conatct US</h1>
        <p className="primary-font">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <section className="bg-zinc-100 w-full grid  grid-cols-5 p-2.5 rounded-lg">
        <div className="flex min-[400px]:col-span-5 lg:col-span-2 w-full rounded-md p-10 bg-[var(--bg-items-pop-over)] flex-col items-start gap-4">
          <div className="mb-24 flex flex-col items-start gap-1.5">
            <p className="font-bold text-xl sec-font">Contact Information</p>
            <p className="primary-font">Say something to start a live chat!</p>
          </div>
          <ul className="flex mb-24 flex-grow flex-col gap-[3.125rem]">
            <li className="flex items-center gap-6">
              <picture className="w-6 h-6 inline-block">
                <img
                  className="w-full h-full"
                  src="/icons/phone-call.svg"
                  alt=""
                />
              </picture>
              <p>+1012 3456 789</p>
            </li>
            <li className="flex items-center gap-6">
              <picture className="w-6 h-6 inline-block">
                <img className="w-full h-full" src="/social/mail.svg" alt="" />
              </picture>
              <p>3legant@gmail.com</p>
            </li>
            <li className="flex items-center gap-6">
              <picture className="w-6 h-6 inline-block">
                <img
                  className="w-full h-full"
                  src="/icons/location-filled.svg"
                  alt=""
                />
              </picture>
              <p>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <picture className="w-8 h-8 inline-block cursor-pointer">
              <img
                className="w-full h-full rounded-full"
                src="/icons/x.svg"
                alt=""
              />
            </picture>
            <picture className="w-8 h-8 inline-block cursor-pointer">
              <img
                className="w-full h-full rounded-full"
                src="/icons/instagram.svg"
                alt=""
              />
            </picture>
            <picture className="w-8 h-8 inline-block cursor-pointer">
              <img
                className="w-full h-full rounded-full"
                src="/icons/facebook.svg"
                alt=""
              />
            </picture>
          </div>
        </div>
        <ContactFormComponent/>
      </section>
    </div>
  );
};

export default ContactUs;
