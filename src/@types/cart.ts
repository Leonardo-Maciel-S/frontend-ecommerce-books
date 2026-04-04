export interface Cart {
  id: string;
  userId: string;
  userAddressId: string | null;
  createdAt?: Date | undefined;
}
