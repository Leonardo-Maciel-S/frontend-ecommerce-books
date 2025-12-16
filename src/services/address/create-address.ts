import { api } from "@/lib/axios";
import type { UserAddress, UserAddressBody } from "@/schemas/address";
import type { AxiosError } from "axios";

export async function createAddress(data: UserAddressBody) {
  try {
    const response = await api.post<UserAddress>("/user/address", data, {
      withCredentials: true,
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
