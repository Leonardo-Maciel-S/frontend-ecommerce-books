import BookComment from "./comment";
import ShowComponent from "@/components/show-component";
import useGetAllCommentByBookId from "@/hooks/comment/get-all-by-book-id";

interface CommentListProps {
  id: string;
}

const CommentList = ({ id }: CommentListProps) => {
  const { data } = useGetAllCommentByBookId(id);

  const isEmptyList = data?.comments.length === 0;

  return (
    <div className="flex flex-col gap-4">
      <ShowComponent when={isEmptyList}>
        <p className="text-center text-lg p-4 font-bold italic">
          Nenhum comentário cadastrado.
        </p>
      </ShowComponent>

      <ShowComponent when={!isEmptyList}>
        {data?.comments?.map((comment) => (
          <BookComment key={comment.id} comment={comment} />
        ))}
      </ShowComponent>
    </div>
  );
};

export default CommentList;
