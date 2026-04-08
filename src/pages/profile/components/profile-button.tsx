import type { HTMLAttributes } from "react";
import { NavLink } from "react-router";

interface ProfileButtonProps extends HTMLAttributes<HTMLButtonElement> {
  to: string;
  setIsOpen: React.Dispatch<boolean>;
}

const ProfileButton = ({ children, to, setIsOpen }: ProfileButtonProps) => {
  return (
    <NavLink
      to={to}
      onClick={() => setTimeout(() => setIsOpen(false), 150)}
      className={({ isActive }) =>
        `${isActive ? "bg-[#FDF0E7] text-primary" : "text-zinc-600"} text-base tracking-wide group transition-all duration-200 p-3 cursor-pointer hover:bg-[#FDF0E7] hover:text-primary w-full rounded-md font-semibold px-5 flex gap-3`
      }
    >
      {children}
    </NavLink>
  );
};

export default ProfileButton;
