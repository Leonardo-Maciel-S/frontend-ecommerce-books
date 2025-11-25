import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth";

import { toast } from "react-toastify";
import useGetUserAuth from "./use-get-user-auth";
import { useNavigate } from "react-router";

const formSchema = y.object({
  email: y.string().email("Email inválido.").required("Email é obrigatório"),
  password: y
    .string()
    .required("Senha é obrigatório")
    .min(8, "Senha precisa ter pelo menos 8 caracteres."),
});

export type FormSchemaType = y.InferType<typeof formSchema>;

const useLogin = () => {
  const { setUserAuth } = useGetUserAuth();

  const navigate = useNavigate();

  const form = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: FormSchemaType) => {
      try {
        const response = await authService.login(data);

        setUserAuth(response.user);
        toast.success(response.message);
        navigate("/");
        return response.user;
      } catch (error) {
        toast.error((error as Error).message || "Erro inesperado");
        return null;
      }
    },
  });

  const submitLogin = (data: FormSchemaType) => {
    mutate(data);
  };

  return {
    ...form,
    submitLogin,
    isPending,
  };
};

export default useLogin;
