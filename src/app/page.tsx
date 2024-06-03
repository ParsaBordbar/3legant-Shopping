import BrandsList from "@/components/Brands";
import MainButton from "@/components/MainButton";
import CartProduct from "@/components/cardProducts";
import { SwiperSlide } from "swiper/react";
import { DataProduct } from "../data/index";
import { useMemo } from "react";
import { TProduct } from "@/types";
import { Slider } from "@/components/splide";
import CollecItem from "@/components/collecItems";
import TimerItems from "@/components/timerItems";
import DeliveryItems from "@/components/DeliveryItems";
import Newsletter from "@/components/Newsletter";
import NewProductsSlider from "@/components/NewPro";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="banner-one  w-full h-[721px]">
        {/* <picture className="w-full">
          <img className="w-full" src="/banners/ImagePlaceholder.svg" alt="" />
        </picture> */}
        <div className=" absolute lg:top-1/2 lg:left-[40%] text-lg  min-[1321px]:top-[282px] flex flex-col gap-7 min-[1321px]:left-[732px] ">
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
          <MainButton className="px-14 w-72  py-3" value={"Shopping Now"} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 items-center w-[84%] mx-auto">
        <section className=" flex flex-wrap justify-center  my-2 gap-8">
          <BrandsList img={"/brandsLogo/logo 01.svg"} />
          <BrandsList img={"/brandsLogo/logo 02.svg"} />
          <BrandsList img={"/brandsLogo/logo 03.svg"} />
          <BrandsList img={"/brandsLogo/logo 04.svg"} />
          <BrandsList img={"/brandsLogo/logo 05.svg"} />
          <BrandsList img={"/brandsLogo/logo 6.svg"} />
        </section>

        <NewProductsSlider />

        <div className="flex flex-col gap-12">
          <h1 className="sec-font min-[100px]:text-4xl md:text-5xl font-semibold text-black leading-10">
            Shop Collection
          </h1>

          <div className="grid min-[900px]:grid-cols-2 100px:grid-cols-1  gap-2">
            <CollecItem
              link="/sortpro/headphones"
              img={"/collec/headphone.svg"}
              title={"HeadPhones"}
              className="min-[900px]:h-[646px] min-[500px]:h-[223px] min-[100px]:h-[319px] min-[100px]:col-span-1 min-[900px]:row-span-2"
            />

            <CollecItem
              className="md:h-[319px]"
              link="/sortpro/earbuds"
              img={"/collec/earbuds.svg"}
              title={"Earbuds"}
            />
            <CollecItem
              className="md:h-[319px]"
              link="/sortpro/accessories"
              img={"/collec/accessories.svg"}
              title={"Accessories"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <h1 className="sec-font w-fill min-[100px]:text-4xl md:text-5xl font-semibold text-black leading-10">
            Best Seller
          </h1>

          <section className="grid grid-cols-4 justify-items-center gap-6 ">
            {DataProduct.map((items: TProduct) => {
              return (
                items.pos == "HOT" && (
                  <CartProduct
                    className="lg:col-span-1 md:col-span-2 col-span-full"
                    id={items.id}
                    img={items.img}
                    name={items.name}
                    cato={items.cato}
                    price={items.price}
                    pos={items.pos}
                  />
                )
              );
            })}
          </section>
        </div>
      </div>

      <div className=" mt-[6.25rem] mb-10 flex flex-col gap-10 ">
        <div className="w-full  md:items-center md:justify-normal min-[100px]:items-center min-[100px]:justify-center  h-[532px] flex gap-[4.5rem]  sell-banner ">
          <picture className="md:inline-block min-[100px]:hidden h-[532px] w-1/2">
            <img
              className="w-full object-cover h-full"
              src="/banners/counterSeler.svg"
              alt=""
            />
          </picture>

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 leading-4 ">
              <p className="text-[var(--color-mark-baner)] m-0 font-bold uppercase thrid-font">
                PROMOTION
              </p>
              <h1 className="sec-font text-4xl leading-10 font-semibold">
                Hurry up! 40% OFF
              </h1>
              <p className="third-font text-xl leading-8">
                Thousands of high tech are waiting for you
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="third-font text-base font-normal leading-7 text-[var(--neutral-07)]">
                Offer expires in:
              </p>
              <section className="flex gap-4 items-center">
                <TimerItems desc={"Days"} id={"d"} />
                <TimerItems desc={"Hours"} id={"h"} />
                <TimerItems desc={"Minutes"} id={"m"} />
                <TimerItems desc={"Seconds"} id={"s"} />
              </section>
              <MainButton className="px-10 py-2 w-1/2" value={"Shop Now"} />
            </div>
          </section>
        </div>

        <section className="grid min-[1000px]:grid-cols-4 md:grid-cols-3 min-[100px]:grid-cols-1 sm:grid-cols-2 w-[84%] mx-auto gap-6">
          <DeliveryItems
            img={"/delivery/fastdelivery.svg"}
            title={"Free Shipping"}
            desc={"Order above $200"}
            className="md:col-span-2 min-[100px]:col-span-1 min-[1000px]:col-span-1"
          />
          <DeliveryItems
            img={"/delivery/money.svg"}
            title={"Money-back"}
            desc={"30 days guarantee"}
          />
          <DeliveryItems
            img={"/delivery/call.svg"}
            title={"24/7 Support"}
            desc={"Phone and Email support"}
            className=""
          />
          <DeliveryItems
            img={"/delivery/lock 01.svg"}
            title={"Secure Payments"}
            desc={"Secured by Stripe"}
            className="md:col-span-2 min-[100px]:col-span-1 min-[1000px]:col-span-1"
          />
        </section>
      </div>

      <div className=" flex flex-col gap-10 mt-10">
        <section className="flex items-center flex-col gap-4">
          <p className="uppercase third-font font-bold text-base leading-4 text-[var(--neutral-04)]">
            newsfeed
          </p>
          <h1 className="sec-font font-semibold text-[2.5rem]">Instagram</h1>
          <p className="text-xl leading-8 third-font">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-[var(--neutral-04)] sec-font text-xl leading-7">
            @3legant_official
          </p>
        </section>
        <div className="grid min-[1000px]:grid-cols-4 sm:grid-cols-2 min-[100px]:grid-cols-1 gap-6 w-[84%] mx-auto">
          <picture className="">
            <img className="w-full  h-full" src="/contact/Image.svg" alt="" />
          </picture>
          <picture className="">
            <img className="w-full  h-full" src="/contact/Image1.svg" alt="" />
          </picture>
          <picture className="">
            <img className="w-full  h-full" src="/contact/Image2.svg" alt="" />
          </picture>
          <picture className="">
            <img className="w-full h-full " src="/contact/Image3.svg" alt="" />
          </picture>
        </div>
      </div>
    </main>
  );
}
