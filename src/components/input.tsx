import type { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="font-secondary font-semibold outline-none border rounded-md px-2"
    />
  );
};

export default Input;
