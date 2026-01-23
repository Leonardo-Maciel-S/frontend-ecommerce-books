import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { commentFormSchema, type CommentSchema } from "@/schemas/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddCommentProps {
  bookId?: string;
  userId?: string;
}

const AddComment = ({ bookId, userId }: AddCommentProps) => {
  const [rate, setRate] = useState<null | number>(null);
  const [rateError, setRateError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentSchema>({
    resolver: yupResolver(commentFormSchema),
  });

  const handleForm = (data: CommentSchema) => {
    if (rate === null) {
      setRateError("Por gentileza, avalie o produto.");
      return;
    }

    if (bookId || userId) {
      return;
    }

    console.log({
      ...data,
      bookId,
      userId,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="bg-white/30 rounded-2xl shadow-lg shadow-black/5 p-4 space-y-2 "
    >
      <h2 className="text-lg md:text-xl font-secondary font-semibold">
        O que você achou desse livro?
      </h2>

      <div className="flex gap-2 items-center">
        <p className="md:text-lg font-secondary font-semibold">Avalie</p>
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
        <Button className="h-14 font-bold text-lg px-10 cursor-pointer hover:bg-rose-700">
          Enviar
        </Button>
      </Label>
    </form>
  );
};

export default AddComment;
