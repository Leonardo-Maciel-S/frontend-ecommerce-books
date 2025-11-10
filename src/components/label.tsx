import type { ReactNode } from "react";

interface LabelProps {
  text: string;
  children: ReactNode;
}

const Label = ({ text, children }: LabelProps) => {
  return (
    <label className="flex flex-col font-secondary">
      <span className="font-semibold">{text}:</span>
      {children}
    </label>
  );
};

export default Label;
