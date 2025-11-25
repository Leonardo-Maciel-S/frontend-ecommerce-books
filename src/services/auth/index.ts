import isLogged from "./is-logged";
import { login } from "./login";
import { logout } from "./logout";
import { register } from "./register";

export const authService = {
  login,
  logout,
  register,
  isLogged,
};
