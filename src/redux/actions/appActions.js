/**
 * Actions para manipular os estados referentes ao componente App,
 * definindo o valor do estado de acordo com a função chamada e o
 * novo valor
 */
import { SET_HUMOR, SET_MODAL, SET_LINK, SET_JOKE } from './actionsTypes';


/** Seta o valor do estado humor */
export const setHumor = value => ({
  type: SET_HUMOR,
  payload: value
});

/** Seta o valor do estado link */
export const setLink = value => ({
  type: SET_LINK,
  payload: value
});

/** Seta o valor do estado modal */
export const setModal = value => ({
  type: SET_MODAL,
  payload: value
});

/** Seta o valor do estado joke */
export const setJoke = value => ({
  type: SET_JOKE,
  payload: value
});