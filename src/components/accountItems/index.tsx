import Link from "next/link";

const AccountItems = (props: {
  link: string;
  title: string;
  SvgComponent: any;
}) => {
  return (
    <Link
      href={props.link}
      className="flex w-full hover:bg-[--third-color] rounded-md transition-all ease-in-out duration-200 p-1.5 items-center gap-2"
    >
      <picture className="w-6 h-6 inline-block">{props.SvgComponent}</picture>
      <p className="sec-font text-base">{props.title}</p>
    </Link>
  );
};

export default AccountItems;
