import Link from "next/link";
import ListNav from "../ListNav";
import MainButton from "../MainButton";
import PopoverList from "../PopOver";
import PopOverItems from "../PopOverItems";

const Header = () => {
  return (
    <header className="flex mb-10 flex-col ">
      <section className="flex px-[160px] items-center py-3 w-full">
        <picture className="inline-block flex-grow">
          <Link className="" href={"/"}>
            <img src="/headers/Logo.svg" alt="" />
          </Link>
        </picture>
        <nav className="flex flex-grow items-center gap-10">
          <ListNav link="/" value="Home" />
          <PopoverList
            className="translate-x-[3rem]"
            children={
              <>
                <PopOverItems
                  link={`/sortpro/accessories`}
                  value="Accessories"
                />
                <PopOverItems link={`/sortpro/headphones`} value="Headband" />
                <PopOverItems link={`/sortpro/earbuds`} value="Earbuds" />
              </>
            }
            value="Shop"
          />
          <PopoverList
            className="translate-x-[2.5rem]"
            children={
              <>
                <PopOverItems link={`/sortpro/NEW`} value="New Arrivals" />
                <PopOverItems link={`/sortpro/HOT`} value="Best Seller" />
              </>
            }
            value="Product"
          />

          <ListNav link="/contact" value="Contact Us" />
        </nav>
        <section className=" flex items-center gap-4">
          <picture className="inline-block w-6">
            <img
              className="w-full h-full"
              src="/headers/search 02.svg"
              alt=""
            />
          </picture>
          <Link className="w-6 h-6" href={`/register/signup`}>
            <picture className="inline-block w-full">
              <img
                className="w-full h-full"
                src="/headers/user-circle.svg"
                alt=""
              />
            </picture>
          </Link>
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
