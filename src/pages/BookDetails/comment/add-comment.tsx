import type { CommentBody } from "@/@types/comment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateComment from "@/hooks/comment/create";
import { commentFormSchema, type CommentSchema } from "@/schemas/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface AddCommentProps {
  bookId?: string;
  userId?: string;
  username?: string;
}

const AddComment = ({ bookId, userId, username }: AddCommentProps) => {
  const [rate, setRate] = useState<null | number>(null);
  const [rateError, setRateError] = useState("");

  const { mutate, isPending } = useCreateComment();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentSchema>({
    resolver: yupResolver(commentFormSchema),
  });

  const handleForm = (data: CommentSchema) => {
    if (rate === null) {
      setRateError("Por gentileza, avalie o produto.");
      return;
    }

    if (!bookId || !userId || !username) {
      return;
    }

    const commentBody: CommentBody = {
      bookId,
      userName: username,
      evaluation: rate,
      text: data.text,
    };

    mutate(commentBody, {
      onSuccess: () => {
        toast.success("Comentário adicionado com sucesso!");
        setRate(null);
        setRateError("");
        reset();
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="bg-white/30 rounded-2xl shadow-lg shadow-black/5 p-4 space-y-2 "
    >
      <div className="flex gap-2 items-center">
        <h2 className="text-lg md:text-xl font-secondary font-semibold">
          Qual nota você daria para esse livro?
        </h2>

        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          value={rate}
          onChange={(_, newValue) => {
            setRate(newValue);
            setRateError("");
          }}
        />

        {rateError && (
          <p className="text-base font-semibold text-red-500 mt-1">
            {rateError}
          </p>
        )}
      </div>

      <Label className="flex gap-4 flex-wrap pb-4">
        <div className="flex-1 relative">
          <Input
            {...register("text")}
            placeholder="Descreva sua experiência"
            className="font-secondary  md:text-lg font-semibold px-3 py-6"
          />

          {errors.text?.message && (
            <p className="text-base absolute font-semibold text-red-500 mt-1">
              {errors.text?.message}
            </p>
          )}
        </div>
        <Button
          disabled={isPending}
          className="h-14 font-bold text-lg px-10 cursor-pointer hover:bg-rose-700"
        >
          {isPending ? "Carregando" : "Enviar"}
        </Button>
      </Label>
    </form>
  );
};

export default AddComment;
