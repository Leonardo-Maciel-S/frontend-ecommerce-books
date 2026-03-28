import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

import { tv } from "tailwind-variants";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  size?: "default" | "medium" | "sm";
}

const button = tv({
  base: "rounded-lg font-bold font-secondary  flex items-center justify-center gap-2 cursor-pointer ease-linear duration-150 disabled:border-inherit disabled:cursor-default",
  variants: {
    variant: {
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow shadow-primary/60 disabled:bg-primary/70",
      secondary: "bg-private-secondary text-white",
      outline: "border-2 border-primary/30 text-primary hover:border-primary ",
    },
    size: {
      default: "py-3 px-10 text-lg",
      sm: "py-3 px-3 text-sm",
      medium: "py-3 px-5 text-md",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const PrimaryButton = ({
  children,
  className,
  variant,
  disabled,
  size,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      {...props}
      className={cn(button({ variant, size }), className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
