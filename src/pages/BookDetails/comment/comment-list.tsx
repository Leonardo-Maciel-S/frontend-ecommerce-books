import type { Comment } from "@/@types/comment";
import BookComment from "./comment";
import ShowComponent from "@/components/show-component";

interface CommentListProps {
  bookComments?: Comment[];
}

const CommentList = ({ bookComments }: CommentListProps) => {
  const isEmptyList = bookComments?.length === 0;

  return (
    <div className="flex flex-col gap-4">
      <ShowComponent when={isEmptyList}>
        <p className="text-center text-lg p-4 font-bold italic">
          Nenhum comentário cadastrado.
        </p>
      </ShowComponent>

      <ShowComponent when={!isEmptyList}>
        {bookComments?.map((comment) => (
          <BookComment key={comment.id} comment={comment} />
        ))}
      </ShowComponent>
    </div>
  );
};

export default CommentList;
