const ContactUs = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-bold text-3xl sec-font">Conatct US</h1>
        <p className="primary-font">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <section className="bg-zinc-100 p-2.5 rounded-lg">
        <div className="flex rounded-md p-10   bg-[var(--bg-items-pop-over)] flex-col items-start gap-4">
          <div>
            <p className="font-bold text-xl sec-font">Contact Information</p>
            <p className="primary-font">Say something to start a live chat!</p>
          </div>
          <ul>
            <li>
              <picture>
                <img src="" alt="" />
              </picture>
              <p>+1012 3456 789</p>
            </li>
            <li>
              <picture>
                <img src="" alt="" />
              </picture>
              <p>3legant@gmail.com</p>
            </li>
            <li>
              <picture>
                <img src="" alt="" />
              </picture>
              <p>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </li>
          </ul>
          <div>
            <picture>
              <img src="" alt="" />
            </picture>
            <picture>
              <img src="" alt="" />
            </picture>
            <picture>
              <img src="" alt="" />
            </picture>
          </div>
        </div>
        <section></section>
      </section>
    </div>
  );
};

export default ContactUs;
