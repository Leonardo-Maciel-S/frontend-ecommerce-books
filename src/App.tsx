import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-screen min-h-dvh">
      <div className="max-w-7xl mx-auto px-10 overflow-hidden ">
        <HomeBar />

        <Outlet />

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
