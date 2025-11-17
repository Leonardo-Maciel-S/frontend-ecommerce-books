import type { ReactNode } from "react";

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm text-red-500 font-semibold">{children}</p>;
};

export default ErrorMessage;
