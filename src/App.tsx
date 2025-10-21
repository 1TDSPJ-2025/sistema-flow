import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Rodape/Rodape";

export default function App(){

  return(
    <div className="container">
      <Cabecalho/>
      <Outlet/>
      <Footer/>
    </div>
  );
}