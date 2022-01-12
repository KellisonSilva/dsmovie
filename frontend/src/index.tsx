import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
//Chamada da funcao app do arquivo App.tsx
//redenrizar dentro dele o component app (reactDom.render)
ReactDOM.render(
  //deixar o projeto protegido/controlado
  <React.StrictMode>
    <App />
    {/*chamada do arquivo index.html pelo id do elemento == root*/}
  </React.StrictMode>,
  document.getElementById('root')
);

