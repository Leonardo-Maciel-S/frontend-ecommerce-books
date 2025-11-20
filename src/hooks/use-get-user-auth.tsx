import { AuthContext } from "@/context/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const useGetUserAuth = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Componente fora de auth provider");
  }

  const isUserLogged = () => {
    if (!context.user) {
      toast.error("Usuário não logado!");
      throw navigate("/");
    }
  };

  return {
    ...context,
    isUserLogged,
    navigate,
  };
};

export default useGetUserAuth;
