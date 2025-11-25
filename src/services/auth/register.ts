import type { User } from "@/@types/user";
import type { FormRegisterSchemaType } from "@/hooks/user/use-register";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

type LoginResponse = { user: User; message: string };

export const register = async (data: FormRegisterSchemaType) => {
  if (!data.email || !data.password) {
    throw new Error("Email e senha são obrigatórios");
  }

  try {
    const res = await api.post<LoginResponse>("/user/register", data);
    return res.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};
