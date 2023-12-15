import MainInput from "../MainInput";

const Newsletter = () => {
  return (
    <div className="w-full lg:bg-transparent min-[500px]:bg-[var(--neutral-03)] min-[500px]:h-[250px] md:h-[199px] lg:h-auto relative mt-10">
      <img
        className="w-full md:inline-block min-[500px]:hidden h-full"
        src="/banners/newsletterBanner.svg"
        alt=""
      />
      <section className="flex absolute p-8 min-[500px]:h-full md:h-auto   min-[500px]:top-4 lg:top-[2.25rem] md:-top-4 left-0 bottom-0 right-0 items-center flex-col gap-8">
        <div className="flex items-center flex-col gap-2">
          <h1 className="sec-font min-[500px]:text-4xl sm:text-5xl leading-10">
            Join Our Newsletter
          </h1>
          <p className="third-font min-[500px]:text-sm sm:text-lg leading-8">
            Sign up for deals, new products and promotions
          </p>
        </div>
        <MainInput
          firsticon="/social/mail.svg"
          className={"min-[500px]:w-3/5 md:w-4/12"}
          type="email"
          submode={true}
          placeholder="Email address"
        />
      </section>
    </div>
  );
};

export default Newsletter;
