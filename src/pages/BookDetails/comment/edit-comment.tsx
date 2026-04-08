import type { CommentBody } from "@/@types/comment";
import PrimaryButton from "@/components/primary-button";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import useEditComment from "@/hooks/comment/edit-comment";
import { queryClient } from "@/main";
import { commentFormSchema, type CommentSchema } from "@/schemas/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@mui/material";
import { MessageSquareText } from "lucide-react";
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
      className=" rounded-2xl  space-y-2 "
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
          <InputGroup className="h-12 bg-background flex items-start">
            <InputGroupTextarea
              {...register("text")}
              className=" md:text-lg h-28 placeholder:text-zinc-400 text-zinc-600 font-medium  "
              placeholder="Descreva sua experiência"
              defaultValue={commentText}
              autoFocus
            />
            <InputGroupAddon className="mt-2">
              <MessageSquareText className="text-zinc-400 text-4xl size-5" />
            </InputGroupAddon>
          </InputGroup>

          {errors.text?.message && (
            <p className="text-base absolute font-semibold text-red-500 mt-1">
              {errors.text?.message}
            </p>
          )}
        </div>
        <PrimaryButton disabled={isPending} className="w-full sm:w-1/4">
          {isPending ? "Carregando" : "Enviar"}
        </PrimaryButton>
      </Label>
    </form>
  );
};

export default EditComment;
