// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { ReactNode } from "react";

// const SliderShow = (props: { children: ReactNode }) => {
//   return (
//     <Swiper
//       className="w-full"
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       {props.children}
//     </Swiper>
//   );
// };

// export default SliderShow;

import { Swiper } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import { ReactNode } from "react";
import React from "react";

type MySliderProps = {
  children?: ReactNode[];
  anotherProp: number;
};

export const Slider: React.FC<MySliderProps> = ({ children, anotherProp }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
      spaceBetween={50}
      slidesPerView={anotherProp}
      loop={true}
      autoplay={{ delay: 2500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};
