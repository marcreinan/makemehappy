import { 
  SET_HUMOR, 
  SET_MODAL, 
  SET_LINK, 
  SET_JOKE 
} from '../constants/actionsTypes';

export const setHumor = value => ({
  type: SET_HUMOR,
  payload: value
});

export const setLink = value => ({
  type: SET_LINK,
  payload: value
});

export const setModal = value => ({
  type: SET_MODAL,
  payload: value
});

export const setJoke = value => ({
  type: SET_JOKE,
  payload: value
});

