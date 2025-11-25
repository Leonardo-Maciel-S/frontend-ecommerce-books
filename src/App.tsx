import { Outlet } from "react-router";
import HomeBar from "./components/home-bar/home-bar";
import { ToastContainer } from "react-toastify";
import useCheckIsLogged from "./hooks/user/use-check-is-logged";
import { useEffect } from "react";

function App() {
  useCheckIsLogged();

  useEffect(() => {
    window.alert(
      'Devido a utilização do render no deploy da api, a mesma fica inativa depois de um tempo inativo, por esse motivo a primeira busca dos livros demora um pouco esperando a api subir novamente, após sumir a mensagem de "carregando" fica normal'
    );
  }, []);

  return (
    <div className="max-w-screen min-h-dvh border bg-linear-to-r from-white to-zinc-200">
      <HomeBar />

      <div className="max-w-7xl mx-auto px-10 overflow-hidden ">
        <Outlet />

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
