import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/* StrictMode = renderiza tudo que está em APP - - porta de entrada da nossa aplicação.
O StrictMode é u recurso do React para fazer uma verificação duplicada da aplicação - - - 
entada-se como um recurso de teste duplicado para validar a funcionadalide do projeto e "blindar" de
possíveis falhas */