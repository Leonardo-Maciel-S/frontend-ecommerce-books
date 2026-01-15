import { createAddress } from "./create-address";
import { editAddress } from "./edit-address";
import { getAddressById } from "./get-address-by-id";
import { getAllAddress } from "./get-all-address";

export const addressService = {
  createAddress,
  getAllAddress,
  getAddressById,
  editAddress,
};
