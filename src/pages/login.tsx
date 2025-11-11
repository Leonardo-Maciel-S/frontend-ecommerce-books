import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import libraryBg from "./../assets/login.svg";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full  ">
      <img
        src={libraryBg}
        alt=""
        className="z-0 w-full object-cover blur-[2.5px]"
      />
      <div className="w-full h-full  absolute top-0  left-0 flex">
        <form
          action=""
          className="flex flex-col gap-2 mx-auto z-20 bg-white rounded-xl py-5 px-6 my-auto shadow-xl/50 min-w-[300px] w-1/3 "
        >
          <h2 className="text-center font-semibold font-primary  text-2xl leading-normal">
            Login
          </h2>
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex flex-col gap-2  ">
              <Label className="font-secondary text-lg">Email:</Label>
              <Input
                type="text"
                className="font-secondary md:text-lg"
                placeholder="email@email.com"
              />
            </div>

            <div className="flex flex-col gap-2 font-secondary">
              <Label className=" font-secondary text-lg">Senha:</Label>
              <InputGroup>
                <InputGroupInput
                  type={showPassword ? "text" : "password"}
                  className="font-secondary md:text-lg"
                  placeholder="digite sua senha."
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          <Button className="cursor-pointer md:text-lg p-6">Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
