import { api } from "@/lib/axios";
import type { UserAddress } from "@/schemas/address";
import type { AxiosError } from "axios";

export async function getAddressById(id: string) {
  try {
    const response = await api.get<{ addresses: UserAddress[] }>(
      `/user/address/${id}`,
      {
        withCredentials: true,
      }
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
