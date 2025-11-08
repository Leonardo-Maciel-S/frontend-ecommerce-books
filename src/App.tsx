import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";

function App() {
  return (
    <>
      <HomeBar />

      <Outlet />
    </>
  );
}

export default App;
