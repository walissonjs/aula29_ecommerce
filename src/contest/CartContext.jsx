import { createContext } from "react";

const CartContext = createContext(null);

export default CartContext;

/* É uma espécie de canal de comunicação que podemos inserir condições para um contexto, exemplo: Usuário logado, não precisa fazer login novamente */