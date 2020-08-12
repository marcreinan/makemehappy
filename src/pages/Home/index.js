import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_HUMOR, SET_LINK, SET_MODAL} from '../../redux/actions/actionsTypes';

/**
 * Página Home
 */
export default function Home(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      { type: SET_LINK, payload: '/estoutriste'},
    );
    dispatch(
      { type: SET_HUMOR, payload: 0},
     );
    dispatch(
      { type: SET_MODAL, payload: false},
    );
  })

  return <></>;
}