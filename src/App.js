import React, { Component, Fragment } from "react";
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setHumor, setLink, setModal, setJoke } from "./actions/appActions";
import jokeService from "./services/jokeApiService";
import './App.css';

import { Smiley } from './components/SmileyComponent';
import { Modaljokes } from './components/ModaljokesComponent';

class App extends Component {
  /*
  state = {
    humor: this.props.humor,
    link: '',
    modal: '',
    joke: ''
  } 
  */ 
  componentDidMount() {
    if(this.props.modal === true){
      setJoke(getJoke());
    }
  }

  renderJoke = () => {
    //alert(getJoke());
  }

      
  render() {
    let { 
      setHumor,
      humor,
      setLink,
      link,
      setModal,
      modal,
      setJoke,
      joke 
    } = this.props;

    const buttonHandle = async (props) => {
      let joke = await getJoke();
      setJoke(joke);
      setHumor(25);
     // setHumor(this.props.humor + 25);
;    }

    const NavItem = (props) => {
      setHumor(props.humor)
      setLink(props.link)
      if(props.modal === true){
          //let joke = getJoke();
          //setJoke(joke);
          setModal(props.modal);
        } 
        return (<></>);
      }
    
    
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

            <Modaljokes 
              setModal={setModal} 
              modal={modal} 
              joke={joke} 
              getJoke={() => { buttonHandle(this.props) }} 
            />


            <Switch>
              <Route exact path="/">
                <NavItem humor={0} setHumor={this.setHumor} link={'/estoutriste'} modal={false}/>
              </Route>
              <Route exact path="/estoutriste">
                <NavItem humor={-100} setHumor={this.setHumor} link={'/meconteumapiada'} modal={false}/>
              </Route>
              <Route exact path="/meconteumapiada">
                <NavItem humor={-100} setHumor={this.setHumor} link={'/mecontaumapiada'} modal={true}/>
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

const getJoke = async () => {
    let joke = '';
    await jokeService.getJoke().then( res => {
      joke = res.data.joke;
    })
    return joke;
}




