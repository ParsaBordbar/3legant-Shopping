import Link from "next/link";
import ListNav from "../ListNav";
import MainButton from "../MainButton";
import PopoverList from "../PopOver";
import PopOverItems from "../PopOverItems";

const Header = () => {
  return (
    <header className="flex flex-col ">
      <section className="flex px-[160px] items-center py-3 w-full">
        <picture className="inline-block flex-grow">
          <img src="/headers/Logo.svg" alt="" />
        </picture>
        <nav className="flex flex-grow items-center gap-10">
          <ListNav value="Home" />
          <PopoverList
            className="translate-x-[3rem]"
            children={
              <>
                <PopOverItems value="Accessories" />
                <PopOverItems value="Headband" />
                <PopOverItems value="Earbuds" />
              </>
            }
            value="Shop"
          />
          <PopoverList
            className="translate-x-[2.5rem]"
            children={
              <>
                <PopOverItems value="New Arrivals" />
                <PopOverItems value="Best Seller" />
              </>
            }
            value="Product"
          />

          <ListNav value="Contact Us" />
        </nav>
        <section className=" flex items-center gap-4">
          <picture className="inline-block w-6">
            <img
              className="w-full h-full"
              src="/headers/search 02.svg"
              alt=""
            />
          </picture>
          <picture className="inline-block w-6">
            <img
              className="w-full h-full"
              src="/headers/user-circle.svg"
              alt=""
            />
          </picture>
          <picture className="inline-block w-6">
            <img
              className="w-full h-full"
              src="/headers/shopping bag.svg"
              alt=""
            />
          </picture>
        </section>
      </section>
      <div className="">
        <picture className="w-full">
          <img className="w-full" src="/headers/ImagePlaceholder.svg" alt="" />
        </picture>
        <div className=" absolute top-[282px] flex flex-col gap-7 left-[732px] ">
          <h1 className="flex flex-col gap-2">
            <span className="text-8xl font-bold  animate-wiggle sec-font">
              Listen to the{" "}
              <mark className="bg-transparent text-[var(--color-mark-baner)]">
                amazing
              </mark>{" "}
              music sound.
            </span>
            <span className="third-font">
              Experience music like never before
            </span>
          </h1>
          <MainButton className="px-14 w-72 py-3" value={"Shopping Now"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
