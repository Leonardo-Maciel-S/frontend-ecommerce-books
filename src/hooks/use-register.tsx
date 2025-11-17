import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth";
import useGetUserAuth from "./use-get-user-auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const formRegisterSchema = y.object({
  name: y
    .string()
    .required("Nome é obrigatório")
    .min(2, "Mínimo de 2 caracteres"),
  email: y.string().email("Email inválido.").required("Email é obrigatório"),
  password: y
    .string()
    .required("Senha é obrigatório")
    .min(8, "Senha precisa ter pelo menos 8 caracteres."),
});

export type FormRegisterSchemaType = y.InferType<typeof formRegisterSchema>;

const useRegister = (setSignIn: React.Dispatch<boolean>) => {
  const form = useForm<FormRegisterSchemaType>({
    resolver: yupResolver(formRegisterSchema),
  });

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: FormRegisterSchemaType) => {
      try {
        const response = await authService.register(data);

        toast.success(response.message);

        setSignIn(true);
        return response.user;
      } catch (error) {
        toast.error((error as Error).message || "Erro inesperado");
        return null;
      }
    },
  });

  const submitRegister = (data: FormRegisterSchemaType) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    submitRegister,
    ...mutation,
  };
};

export default useRegister;
