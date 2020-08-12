import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_HUMOR, SET_LINK, SET_MODAL} from '../../redux/actions/actionsTypes';

/**
 * Página Estoutriste
 */
export default function Estoutriste(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      { type: SET_LINK, payload: '/mefacafeliz'},
    );
    dispatch(
      { type: SET_HUMOR, payload: -100},
     );
    dispatch(
      { type: SET_MODAL, payload: true},
    );
  })

  return <></>;
}