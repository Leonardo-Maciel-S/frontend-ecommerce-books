import { AuthContext } from "@/context/auth";
import { useContext } from "react";

const useGetUserAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Componente fora de auth provider");
  }

  return {
    ...context,
  };
};

export default useGetUserAuth;
