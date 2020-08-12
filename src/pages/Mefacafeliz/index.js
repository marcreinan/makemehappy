import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LINK, SET_MODAL} from '../../redux/actions/actionsTypes';

/**
 * Página Mefacafeliz
 */
export default function Mefacafeliz(){
  const dispatch = useDispatch();
  const modal = useSelector(state => state.appState.modal);

  useEffect(() => {
    dispatch(
      { type: SET_LINK, payload: '/fim'},
    );
    dispatch(
      { type: SET_MODAL, payload: modal},
    );
  })

  return <></> ;
}
