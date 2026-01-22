import type { Comment } from "@/@types/comment";
import { Rating } from "@mui/material";
import { UserRound } from "lucide-react";

export interface BookCommentProps {
  comment: Comment;
}

const BookComment = ({ comment }: BookCommentProps) => {
  return (
    <div className="bg-white/30 rounded-2xl shadow-lg shadow-black/5 p-4 space-y-2">
      <div className="flex gap-2 items-center">
        <div className="bg-zinc-200 p-2 rounded-full w-fit">
          <UserRound />
        </div>
        <p className="font-semibold font-primary">{comment.userName}</p>
      </div>
      <Rating
        name="half-rating-read"
        defaultValue={comment.evaluation}
        precision={0.5}
        readOnly
        size="small"
      />
      <p className="font-secondary font-medium">{comment.message}</p>
    </div>
  );
};

export default BookComment;
