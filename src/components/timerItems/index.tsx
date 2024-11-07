"use client";
import { useState, useEffect } from "react";

type TTimer = {
  desc: string;
  id: string;
};

const TimerItems = (props: TTimer) => {
  const [timer, setTimer] = useState(0);

  const getTimer = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();
    if (props.id === "d") {
      setTimer(Math.floor(time / (1000 * 60 * 60 * 24)));
    } else if (props.id === "h") {
      setTimer(Math.floor((time / (1000 * 60 * 60)) % 24));
    } else if (props.id === "m") {
      setTimer(Math.floor((time / 1000 / 60) % 60));
    } else if (props.id === "s") {
      setTimer(Math.floor((time / 1000) % 60));
    }
  };

  const deadline = "nov, 30, 2024";

  useEffect(() => {
    const interval = setInterval(() => getTimer(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-14 h-20 gap-2 flex-col items-center">
      <h1 className="m-0 h-fit bg-white p-[0.625rem] text-[var(--peimary-color)] sec-font text-4xl">
        {timer < 10 ? "0" + timer : timer}
      </h1>

      <p className="third-font text-xs leading-5 text-[var(--peimary-color)]">
        {props.desc}
      </p>
    </div>
  );
};

export default TimerItems;
