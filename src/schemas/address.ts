import * as yup from "yup";

export const userAddressSchema = yup.object({
  id: yup.string(),
  userId: yup.string(),
  number: yup.string().required("Número é obrigatório"),
  street: yup.string().required("Logradouro é obrigatório."),
  complement: yup.string(),
  neighborhood: yup.string().required("Bairro é obrigatório."),
  city: yup.string().required("Cidade é obrigatório."),
  state: yup.string().required("Estado é obrigatório."),
  zipCode: yup.string().required("Cep é obrigatório.").min(8, "CEP inválido"),
  phone: yup
    .string()
    .required("Telefone é obrigatório.")
    .min(11, "Telefone incompleto"),

  recipientName: yup.string().required("Nome de quem receberá é obrigatório."),
  cpfOrCnpj: yup
    .string()
    .required("CPF é obrigatório.")
    .min(11, "CPF incompleto"),
});

export type UserAddress = yup.InferType<typeof userAddressSchema>;
export type UserAddressBody = Omit<UserAddress, "id" | "userId">;
