"use client";
import Link from "next/link";
import ListNav from "../ListNav";
import MainButton from "../MainButton";
import PopoverList from "../PopOver";
import PopOverItems from "../PopOverItems";
import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import UserToken from "../UserToken";

const Header = () => {
  const [hasCookie, setHasCookie] = useState<boolean>();
  useEffect(() => {
    Cookies.get("token") ? setHasCookie(true) : setHasCookie(false);
  }, []);
  console.log(hasCookie);
  const CheckingCookies = useMemo(() => {
    if (hasCookie) {
      return (
        <Link href={"/user-acc/profile"}>
          <UserToken className="px-1.5" mode="standard" />
        </Link>
      );
    } else {
      return (
        <Link className="w-6 h-6" href={`/signup`}>
          <picture className="inline-block w-full">
            <img
              className="w-full h-full"
              src="/headers/user-circle.svg"
              alt=""
            />
          </picture>
        </Link>
      );
    }
  }, [hasCookie]);

  return (
    <header className="flex flex-col bg-glass fixed w-full z-50 py-3">
      <section className="flex px-[160px] h-full items-center py-3 w-full">
        <picture className="inline-block  flex-grow">
          <Link className="" href={"/"}>
            <img src="/headers/Logo.svg" alt="" />
          </Link>
        </picture>
        <nav className="min-[400px]:hidden lg:flex flex-grow items-center gap-10">
          <ListNav link="/" value="Home" />
          <PopoverList
            mainLink="/product/main"
            className="translate-x-[5.5rem]"
            children={
              <>
                <PopOverItems
                  link={`/sortpro/accessories`}
                  value="Accessories"
                  img="/icons/settings_input_hdmi.svg"
                />
                <PopOverItems
                  img="/icons/headphones.svg"
                  link={`/sortpro/headphones`}
                  value="Headband"
                />
                <PopOverItems
                  img="/icons/earbuds.svg"
                  link={`/sortpro/earbuds`}
                  value="Earbuds"
                />
              </>
            }
            value="Shop"
          />
          <PopoverList
            mainLink="/product/main"
            className="translate-x-[4.5rem]"
            children={
              <>
                <PopOverItems
                  img="/icons/package_2.svg"
                  link={`/sortpro/NEW`}
                  value="New Arrivals"
                />
                <PopOverItems
                  img="/icons/kid_star.svg"
                  link={`/sortpro/HOT`}
                  value="Best Seller"
                />
              </>
            }
            value="Product"
          />

          {/* <ListNav link="/contact" value="Contact Us" /> */}
        </nav>
        <section className=" flex items-center gap-4">
          <picture className="inline-block w-6">
            <img
              className="w-full h-full"
              src="/headers/search 02.svg"
              alt=""
            />
          </picture>
          {CheckingCookies}
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
