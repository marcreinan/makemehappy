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
      <>
        <Modal isOpen={modal} className="modalJoke">
          <ModalHeader>
            { (joke !== '')
              ?(humor >= 100)
                ?<h3><span role="img" aria-label="Estrela">✨</span> Parabéns, aqui está sua recompensa!</h3>
                :<h3><span role="img" aria-label="Livro">📖</span> Ler piada</h3>
              :<h3><span role="img" aria-label="Estrela">⭐</span> Olá visitante</h3>
            }
          </ModalHeader>
          <ModalBody>
            {
              (humor >= 100)
              ? <iframe title="Gandalf Sax" width="100%" height="200" src="https://www.youtube.com/embed/G1IbRujko-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay="1" allowfullscreen></iframe>
              :!(joke)
                ?`Melhore o humor da nossa SPA contando piadas geek, cada piada melhora ou piora o seu humor entre 1 e 25%. Caso fique 100% feliz, ela libera uma recompensa. Boa sorte 🖖`
                :(joke)
            }
          </ModalBody>
          <ModalFooter>
            {(joke !== '')
              ?(humor >= 100)
                ?(<Button className="btn-lg" color="success" onClick={toggle}>Fechar</Button>)
                :(<Button className="btn-lg" color="primary" onClick={nextJoke}>Próxima Piada</Button>)
              :(<Button className="btn-lg" color="info" onClick={nextJoke}>Iniciar</Button>)
            }            
          </ModalFooter>
        </Modal>
      </>
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