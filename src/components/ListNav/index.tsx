const ListNav = (props: { value: string }) => {
  return (
    <li className="text-black primary-font font-semibold list-none text-sm">{props.value}</li>
  );
};

export default ListNav;
