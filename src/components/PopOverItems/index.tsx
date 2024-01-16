import Link from "next/link";

const PopOverItems = (props: {
  value: string;
  link?: string;
  img?: string;
}) => {
  return (
    <Link
      href={props.link ?? ""}
      className="p-1 px-2 flex items-center gap-1 outline-none hover:py-3 sec-font cursor-pointer hover:bg-[var(--bg-pop-over)] transition-all ease-in-out duration-300 rounded-md"
    >
      {props.img && (
        <picture className="w-6 h-6">
          <img className="w-full h-full" src={props.img} alt="" />
        </picture>
      )}
      <p className="">{props.value}</p>
    </Link>
  );
};

export default PopOverItems;
