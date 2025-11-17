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

export type FormSchemaType = y.InferType<typeof formSchema>;

const useLogin = () => {
  const form = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
  });

  const submitLogin = (data: FormSchemaType) => {
    console.log(data);
  };

  return {
    ...form,
    submitLogin,
  };
};

export default useLogin;
