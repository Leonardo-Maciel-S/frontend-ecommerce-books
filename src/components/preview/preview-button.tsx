import { type HtmlHTMLAttributes } from "react";

const PreviewButton = ({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="group cursor-pointer border border-private-secondary relative  h-14 transition-all duration-300 overflow-hidden rounded-xl z-10"
      {...props}
    >
      <div className="group-hover:translate-x-0 transition-all duration-300 rounded-lg bg-private-secondary w-full h-14 -z-10 -translate-x-full absolute top-0" />

      <span className="group-hover:text-white transition-all duration-300 z-20 font-semibold">
        {children}
      </span>
    </button>
  );
};

export default PreviewButton;
