import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";
import { ToastContainer } from "react-toastify";
import useCheckIsLogged from "./hooks/user/use-check-is-logged";
import { useEffect } from "react";
import useGetAllBooks from "./hooks/books/use-get-all-book";
import { Github } from "lucide-react";

function App() {
  useCheckIsLogged();

  useGetAllBooks();

  useEffect(() => {
    const environment: string = import.meta.env.MODE;

    if (environment === "development") {
      return;
    }

    window.alert(
      'Devido a utilização do render no deploy da api, a mesma fica inativa depois de um tempo sem requisições, por esse motivo a primeira busca dos livros demora um pouco esperando a api subir novamente, após sumir a mensagem de "carregando" fica normal',
    );
  }, []);

  return (
    <>
      <div className="max-w-dvw overflow-hidden min-h-dvh border bg-linear-to-r bg-background">
        <HomeBar />

        <div className="container mx-auto px-10 overflow-hidden ">
          <Outlet />

          <ToastContainer />
        </div>
      </div>

      <footer className="bg-[#0F172A] text-white  p-10">
        <div className="container mx-auto px-10 overflow-hidden flex justify-between ">
          <p>© 2025 BookStore Editions. All rights reserved.</p>

          <p className="flex gap-2">
            Desenvolvido por{" "}
            <a
              href="https://github.com/Leonardo-Maciel-S"
              className="flex gap-2 items-center hover:underline "
              target="_blank"
            >
              <span>@Leonardo-maciel-s</span>
              <Github />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
