export interface Address {
  id: string;
  userId: string;
  number: number | null;
  street: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  recipientName: string;
  cpfOrCnpj: string;
}
