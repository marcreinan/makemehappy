import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setModal } from "../actions/appActions";

const Modaljokes = (props) => {
  let { 
    modal,
    humor,
    setModal,
    joke,
    getJoke 
  } = props;

  
  const toggle = ()=> {
     setModal(!modal);
  }

  const nextJoke = ()=> { getJoke() }
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modalJoke">
          <ModalHeader><span role="img" aria-label="Livro">📖</span> Ler piada</ModalHeader>
          <ModalBody>
            {
              (humor >= 100)
              ?("✨Parabéns, você deixou nossa SPA muito feliz! Muito obrigado ✨")
              :
                !(joke)
                ?(`Olá visitante⭐ melhore o dia da nossa SPA contando piadas, cada piada melhora ou piora o humor dela entre 1 e 25%. Ao se sentir 100% feliz ela libera o acesso a sua recompensa, Boa sorte 🖖`)
                :(joke)
            }
          </ModalBody>
          <ModalFooter>
            {(humor >= 100)
              ?(<Button color="success" onClick={toggle}>Fechar</Button>)
              :(<Button color="primary" onClick={nextJoke}>Ler Piada</Button>)
            }            
          </ModalFooter>
        </Modal>
        {(humor>=100 && modal === false)
          ?setTimeout(redirect('/'), 1000)
          :('')
        }
      </div>
    );
}

const redirect = link => <Redirect to={link} />;
const mapStateToProps = store => ({
  humor: store.appState.humor,
  modal: store.appState.modal,
  joke: store.appState.joke,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setModal }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Modaljokes);