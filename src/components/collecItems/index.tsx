

type TCollec = {
    img: string,
    title:string,
    className?:string
}

const CollecItem = (props : TCollec) => {
  return (
    <div className="relative  group transition-all ease-in-out duration-300 hover:border-zinc-300 border-2 cursor-pointer border-transparent ">
      <picture className="">
        <img className={props.className} src={props.img} alt="" />
      </picture>

      <div className="flex absolute bottom-12 left-12 flex-col gap-3">
        <p className="sec-font group-hover:text-5xl transition-all ease-in-out duration-300 text-4xl font-semibold">{props.title}</p>
        <section className="flex items-center gap-1">
          <span className="third-font">Collection</span>
          <picture>
            <img src="/collec/arrow-right.svg" alt="" />
          </picture>
        </section>
      </div>
    </div>
  );
};

export default CollecItem