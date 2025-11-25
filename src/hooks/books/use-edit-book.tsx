import { bookService } from "@/services/book";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import useGetUserAuth from "../user/use-get-user-auth";
import { queryClient } from "@/main";
import type { Book } from "@/@types/books";
import { useEffect } from "react";

const editBookForm = yup.object({
  id: yup.string().required(),
  title: yup
    .string()
    .min(4, "Título precisa ter pelo menos 4 caracteres")
    .required("Título é obrigatório"),
  author: yup
    .string()
    .min(2, "Autor precisa ter pelo menos 2 caracteres")
    .required("Autor é obrigatório"),
  synopsis: yup.string().required("Sinopse é obrigatório"),
  priceInCents: yup.number().required("Preço é obrigatório"),
  coverImg: yup.string().required("Imagem é obrigatório"),
  evaluation: yup.number().required(),
  userId: yup.string().required(),
});

export type EditBookFormType = yup.InferType<typeof editBookForm>;

const emptyBook: EditBookFormType = {
  id: "",
  title: "",
  author: "",
  synopsis: "",
  priceInCents: 0,
  coverImg: "",
  evaluation: 0,
  userId: "",
};

const useEditBook = (book?: Book) => {
  const { isUserLogged } = useGetUserAuth();

  const form = useForm<EditBookFormType>({
    resolver: yupResolver(editBookForm),
    defaultValues: book || emptyBook,
  });

  const mutation = useMutation({
    mutationKey: ["create-book"],
    mutationFn: async (data: EditBookFormType) => {
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

      queryClient.invalidateQueries({
        queryKey: ["all-books"],
      });
    },
  });

  const editBook = (data: EditBookFormType) => {
    mutation.mutate({ ...data, priceInCents: data.priceInCents * 100 });
  };

  useEffect(() => {
    if (book) {
      form.reset({
        ...book,
        priceInCents: book.priceInCents / 100,
      });
    }
  }, [book]);

  return {
    ...form,
    ...mutation,
    editBook,
  };
};

export default useEditBook;
