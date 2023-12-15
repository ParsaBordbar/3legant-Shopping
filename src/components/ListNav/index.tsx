import Link from "next/link";

const ListNav = (props: { value: string , link?:string }) => {
  return (
    <Link href={props.link ?? ''}>
      <li className="text-black primary-font font-semibold list-none text-sm">
        {props.value}
      </li>
    </Link>
  );
};

export default ListNav;
