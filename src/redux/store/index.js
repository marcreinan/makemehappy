import { createStore } from "redux";
import reducers from '../reducers';

/**
 * Store do redux que gerencia todos os reducers da aplicação
 */
 
 /** Pega o reducer global e cria a store */
export default createStore(reducers);
