import UserSideBar from "@/components/user-side-bar";
import { useState } from "react";
import { Outlet } from "react-router";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-1 h-screen">
      <UserSideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`w-full overflow-auto ${isOpen && "blur-xs"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
