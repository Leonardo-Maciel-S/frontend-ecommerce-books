import { bookService } from "@/services/book";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import useGetUserAuth from "./use-get-user-auth";

const createBookSchema = yup.object({
  title: yup
    .string()
    .min(4, "Título precisa ter pelo menos 4 caracteres")
    .required("Título é obrigatório"),
  author: yup
    .string()
    .min(2, "Autor precisa ter pelo menos 2 caracteres")
    .required("Autor é obrigatório"),
  synopsis: yup.string().required("Sinopse é obrigatório"),
  priceInCents: yup.number().typeError("Preço é obrigatório").required(),
  coverImg: yup.string().required("Imagem é obrigatório"),
});

export type CreateBookFormType = yup.InferType<typeof createBookSchema>;

const useCreateBook = () => {
  const { isUserLogged } = useGetUserAuth();

  const form = useForm<CreateBookFormType>({
    resolver: yupResolver(createBookSchema),
  });

  const mutation = useMutation({
    mutationKey: ["create-book"],
    mutationFn: async (data: CreateBookFormType) => {
      isUserLogged();

      try {
        const book = await bookService.create(data);

        return book;
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    onSuccess: () => {
      toast.success("Livro criado com sucesso.");

      form.reset();
    },
  });

  const createBook = (data: CreateBookFormType) => {
    mutation.mutate({ ...data, priceInCents: data.priceInCents * 100 });
  };

  return {
    ...form,
    ...mutation,
    createBook,
  };
};

export default useCreateBook;
