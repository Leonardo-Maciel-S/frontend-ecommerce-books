import { authService } from "@/services/auth";
import type { AxiosError } from "axios";
import useGetUserAuth from "./use-get-user-auth";
import { useQuery } from "@tanstack/react-query";

const useCheckIsLogged = async () => {
  const { removeUserAuth } = useGetUserAuth();

  useQuery({
    queryKey: ["check-logged"],
    queryFn: async () => {
      try {
        await authService.isLogged();
      } catch (e) {
        if ((e as AxiosError).status === 401) {
          removeUserAuth();
        }
      }

      return null;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useCheckIsLogged;
