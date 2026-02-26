import type { CommentBody } from "@/@types/comment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useEditComment from "@/hooks/comment/edit-comment";
import { queryClient } from "@/main";
import { commentFormSchema, type CommentSchema } from "@/schemas/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@mui/material";
import { useState, type Dispatch } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface AddCommentProps {
  commentId: string;
  bookId?: string;
  userId?: string;
  username?: string;
  commentText: string;
  evaluation: number;
  setEditComment: Dispatch<boolean>;
}

const EditComment = ({
  commentId,
  bookId,
  userId,
  username,
  commentText,
  evaluation,
  setEditComment,
}: AddCommentProps) => {
  const [rate, setRate] = useState<null | number>(evaluation);
  const [rateError, setRateError] = useState("");

  const { mutate, isPending } = useEditComment();

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

    mutate(
      { id: commentId, data: commentBody },
      {
        onSuccess: () => {
          toast.success("Comentário editado com sucesso!");
          setRate(null);
          setRateError("");
          setEditComment(false);
          reset();

          queryClient.invalidateQueries({
            queryKey: ["all-comment", bookId],
            refetchType: "active",
          });
        },

        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="bg-white/30 rounded-2xl shadow-lg shadow-black/5 space-y-2 "
    >
      <div className="flex gap-2  md:items-center flex-wrap">
        <Rating
          name="half-rating"
          defaultValue={rate ?? 0}
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

      <Label className="flex gap-4 flex-wrap pb-4 ">
        <div className="flex-1 relative">
          <Input
            {...register("text")}
            placeholder="Descreva sua experiência"
            className="font-secondary  md:text-base font-semibold px-3 py-6 min-w-60"
            defaultValue={commentText}
          />

          {errors.text?.message && (
            <p className="text-base absolute font-semibold text-red-500 mt-1">
              {errors.text?.message}
            </p>
          )}
        </div>
        <Button
          disabled={isPending}
          className="flex-1 h-14 font-bold text-lg px-10 cursor-pointer hover:bg-rose-700 sm:max-w-1/4"
        >
          {isPending ? "Carregando" : "Enviar"}
        </Button>
      </Label>
    </form>
  );
};

export default EditComment;
