import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";

function App() {
  return (
    <div className="max-w-screen">
      <div className="max-w-7xl mx-auto px-10 overflow-hidden ">
        <HomeBar />

        <Outlet />
      </div>
    </div>
  );
}

export default App;
