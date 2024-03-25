import { ReactNode } from "react";

const LayoutUserAccount = ({
  children,
  dashboard,
}: {
  children: ReactNode;
  dashboard: ReactNode;
}) => {
  return (
    <>
      {dashboard}
      {children}
    </>
  );
};

export default LayoutUserAccount;
