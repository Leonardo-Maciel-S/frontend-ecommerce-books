import type { User } from "@/@types/user";
import type { FormSchemaType } from "@/hooks/use-login";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

type LoginResponse = { user: User; message: string };

export const login = async (data: FormSchemaType) => {
  if (!data.email || !data.password) {
    throw new Error("Email e senha são obrigatórios");
  }

  try {
    const res = await api.post<LoginResponse>("/user/login", data);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message);
  }
};
