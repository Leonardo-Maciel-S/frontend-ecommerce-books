export interface Comment {
  id: string;
  userName: string;
  evaluation: number;
  text: string;
  userId: string;
  bookId: string;
  createdAt: Date;
}

export type CommentBody = Omit<Comment, "id" | "userId" | "createdAt">;
