import type { HTMLAttributes } from "react";

const Button = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="group transition-all duration-200 p-3 cursor-pointer shadow-none hover:shadow-md hover:bg-private-secondary hover:border-transparent shadow-zinc-500 border border-gray-300 w-full rounded-xl "
      {...props}
    >
      <span className="font-semibold text-gray-600 group-hover:text-white  transition-all duration-200">
        {children}
      </span>
    </button>
  );
};

export default Button;
