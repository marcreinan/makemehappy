import React from 'react';
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
        <Modal isOpen={modal} className="modalJoke">
          <ModalHeader>
            {(humor >= 100)
              ?<span role="img" aria-label="Estrela">✨ Parabens</span>
              :<span role="img" aria-label="Livro">📖 Ler piada</span>
            }
          </ModalHeader>
          <ModalBody>
            {
              (humor >= 100)
              ? <>
                  <h3>Você deixou nossa SPA 100% feliz! Muito obrigado, aqui está sua recompensa!</h3>
                  <iframe title="Gandalf Sax" width="100%" height="200" src="https://www.youtube.com/embed/G1IbRujko-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                </>
              :
                !(joke)
                ?`Olá visitante⭐ melhore o dia da nossa SPA contando piadas, cada piada melhora ou piora o humor dela entre 1 e 25%. Ao se sentir 100% feliz ela libera o acesso a sua recompensa, Boa sorte 🖖`
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
        
      </div>
    );
}


const mapStateToProps = store => ({
  humor: store.appState.humor,
  modal: store.appState.modal,
  joke: store.appState.joke,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setModal }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Modaljokes);