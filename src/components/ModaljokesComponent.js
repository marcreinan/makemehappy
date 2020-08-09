import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Modaljokes = (props) => {
  const { 
    modal,
    setModal,
    joke,
    getJoke 
  } = props;

  const toggle = ()=> { setModal(!modal) }
  const nextJoke = ()=> { getJoke() }

    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modalJoke">
          <ModalHeader>Contar piada</ModalHeader>
          <ModalBody>
            {joke}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={nextJoke}>Ler outra piada</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
}