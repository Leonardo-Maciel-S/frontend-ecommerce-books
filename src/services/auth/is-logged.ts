import { api } from "@/lib/axios";

const isLogged = async () => {
  try {
    const res = await api.get("/user/is-logged", { withCredentials: true });

    return res;
  } catch (error) {
    throw error;
  }
};

export default isLogged;
