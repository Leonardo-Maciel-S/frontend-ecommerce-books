import UserSideBar from "@/components/user-side-bar";
import { Outlet } from "react-router";

const ProfilePage = () => {
  return (
    <div className="flex gap-2">
      <UserSideBar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
