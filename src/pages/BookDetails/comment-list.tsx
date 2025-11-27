import type { Comment } from "@/@types/comment";
import BookComment from "./comment";

interface CommentListProps {
  bookComments: Comment[];
}

const CommentList = ({ bookComments }: CommentListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {bookComments.map((comment) => (
        <BookComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
