import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";
import { ToastContainer } from "react-toastify";
import useCheckIsLogged from "./hooks/user/use-check-is-logged";
import { useEffect } from "react";
import useGetAllBooks from "./hooks/books/use-get-all-book";
import Footer from "./components/Footer";

function App() {
  useCheckIsLogged();

  useGetAllBooks();

  useEffect(() => {
    const environment: string = import.meta.env.MODE;

    if (environment === "development") {
      return;
    }

    window.alert(
      'Devido a utilização do render no deploy da api, a mesma fica inativa depois de um tempo sem requisições, por esse motivo a primeira busca dos livros demora um pouco esperando a api subir novamente, assim que aparecer os livros na sessão "Ultimas postagens" o acesso fica normal',
    );
  }, []);

  return (
    <>
      <div className="max-w-dvw overflow-x-hidden min-h-svh flex flex-col justify-between">
        <HomeBar />

        <div className="container mx-auto px-10 overflow-hidden bg-linear-to-r flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
