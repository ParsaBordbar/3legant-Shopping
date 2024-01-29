import Link from "next/link";
import Newsletter from "../Newsletter";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="py-20 bg-[var(--neutral-07)] flex flex-col gap-12 items-center min-[400px]:px-16 md:px-40">
        <div className="flex min-[400px]:flex-col min-[400px]:gap-10 lg:flex-row w-full items-center">
          <div className="flex-grow min-[400px]:flex-col md:flex-row flex  items-center md:gap-8 min-[400px]:gap-4">
            <picture>
              <img src="/headers/Logo-2.svg" alt="" />
            </picture>
            <p className="md:pl-8 min-[400px]:pt-4 md:pt-0 text-center min-[400px]:border-t  md:border-l md:border-t-0 text-[var(--neutral-03)] third-font text-sm leading-5 border-[var(--neutral-04)]">
              Headphone Store
            </p>
          </div>
          <nav className="flex sm:flex-row min-[400px]:flex-col items-center gap-10">
            <Link href={"/"}>
              <li className="list-none third-font text-sm leading-5 text-[var(--neutral-01)]">
                Home
              </li>
            </Link>
            <Link href={'/product/main'}>
            <li className="list-none third-font text-sm leading-5 text-[var(--neutral-01)]">
              Shop
            </li>
            </Link>
            <Link href={'/product/main'}>
              <li className="list-none third-font text-sm leading-5 text-[var(--neutral-01)]">
                Product
              </li>
            </Link>
            <li className="list-none third-font text-sm leading-5 text-[var(--neutral-01)]">
              Blog
            </li>
            <Link href={"/contact"}>
              <li className="list-none third-font text-sm leading-5 text-[var(--neutral-01)]">
                Contact Us
              </li>
            </Link>
          </nav>
        </div>
        <section className="border-t min-[400px]:gap-4 flex min-[400px]:flex-col lg:flex-row items-center w-full py-4">
          <div className="flex items-center text-center min-[400px]:flex-col lg:flex-row flex-grow gap-7">
            <p className="sec-font text-xs leading-5 text-[var(--neutral-03)]">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <p className="sec-font leading-5 text-xs font-semibold text-[var(--neutral-01)]">
              Privacy Policy
            </p>
            <p className="sec-font leading-5 text-xs font-semibold text-[var(--neutral-01)]">
              Terms of Use
            </p>
          </div>
          <section className="flex items-center gap-6">
            <picture>
              <img src="/social/instagram.svg" alt="" />
            </picture>
            <picture>
              <img src="/social/facebook.svg" alt="" />
            </picture>
            <picture>
              <img src="/social/youtube.svg" alt="" />
            </picture>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
