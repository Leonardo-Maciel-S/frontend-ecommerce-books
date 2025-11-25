import useGetAllBooks from "@/hooks/books/use-get-all-book";
import library from "../assets/library.jpg";
import BooksList from "../components/books-list";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupInput,
// } from "@/components/ui/input-group";
// import { Search } from "lucide-react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import Loading from "@/components/loading";

const Home = () => {
  const [search, setSearch] = useState("");

  const { data: books, isLoading } = useGetAllBooks(search);

  // const { register, handleSubmit } = useForm<{ search: string }>();

  // const handleSearch = (data: { search: string }) => {
  //   setSearch(data.search);
  // };

  return (
    <div className="space-y-10">
      <img
        src={library}
        alt="ilustração de biblioteca"
        className="object-cover w-full max-h-[800px] rounded-2xl shadow-lg shadow-black/50"
      />

      {/* <form
        onSubmit={handleSubmit(handleSearch)}
        className="max-w-[400px] mx-auto"
      >
        <InputGroup className="border-3 md:text-lg  h-12 rounded-2xl ">
          <InputGroupInput
            {...register("search")}
            className="md:text-xl "
            size={40}
          />

          <InputGroupAddon className="">
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </form> */}

      {isLoading && <Loading />}

      <BooksList books={books} />
    </div>
  );
};

export default Home;
