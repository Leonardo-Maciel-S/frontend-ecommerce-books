import create from "./create";
import deleteBook from "./delete";
import edit from "./edit";
import getAll from "./get-all";
import getById from "./get-by-id";

export const bookService = {
  create,
  getAll,
  getById,
  deleteBook,
  edit,
};
