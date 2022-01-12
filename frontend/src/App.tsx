// import Navbar from "./componets/Navbar";
// //componente react que vai ser o nav(funcao do javaScript)
// function App() {
//   //retorna todo o codigo parecido html porem eh um formato especifico chamada JSX.. entrada de codigo do react
//   return (
//    <Navbar/>
//   );
// }
// //exportanto a funcao app para arquivo principal (index.tsx)
// export default App;
// importanto três componentes do router-dom responsavel por configurar as rotas.
// importar também os componentes para ativa-los em cada rota. 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  // browserRouterInicia a rota
  // dentro dele o navbar
  // routes responsavel por criar cada rota.

    //1P router abrir a pagina listing
    // localhost/
    
    //2P router caminho localhost/3000/form
    //existem uma subrota para /form que recebe um parametro que vai ser o id do filme
    //localhost/3000/form/1....

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;