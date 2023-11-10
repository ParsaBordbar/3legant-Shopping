import MainInput from "../MainInput";

const Newsletter = () => {
  return (
    <div className="w-full relative mt-10">
      <picture>
        <img className="w-full" src="/banners/newsletterBanner.svg" alt="" />
      </picture>
      <section className="flex absolute top-[6.25rem] left-0 bottom-0 right-0 items-center flex-col gap-8">
        <div className="flex items-center flex-col gap-2">
          <h1 className="sec-font text-5xl leading-10">Join Our Newsletter</h1>
          <p className="third-font text-lg leading-8">
            Sign up for deals, new products and promotions
          </p>
        </div>
        <MainInput className={"w-4/12"} type="email" selle={true} placeholder="Email address"/>
      </section>
    </div>
  );
};

export default Newsletter;
