import { authService } from "@/services/auth";
import type { AxiosError } from "axios";
import useGetUserAuth from "./use-get-user-auth";

const useCheckIsLogged = async () => {
  const { removeUserAuth } = useGetUserAuth();

  try {
    await authService.isLogged();
  } catch (e) {
    if ((e as AxiosError).status === 401) {
      removeUserAuth();
    }
  }
};

export default useCheckIsLogged;
