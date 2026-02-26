import { createComment } from "./create";
import { deleteComment } from "./delete";
import { editComment } from "./edit";
import { getAllCommentByBookId } from "./get-all-by-book-id";

export const commentService = {
  createComment,
  getAllCommentByBookId,
  deleteComment,
  editComment,
};
