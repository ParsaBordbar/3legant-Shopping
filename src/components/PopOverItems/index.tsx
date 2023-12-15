import Link from "next/link";

const PopOverItems = (props: { value: string; link?: string }) => {
  return (
    <Link
      href={props.link ?? ''}
      className="p-1 px-2 outline-none hover:py-3 sec-font cursor-pointer hover:bg-[var(--bg-pop-over)] transition-all ease-in-out duration-300 rounded-md"
    >
      {props.value}
    </Link>
  );
};

export default PopOverItems;
