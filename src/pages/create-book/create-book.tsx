import ErrorMessage from "@/components/error-message";
import ShowComponent from "@/components/show-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateBook = () => {
  return (
    <div className="h-full py-10 flex">
      <form className="min-w-[300px] w-1/3   mx-auto p-5 rounded-2xl shadow-lg shadow-zinc-500/50 space-y-2">
        <h2 className="text-xl font-semibold font-primary text-center">
          Livro
        </h2>

        <div className="space-y-3">
          <div className="flex flex-col gap-0  ">
            <Input
              type="text"
              className="font-secondary md:text-md font-semibold"
              placeholder="Título"
            />

            <ShowComponent when={false}>
              <ErrorMessage>teste</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Input
              type="text"
              className="font-secondary md:text-md font-semibold"
              placeholder="Autor"
            />

            <ShowComponent when={false}>
              <ErrorMessage>teste</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Textarea
              className="font-secondary h-28 md:text-md font-semibold resize-none"
              placeholder="Sinopse"
            />

            <ShowComponent when={false}>
              <ErrorMessage>teste</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Input
              type="number"
              className="font-secondary md:text-md font-semibold"
              placeholder="Preço"
            />

            <ShowComponent when={false}>
              <ErrorMessage>teste</ErrorMessage>
            </ShowComponent>
          </div>

          <div className="flex flex-col gap-0  ">
            <Input
              type="text"
              className="font-secondary md:text-md font-semibold"
              placeholder="URL da capa"
            />

            <ShowComponent when={false}>
              <ErrorMessage>teste</ErrorMessage>
            </ShowComponent>
          </div>

          <Button className="text-lg py-5 font-semibold w-full cursor-pointer hover:bg-red">
            Criar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
