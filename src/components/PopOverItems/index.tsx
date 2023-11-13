const PopOverItems = (props: { value: string }) => {
  return (
    <span className="p-1 px-2 hover:py-3 third-font cursor-pointer hover:bg-[var(--bg-pop-over)] transition-all ease-in-out duration-300 rounded-md">
      {props.value}
    </span>
  );
};

export default PopOverItems;
