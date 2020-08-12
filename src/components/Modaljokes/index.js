import React, { useState } from 'react';
import './styles.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setModal } from "../../redux/actions/appActions";

/**
 * Componente que exibe as piadas geek em um modal, 
 * baseado no componente modal do boostrap 
 * 
 */
const Modaljokes = (props) => {
  const [loading, setLoading] = useState(false);

  let { 
    modal,
    humor,
    setModal,
    joke,
    getJoke 
  } = props;
  
  /** Seta a visibilidade da modal */
  const toggle = ()=> {
     setModal(!modal);
  }

  /** Faz a requisição de uma piada para a api*/
  const nextJoke = ()=> { 
    setLoading(true);
    getJoke();
    setLoading(false);
  }
  
  return (
    <>
      <Modal isOpen={modal} className="modalJoke">
        <ModalHeader tag="h3">
          { (joke !== '')  
              ? (humor >= 100)
                ? <p>
                    <span 
                      role="img" 
                      aria-label="Estrela">✨
                    </span> Parabéns, aqui está sua recompensa!
                  </p>
                : <p>
                    <span 
                      role="img" 
                      aria-label="Livro">📖
                    </span> Ler piada
                  </p>
                : <p>
                    <span 
                      role="img" 
                      aria-label="Estrela">⭐
                    </span> Olá visitante
                  </p>
          }
          </ModalHeader>
          <ModalBody>
            { (humor >= 100)
                ? <iframe 
                    title="Gandalf Sax" 
                    width="100%" 
                    height="150" 
                    src="https://www.youtube.com/embed/G1IbRujko-A" 
                    frameborder="0" 
                    allow ="accelerometer; 
                            autoplay; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture" 
                    autoplay="1" 
                    allowfullscreen="1" />
                : !(joke)
                    ? `Melhore o humor da nossa SPA contando piadas geek, 
                      cada piada melhora ou piora o seu humor entre 1 e 25%. 
                      Caso fique 100% feliz, ela libera uma recompensa. 
                      Boa sorte 🖖`
                    : (joke)
            }
          </ModalBody>
          <ModalFooter>
            { (joke !== '')
              ? (humor >= 100)
                  ? <Button 
                      size="lg" 
                      color="success" 
                      onClick={toggle}> Fechar
                    </Button>
                  : <Button 
                      size="lg" 
                      color="primary" 
                      disabled={loading} 
                      onClick={nextJoke}> Próxima Piada
                    </Button>
              : <Button 
                  size="lg" 
                  color="info" 
                  onClick={nextJoke}> Iniciar
                </Button>
            }            
          </ModalFooter>
        </Modal>
      </>
    );
}

/** Mapeia o estado global nas props */
const mapStateToProps = store => ({
  humor: store.appState.humor,
  modal: store.appState.modal,
  joke: store.appState.joke,
});

/** Mapeia as actions globais nas funções locais */
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setModal }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Modaljokes);