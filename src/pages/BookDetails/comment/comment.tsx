import type { Comment } from "@/@types/comment";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth";
import useCommentDelete from "@/hooks/comment/delete";
import { Rating } from "@mui/material";
import { Pen, Trash2, UserRound } from "lucide-react";
import { useContext } from "react";

export interface BookCommentProps {
  comment: Comment;
}

const BookComment = ({ comment }: BookCommentProps) => {
  const context = useContext(AuthContext);
  const user = context?.user;

  const { mutate } = useCommentDelete();

  const handleDelete = (id: string) => {
    if (!id) {
      return;
    }

    mutate(id);
  };

  return (
    <div className="bg-white/30 rounded-2xl shadow-lg shadow-black/5 p-4 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-zinc-200 p-2 rounded-full w-fit">
            <UserRound />
          </div>
          <div>
            <p className="font-semibold font-primary">{comment.userName}</p>
            <p className="text-sm font-semibold text-zinc-500 ">
              {new Date(comment.createdAt).toLocaleDateString("pt-BR", {
                dateStyle: "medium",
                timeZone: "UTC",
              })}
            </p>
          </div>
        </div>

        <ShowComponent when={user?.id === comment.userId}>
          <div className="flex gap-2">
            <Button
              variant={"outline"}
              className="cursor-pointer bg-white/30 hover:bg-rose-500 hover:text-white hover:scale-105 transition-all duration-250"
            >
              <Pen strokeWidth={3} />
            </Button>

            <Button
              variant={"outline"}
              className="cursor-pointer bg-white/30 hover:bg-rose-500 hover:text-white hover:scale-105 transition-all duration-250"
              onClick={() => handleDelete(comment.id)}
            >
              <Trash2 strokeWidth={3} />
            </Button>
          </div>
        </ShowComponent>
      </div>
      <Rating
        name="half-rating-read"
        defaultValue={comment.evaluation}
        precision={0.5}
        readOnly
        size="small"
      />
      <p className="font-secondary font-medium">{comment.text}</p>
    </div>
  );
};

export default BookComment;
