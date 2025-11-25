export const convertPriceInCentsToReal = (price: number) => {
  return (price / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
