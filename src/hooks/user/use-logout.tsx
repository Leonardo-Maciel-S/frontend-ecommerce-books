import { authService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetUserAuth from "./use-get-user-auth";

import { queryClient } from "@/main";

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
      queryClient.invalidateQueries({
        queryKey: ["all-books-by-id"],
        refetchType: "all",
      });

      queryClient.removeQueries({
        queryKey: ["all-books-by-id"],
      });

      toast.success('Deslogado com sucesso"');
      removeUserAuth();
      navigate("/");
    },
  });
};
