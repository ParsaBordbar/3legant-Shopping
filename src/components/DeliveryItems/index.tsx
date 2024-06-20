type TDelivery = {
  img: string;
  title: string;
  desc: string;
  className?: string;
};

const DeliveryItems = (props: TDelivery) => {
  return (
    <div
      className={`${props.className} flex w-full bg-[var(--forth-color)]  flex-col gap-4 py-12 px-8`}
    >
      <picture>
        <img src={props.img} alt="" />
      </picture>
      <section className="flex flex-col gap-2">
        <p className="sec-font text-xl font-normal leading-7">{props.title}</p>
        <p className="sec-font text-sm leading-6">{props.desc}</p>
      </section>
    </div>
  );
};

export default DeliveryItems;
