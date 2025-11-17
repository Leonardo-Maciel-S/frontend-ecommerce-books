import { Button } from "@/components/ui/button";
import libraryBg from "./../../assets/login.svg";
import SignIn from "./component/sign-in";
import { useState } from "react";
import ShowComponent from "@/components/show-component";
import Register from "./component/register";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => setSignIn(!signIn);

  return (
    <div className="relative w-full h-min py-20 px-5 md:min-h-[600px] ">
      <img
        src={libraryBg}
        alt="imagem de uma biblioteca"
        className="-z-10 w-[200%] object-contain border-4 blur-[2.5px]  absolute top-0 left-0"
      />

      <div className="w-full flex justify-center items-center ">
        <div className="h-min flex flex-col gap-2 md:w-/3">
          <Button
            variant="secondary"
            className="w-min self-end cursor-pointer"
            onClick={toggleSignIn}
          >
            {signIn ? "Register" : "Login"}
          </Button>

          <ShowComponent when={signIn}>
            <SignIn />
          </ShowComponent>

          <ShowComponent when={!signIn}>
            <Register />
          </ShowComponent>
        </div>
      </div>
    </div>
  );
};

export default Login;
