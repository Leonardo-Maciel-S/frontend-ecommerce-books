import { api } from "@/lib/axios";
import type { UserAddress, UserAddressBody } from "@/schemas/address";
import type { AxiosError } from "axios";

interface EditAddressProps {
  body: UserAddressBody;
  id: string;
}

export async function editAddress({ body, id }: EditAddressProps) {
  try {
    const response = await api.patch<UserAddress>(`/user/address/${id}`, body, {
      withCredentials: true,
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
