import type { Book } from "../@types/books";
import BookPreview from "./book-preview";

const books: Book[] = [
  {
    id: "191929f3-5ab3-4eac-8e16-cfe560512223",
    title: "Primeiros passos com a linguagem Rust",
    author: "José Augusto N. G. Manzano",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id rhoncus augue lorem eget elit. Ut sollicitudin sodales purus.",
    priceInCents: 6900,
    coverImg: "https://s3.novatec.com.br/capas/9788575226834.jpg",
    evaluation: 4,
    userId: "c98075dd-b09a-4c12-ba97-34aa67e9ebc6",
  },
  {
    id: "036bdb8d-8784-4fad-9d61-1efb49cb1cf3",
    title: "Programação em Baixo Nível",
    author: "Igor Zhirkov",
    synopsis:
      "Phasellus libero felis, blandit nec, commodo ut, imperdiet ut, nibh. Suspendisse potenti. Donec ullamcorper cursus dolor. Duis vitae ipsum. Maecenas dapibus hendrerit diam. Morbi varius, massa id pretium accumsan, nunc lorem congue libero, ut euismod metus libero id nulla.",
    priceInCents: 12000,
    coverImg: "https://s3.novatec.com.br/capas/9788575226674.jpg",
    evaluation: 3,
    userId: "c98075dd-b09a-4c12-ba97-34aa67e9ebc6",
  },
  {
    id: "4c32abac-500a-4866-af6f-7d7273cde3fe",
    title: "Lógica de Programação e Algoritmos com JavaScript",
    author: "Edécio Fernando Iepsen",
    synopsis:
      "Duis cursus, dui non dictum tincidunt, wisi ipsum mollis wisi, nec ornare velit ipsum eget enim. In sed felis. Phasellus condimentum sodales nulla. Etiam orci leo, rutrum malesuada, congue vel, fringilla vitae, lorem. Pellentesque ligula.",
    priceInCents: 6900,
    coverImg: "https://s3.novatec.com.br/capas/9788575226568.jpg",
    evaluation: 5,
    userId: "c98075dd-b09a-4c12-ba97-34aa67e9ebc6",
  },
  {
    id: "ef67debf-b63f-4b61-972f-f8ac9411dce7",
    title: "PHP para quem conhece PHP - 5ª Edição",
    author: "Juliano Niederauer",
    synopsis:
      "Cras gravida. Mauris consequat aliquam leo. Aenean non tortor id metus aliquet consectetuer. Quisque sodales lectus ac orci. Donec eleifend fringilla mi. Vivamus vel massa. Aenean interdum pellentesque sem. Nulla pellentesque felis et tortor. Duis cursus, dui non dictum tincidunt, wisi ipsum mollis wisi, nec ornare velit ipsum eget enim. In sed felis. Phasellus condimentum sodales nulla. Etiam orci leo, rutrum malesuada, congue vel, fringilla vitae, lorem. Pellentesque ligula.",
    priceInCents: 9900,
    coverImg: "https://s3.novatec.com.br/capas/9788575225905.jpg",
    evaluation: 2,
    userId: "c98075dd-b09a-4c12-ba97-34aa67e9ebc6",
  },
];

const BooksList = () => {
  return (
    <div className="flex gap-10 flex-wrap justify-start py-4 px-5">
      {books.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
