import { SET_HUMOR, SET_MODAL, SET_LINK, SET_JOKE } from '../actions/actionsTypes';

/**
 * Reducer responsável pelo gerenciamento do estado do componente App
 */

 /** Estado inicial da aplicação */
const initialState = { 
  humor: 0, 
  link: '/estoutriste', 
  modal: false,
  joke: ''
};

/** Chamadas das Actions para atualizar os estados */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HUMOR:
      return { ...state, humor: action.payload };
    case SET_LINK:
      return { ...state, link: action.payload };
    case SET_MODAL:
      return { ...state, modal: action.payload };
    case SET_JOKE:
      return { ...state, joke: action.payload };
    default:
      return state;
  }
};
