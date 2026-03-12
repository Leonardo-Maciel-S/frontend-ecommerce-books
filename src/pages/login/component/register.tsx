import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import useRegister from "@/hooks/user/use-register";

import { Label } from "@radix-ui/react-label";
import { Eye, EyeClosed, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { useState } from "react";

const Register = ({ setSignIn }: { setSignIn: React.Dispatch<boolean> }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    submitRegister,
    isPending,
  } = useRegister(setSignIn);

  return (
    <form
      onSubmit={handleSubmit(submitRegister)}
      className="flex flex-col gap-2 z-20 bg-white rounded-xl py-5 px-6  min-w-[270px] md:w-[400px] border border-zinc-200"
    >
      <h2 className="text-center font-extrabold text-3xl leading-normal">
        Criar conta
      </h2>

      <div className="flex flex-col mb-5 gap-2">
        <div className="flex flex-col gap-1 ">
          <Label className="text-lg font-semibold text-zinc-500">Nome</Label>

          <InputGroup className="h-12 bg-background">
            <InputGroupInput
              {...register("name")}
              type="text"
              className=" md:text-lg placeholder:text-zinc-400 text-zinc-600 font-medium  "
              placeholder="Digite seu nome"
            />
            <InputGroupAddon>
              <User className="text-zinc-400 text-4xl size-5" />
            </InputGroupAddon>
          </InputGroup>
          <ShowComponent when={errors.name !== undefined}>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </ShowComponent>
        </div>

        <div className="flex flex-col gap-1 ">
          <Label className="text-lg font-semibold text-zinc-500">Email</Label>
          <InputGroup className="h-12 bg-background">
            <InputGroupInput
              {...register("email")}
              type="text"
              className=" md:text-lg placeholder:text-zinc-400 text-zinc-600 font-medium  "
              placeholder="email@email.com"
            />
            <InputGroupAddon>
              <Mail className="text-zinc-400 text-4xl size-5" />
            </InputGroupAddon>
          </InputGroup>

          <ShowComponent when={errors.email !== undefined}>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </ShowComponent>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-lg font-semibold text-zinc-500">Senha</Label>
          <InputGroup className="h-12 bg-background">
            <InputGroupAddon>
              <LockKeyhole className="text-zinc-400 text-4xl size-5" />
            </InputGroupAddon>

            <InputGroupInput
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className=" md:text-lg text-zinc-600 font-medium "
              placeholder="●●●●●●●●"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="text-zinc-400 text-4xl size-5" />
                ) : (
                  <EyeClosed className="text-zinc-400 text-4xl size-5" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <ShowComponent when={errors.password !== undefined}>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </ShowComponent>
        </div>
      </div>

      <Button disabled={isPending} className="cursor-pointer md:text-lg p-6">
        {isPending ? <Loader2 className="animate-spin" /> : "Cadastrar"}
      </Button>
    </form>
  );
};

export default Register;
