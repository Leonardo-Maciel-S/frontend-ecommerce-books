import type { Comment } from "@/@types/comment";
import ShowComponent from "@/components/show-component";
import { AuthContext } from "@/context/auth";
import useCommentDelete from "@/hooks/comment/delete";
import { Box, Modal, Rating, Typography } from "@mui/material";
import { Loader2, Pen, Trash2, UserRound, X } from "lucide-react";
import { useContext, useState } from "react";
import EditComment from "./edit-comment";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import PrimaryButton from "@/components/primary-button";

export interface BookCommentProps {
  comment: Comment;
}

const BookComment = ({ comment }: BookCommentProps) => {
  const context = useContext(AuthContext);
  const user = context?.user;
  const isCommentOwner = user?.id === comment.userId;

  const [editComment, setEditComment] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate, isPending } = useCommentDelete();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = (id: string) => {
    if (!id) {
      return;
    }

    mutate(id);
  };

  const handleEditComment = () => {
    setEditComment(!editComment);
  };

  function tempoRelativo(date: Date): string {
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg shadow-black/5 px-8 py-5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="bg-primary/30 p-2 rounded-full w-fit">
              <UserRound className="text-primary" />
            </div>
            <div>
              <p className="font-bold font-secondary tracking-wide ml-1">
                {comment.userName}
              </p>

              {!editComment && (
                <Rating
                  name="half-rating-read"
                  value={comment.evaluation}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              )}
            </div>
          </div>

          <ShowComponent when={isCommentOwner}>
            <div className="flex gap-2">
              <PrimaryButton
                variant={"outline"}
                onClick={handleEditComment}
                className="px-2 py-2"
              >
                {editComment ? (
                  <X size={20} strokeWidth={2} />
                ) : (
                  <Pen size={20} strokeWidth={2} />
                )}
              </PrimaryButton>

              <PrimaryButton
                variant={"outline"}
                className="px-3 py-2 text-red-500"
                onClick={handleModal}
              >
                <Trash2 size={15} strokeWidth={2} />
              </PrimaryButton>
            </div>
          </ShowComponent>
        </div>

        {editComment ? (
          <EditComment
            commentId={comment.id}
            commentText={comment.text}
            evaluation={comment.evaluation}
            userId={comment.userId}
            bookId={comment.bookId}
            username={comment.userName}
            setEditComment={setEditComment}
          />
        ) : (
          <>
            <p className="font-secondary font-normal tracking-wider italic text-zinc-600">
              "{comment.text}"
            </p>
          </>
        )}

        <p className="text-sm font-normal font-secondary text-zinc-500 italic">
          {tempoRelativo(new Date(comment.createdAt))}
        </p>
      </div>

      <Modal
        className="flex justify-center items-center"
        open={isModalOpen}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-fit py-8 px-10 rounded-lg bg-white flex flex-col gap-6">
          <div>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h1"
              className="text-red-500"
            >
              Excluir comentário
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ fontSize: 18 }}
              className="text-zinc-500"
            >
              Tem certeza? Essa ação não pode ser desfeita
            </Typography>
          </div>

          <PrimaryButton
            onClick={() => handleDelete(comment.id)}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Trash2 strokeWidth={3} />
            )}
          </PrimaryButton>
        </Box>
      </Modal>
    </>
  );
};

export default BookComment;
