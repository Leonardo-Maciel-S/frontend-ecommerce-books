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

import useLogin, { type FormRegisterSchemaType } from "@/hooks/use-register";

import { Label } from "@radix-ui/react-label";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLogin();

  const submitLogin = (data: FormRegisterSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitLogin)}
      className="flex flex-col gap-2 z-20 bg-white rounded-xl py-5 px-6 shadow-xl/50 min-w-[270px] md:w-[400px]"
    >
      <h2 className="text-center font-semibold font-primary  text-2xl leading-normal">
        Criar conta
      </h2>

      <div className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-2  ">
          <Label className="font-secondary text-md font-semibold">Nome:</Label>
          <Input
            {...register("name")}
            type="text"
            className="font-secondary md:text-md min-w-[100px]"
            placeholder="Digite seu nome"
          />

          <ShowComponent when={errors.email !== undefined}>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </ShowComponent>
        </div>

        <div className="flex flex-col gap-2  ">
          <Label className="font-secondary text-md font-semibold">Email:</Label>
          <Input
            {...register("email")}
            type="text"
            className="font-secondary md:text-md min-w-[100px]"
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
              className="font-secondary md:text-md min-w-[100px]"
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

      <Button className="cursor-pointer md:text-lg p-6">Cadastrar</Button>
    </form>
  );
};

export default Register;
