import { api } from "@/lib/axios";

export const logout = async () => {
  try {
    await api.post("/user/logout", {}, { withCredentials: true });
  } catch (error) {
    console.log(error);
  }
};
