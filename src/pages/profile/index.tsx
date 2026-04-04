import UserSideBar from "@/components/user-side-bar";
import { Outlet } from "react-router";

const ProfilePage = () => {
  return (
    <div className="flex gap-1 h-screen">
      <UserSideBar />

      <div className="w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
