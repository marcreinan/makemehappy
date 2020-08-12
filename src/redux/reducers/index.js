import { combineReducers } from 'redux';
import appReducer from "./appReducer";

/**
 * Reducer geral que combina todos os reducers da aplicação
 * para registrar na store
 */

export default combineReducers({ 
  appState: appReducer
});