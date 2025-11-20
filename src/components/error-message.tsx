import type { ReactNode } from "react";

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-sm pl-2 mt-1 text-red-500 font-semibold">{children}</p>
  );
};

export default ErrorMessage;
