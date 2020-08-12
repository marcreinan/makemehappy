import { 
  SET_HUMOR, 
  SET_MODAL, 
  SET_LINK, 
  SET_JOKE
} from '../../constants/actionsTypes';

const initialState = { 
  humor: 0, 
  link: '/estoutriste', 
  modal: false,
  joke: ''
};

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
