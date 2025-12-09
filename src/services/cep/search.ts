export type CepInfo = {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

const search = async (cep: string) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const cepInfo = await fetch(url).then((data) => data.json());

  if (cepInfo.erro) {
    throw new Error("Cep não encontrado.");
  }

  return cepInfo;
};

export const cepService = {
  search,
};
