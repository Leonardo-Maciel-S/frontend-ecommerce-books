import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import UnderImplementation from "@/components/under-implementation";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import useLogin from "@/hooks/user/use-login";

import { Label } from "@radix-ui/react-label";
import { Eye, EyeClosed, Loader2, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRecoveryModalOpen, setIsRecoveryModalOpen] = useState(false);

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
      className="flex flex-col gap-2 z-20 bg-white rounded-xl py-5 px-6  min-w-[270px] md:w-[400px] border border-zinc-200"
    >
      <h2 className="text-center font-extrabold text-xl md:text-3xl leading-normal">
        Login
      </h2>

      <div className="flex flex-col gap-4 mb-5  ">
        <div className="flex flex-col gap-2 ">
          <Label className="md:text-lg font-semibold text-zinc-500">
            Email
          </Label>
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
          <div className="flex justify-between">
            <Label className="md:text-lg font-semibold text-zinc-500">
              Senha
            </Label>

            <button
              type="button"
              onClick={() => setIsRecoveryModalOpen(true)}
              className="text-sm text-primary font-medium hover:underline"
            >
              Esqueceu a senha?
            </button>
          </div>
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

      <Button
        disabled={isPending}
        className="cursor-pointer md:text-lg font-semibold p-6 disabled:bg-blue-600"
      >
        {isPending ? <Loader2 className="animate-spin" /> : "Entrar"}
      </Button>

      <UnderImplementation
        isOpen={isRecoveryModalOpen}
        onClose={() => setIsRecoveryModalOpen(false)}
        title="Função em desenvolvimento"
        description="Ainda nao disponibilizamos a recuperação de senha. Em breve essa opção estará ativa."
      />
    </form>
  );
};

export default SignIn;
