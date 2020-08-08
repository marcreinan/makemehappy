import React, { Component, Fragment } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setHumor, setLink, setModal, setJoke } from "./actions/appActions";
import jokeService from "./services/jokeApiService";
import './App.css';

class App extends Component {
  state = {
    humor: '',
    link: '',
    modal: '',
    joke: ''
  }  
    
  render() {
    const { 
      setHumor,
      humor,
      setLink,
      link,
      setModal,
      modal,
      setJoke,
      joke 
    } = this.props;
    let flag = false;
    const NavItem = (props) => {
      
      setHumor(props.humor)
      setLink(props.link)
      setModal(props.modal)
      if(props.modal === true && flag === false){
        jokeService.getJoke().then( (res) => { 
          setJoke(res.data.joke)
          flag = true;
        } )
      }
      
      return (<></>);
    };
    
    return (
      <main>
        <Container fluid className="main">
          <Router>
            <Smiley
              link={link}
              humor={humor}
            />
          
            <Fragment><h2 className="humorLabel">Nível de humor: {humor}%</h2></Fragment>
            <Fragment><h2 className="humorLabel">Modal: {modal} </h2></Fragment>
            <Fragment><h2 className="humorLabel">Joke: {joke}</h2></Fragment>

            <ModalConnected modal={modal} joke={joke} />

            <Switch>
              <Route exact path="/">
                <NavItem humor={0} link={'/estoutriste'} modal={false}/>
              </Route>
              <Route exact path="/estoutriste">
                <NavItem humor={-100} link={'/meconteumapiada'} modal={false}/>
              </Route>
              <Route exact path="/meconteumapiada">
                <NavItem humor={-100} link={'/mecontaumapiada'} modal={true}/>
              </Route>
            </Switch>
          </Router>
        </Container>
      </main>
    );
  }
}
const mapStateToProps = store => ({
  humor: store.appState.humor,
  link: store.appState.link,
  modal: store.appState.modal,
  joke: store.appState.joke,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setHumor, setLink, setModal, setJoke }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default connect( store => ({ humor: store.appState.humor }))(App);

const getIcon = (humor) => {
  switch (humor) {
    case 100:
      return "😂";
    case 75:
      return "😅";
    case 50:
      return "😁";
    case 25:
      return "😊";
    case 0:
      return "😐";
    case -25:
      return "😕";
    case -50:
      return "😒";
    case -75:
      return "😔";
    case -100:
      return "😖";
    default:
      break;
  }
}

const Smiley = (props) => {
  return (
    <h1 className="smiley">
      <Link to={props.link}>{getIcon(props.humor)}</Link>
    </h1>
  )
}

const ModalPiadas = (props) => {
  const { 
    modal,
    setModal,
    joke 
  } = props;

  const toggle = ()=> { setModal(!modal) }

    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Contar piada</ModalHeader>
          <ModalBody>
            {joke}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
}


const ModalConnected = connect((store) => ({ modal: store.appState.modal, joke: store.appState.joke }), dispatch =>
  bindActionCreators({ setModal },dispatch))(ModalPiadas);


