import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import useLogin from "@/hooks/use-login";

import { Label } from "@radix-ui/react-label";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    submitLogin,
    isPending,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(submitLogin)}
      className="flex flex-col gap-2 z-20 bg-white rounded-xl py-5 px-6 shadow-xl/50 min-w-[270px] md:w-[400px]"
    >
      <h2 className="text-center font-semibold font-primary  text-2xl leading-normal">
        Login
      </h2>
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-2  ">
          <Label className="font-secondary text-md font-semibold">Email:</Label>
          <Input
            {...register("email")}
            type="text"
            className="font-secondary md:text-md font-semibold"
            placeholder="email@email.com"
          />

          <ShowComponent when={errors.email !== undefined}>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </ShowComponent>
        </div>

        <div className="flex flex-col gap-2 font-secondary">
          <Label className=" font-secondary text-md font-semibold">
            Senha:
          </Label>
          <InputGroup>
            <InputGroupInput
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="font-secondary md:text-md font-semibold"
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

          <ShowComponent when={errors.password !== undefined}>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </ShowComponent>
        </div>
      </div>

      <Button
        disabled={isPending}
        className="cursor-pointer md:text-md font-semibold p-6"
      >
        {isPending ? "Carregando" : "Entrar"}
      </Button>
    </form>
  );
};

export default SignIn;
