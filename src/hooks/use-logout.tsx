import { authService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetUserAuth from "./use-get-user-auth";

export const useLogout = () => {
  const { removeUserAuth, navigate } = useGetUserAuth();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      try {
        await authService.logout();
      } catch (error) {
        toast.error("Algo deu errado.");
      }
    },
    onSuccess: () => {
      toast.success('Deslogado com sucesso"');
      removeUserAuth();
      navigate("/");
    },
  });
};
