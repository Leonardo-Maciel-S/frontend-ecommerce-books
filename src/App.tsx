import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto px-10">
      <HomeBar />

      <Outlet />
    </div>
  );
}

export default App;
