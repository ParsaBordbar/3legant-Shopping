
const BrandsList = (props: { img: string }) => {

  return (
    <picture className="inline-block cursor-pointer w-[167px] h-16">
      <img className="w-full h-full" src={props.img} alt="" />
    </picture>
  );
};

export default BrandsList;
