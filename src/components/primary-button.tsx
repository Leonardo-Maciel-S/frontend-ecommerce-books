import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

import { tv } from "tailwind-variants";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
}

const button = tv({
  base: " py-3 px-10 rounded-lg font-bold font-secondary text-lg flex items-center justify-center gap-2 cursor-pointer ease-linear duration-150",
  variants: {
    variant: {
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow shadow-primary/60 disabled:bg-primary/70",
      secondary: "bg-private-secondary text-white",
      outline: "border-2 border-primary/30 text-primary hover:border-primary ",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const PrimaryButton = ({
  children,
  className,
  variant,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      {...props}
      className={cn(button({ variant }), className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
