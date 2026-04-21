import { Button } from "@/components/ui/button";
import SignIn from "./component/sign-in";
import { useState } from "react";
import ShowComponent from "@/components/show-component";
import Register from "./component/register";
import { BookOpenText } from "lucide-react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => setSignIn(!signIn);

  return (
    <div className="w-full h-max flex flex-col justify-start items-center py-5 pb-10 ">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-primary p-4 rounded-lg">
          <BookOpenText color="white" className="size-6 md:size-10" />
        </div>

        <h2 className="font-bold md:text-xl">BookStore</h2>
      </div>

      <div className="flex flex-col gap-2 md:w-/3 z-10">
        <Button
          variant="outline"
          className="w-min self-end cursor-pointer z-20 bg-white hover:bg-primary/90 hover:text-white"
          onClick={toggleSignIn}
        >
          {signIn ? "Cadastrar" : "Logar"}
        </Button>

        <ShowComponent when={signIn}>
          <SignIn />
        </ShowComponent>

        <ShowComponent when={!signIn}>
          <Register setSignIn={setSignIn} />
        </ShowComponent>
      </div>
    </div>
  );
};

export default Login;
