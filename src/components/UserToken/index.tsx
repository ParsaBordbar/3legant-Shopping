"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const UserToken = (props: { className: string; mode: string }) => {

  const [hasToken, setHasToken] = useState<string | undefined>('');
  useEffect(() => {
    setHasToken(Cookies.get("token")?.split("")[0]);
  }, []);

  return props.mode == 'ac' ? (
    <div className="flex gap-1 items-center">
      <p
        className={`text-base primary-font ${props.className} uppercase w-fit bg-transparent rounded-full border-2 border-black`}
      >
        {hasToken}
      </p>
      <h1 className="sec-font">{Cookies.get("token")}</h1>
    </div>
  ) : (<p
    className={`text-base primary-font ${props.className} uppercase w-fit bg-transparent rounded-full border-2 border-black`}
  >
    {hasToken}
  </p>)
};

export default UserToken;
