const ErrorsValidItems = (props: {
  erros: string | undefined;
  title: string;
  className?: string;
}) => {
  return (
    <ul
      className={`${
        props.className
      } absolute w-full transition-all ease-in-out duration-[1800ms] opacity-0 ${
        props.erros && "!opacity-100"
      }`}
    >
      <li
        className={`capitalize ${
          props.erros ? "text-red-700 line-through" : "text-green-700"
        } flex  items-center gap-2 transition-all ease-in-out duration-300 third-font text-base font-medium `}
      >
        <picture className="w-6 h-6 inline-block">
          <img
            className="w-full h-full"
            src={` ${
              props.erros
                ? "/red-x-line-icon.svg"
                : "/green-checkmark-line-icon.svg"
            }`}
            alt=""
          />
        </picture>
        <p className="third-font text-base">{props.title}</p>
      </li>
    </ul>
  );
};

export default ErrorsValidItems;
