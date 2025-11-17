import { authService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetUserAuth from "./use-get-user-auth";

export const useLogout = () => {
  const { removeUserAuth } = useGetUserAuth();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      try {
        await authService.logout();
        toast.success('Deslogado com sucesso"');
        removeUserAuth();
      } catch (error) {
        toast.error("Algo deu errado.");
      }
    },
  });
};
