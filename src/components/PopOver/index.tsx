"use client";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { ReactNode, useState } from "react";

const PopoverList = (props: {
  value: string;
  children: ReactNode;
  className?: string;
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button
          className="font-semibold  outline-none text-sm p-1 flex items-center capitalize gap-2 primary-font"
          variant="text"
        >
          {props.value}
          <picture className="inline-block ">
            <img src="/headers/chevron-down.svg" alt="" />
          </picture>
        </Button>
      </PopoverHandler>
      <PopoverContent
        {...triggers}
        className={`z-50 bg-[var(--bg-items-pop-over)] outline-none ${props.className} min-w-[10rem] `}
      >
        <div className="flex  flex-col gap-1 w-full   rounded-lg ">
          {props.children}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverList;
