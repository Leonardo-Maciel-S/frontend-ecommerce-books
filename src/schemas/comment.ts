import * as yup from "yup";

export const commentFormSchema = yup.object({
  text: yup.string().required("Comentário é obrigatório"),
});

export type CommentSchema = yup.InferType<typeof commentFormSchema>;
