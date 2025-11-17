import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";

const formSchema = y.object({
  email: y.string().email("Email inválido.").required("Email é obrigatório"),
  password: y
    .string()
    .required("Senha é obrigatório")
    .min(8, "Senha precisa ter pelo menos 8 caracteres."),
});

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

export type FormSchemaType = y.InferType<typeof formSchema>;
export type FormRegisterSchemaType = y.InferType<typeof formRegisterSchema>;

const useLogin = ({ login = true }: { login: boolean }) => {
  if (login) {
    return useForm<FormSchemaType>({
      resolver: yupResolver(formSchema),
    });
  }

  return useForm<FormRegisterSchemaType>({
    resolver: yupResolver(formRegisterSchema),
  });
};

export default useLogin;
