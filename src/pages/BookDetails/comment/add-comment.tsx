import type { CommentBody } from "@/@types/comment";
import PrimaryButton from "@/components/primary-button";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import useCreateComment from "@/hooks/comment/create";
import { queryClient } from "@/main";
import { commentFormSchema, type CommentSchema } from "@/schemas/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@mui/material";
import { MessageSquareText } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface AddCommentProps {
  bookId?: string;
  userId?: string;
  username?: string;
  handleModal: () => void;
}

const AddComment = ({
  bookId,
  userId,
  username,
  handleModal,
}: AddCommentProps) => {
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

        queryClient.invalidateQueries({
          queryKey: ["all-comment"],
          refetchType: "active",
        });

        handleModal();
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="bg-white rounded-2xl shadow-lg shadow-black/5 p-4 space-y-2 "
    >
      <div className="flex gap-2  md:items-center flex-wrap">
        <h2 className="text-lg font-semibold text-zinc-500">Qual sua nota?</h2>

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

      <Label className="flex gap-4 flex-wrap pb-4 ">
        <div className="flex-1 relative">
          <InputGroup className="h-12 bg-background">
            <InputGroupInput
              {...register("text")}
              type="text"
              className=" md:text-lg placeholder:text-zinc-400 text-zinc-600 font-medium  "
              placeholder="Descreva sua experiência"
              autoFocus
            />
            <InputGroupAddon>
              <MessageSquareText className="text-zinc-400 text-4xl size-5" />
            </InputGroupAddon>
          </InputGroup>

          {errors.text?.message && (
            <p className="text-md absolute font-semibold text-red-500 mt-2 ml-2">
              {errors.text?.message}
            </p>
          )}
        </div>
        <PrimaryButton disabled={isPending} className="w-1/4">
          {isPending ? "Carregando" : "Enviar"}
        </PrimaryButton>
      </Label>
    </form>
  );
};

export default AddComment;
