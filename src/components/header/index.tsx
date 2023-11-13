import Link from "next/link";
import ListNav from "../ListNav";
import MainButton from "../MainButton";
import PopoverList from "../PopOver";
import PopOverItems from "../PopOverItems";

const Header = () => {
  return (
    <header className="flex flex-col ">
      <section className="flex px-[160px] items-center py-3 w-full">
        <Link className=" flex-grow" href={"/"}>
          <picture className="inline-block">
            <img src="/headers/Logo.svg" alt="" />
          </picture>
        </Link>
        <nav className="flex flex-grow items-center gap-10">
          <ListNav value="Home" />
          <PopoverList
            className="translate-x-[3rem]"
            children={
              <>
                <PopOverItems value="Accessories" />
                <Link className="outline-none" href={`/sortpro/headphones`}>
                  <PopOverItems value="Headband" />
                </Link>
                <Link className="outline-none" href={`/sortpro/earbuds`}>
                  <PopOverItems value="Earbuds" />
                </Link>
              </>
            }
            value="Shop"
          />
          <PopoverList
            className="translate-x-[2.5rem]"
            children={
              <>
                <Link className="outline-none" href={`/sortpro/NEW`}>
                  <PopOverItems value="New Arrivals" />
                </Link>
                <Link className="outline-none" href={`/sortpro/HOT`}>
                  <PopOverItems value="Best Seller" />
                </Link>
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
    </header>
  );
};

export default Header;
