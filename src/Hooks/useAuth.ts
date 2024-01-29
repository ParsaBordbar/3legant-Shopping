"use client";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const nav = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!Cookies.get("token")) {
      nav.push("/signup");
    } else if (path === "/product/main") {
      nav.push("/");
    }
  }, []);

  return;
};

export default useAuth;
