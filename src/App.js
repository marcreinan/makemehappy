import React, { Component } from "react";
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setHumor, setLink, setModal, setJoke } from "./actions/appActions";
import jokeService from "./services/jokeApiService";
import './assets/styles/global.css';

import { Smiley } from './components/SmileyComponent';
import Modaljokes from './components/ModaljokesComponent';

class App extends Component {
  renderJoke = async() => {
    let joke = await getJoke();
    setJoke(joke);
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
      setJoke( await getJoke());
      let newHumor = props.humor + Math.round((Math.random() * 25));
      if(newHumor <= 100){
        humorHandle(newHumor);
      }else{
        humorHandle(100);
      }
;    }

      const humorHandle = humor =>{
        setHumor(humor);
      }

    const NavItem = (props) => {
      setHumor(props.humor)
      setLink(props.link)
      setModal(props.modal);
      return <></>;
    }
    
    
    return (
      <main>
        <Container fluid className="main">
          <Router>
            <Smiley
              link={link}
              humor={humor}
            />

            <Switch>
              <Route exact path="/">
                <NavItem humor={0} setHumor={this.setHumor} link={'/estoutriste'} modal={false}/>
              </Route>
              <Route exact path="/estoutriste">
                <NavItem humor={-100} setHumor={this.setHumor} link={'/meconteumapiada'} modal={true}/>
              </Route>
              <Route exact path="/meconteumapiada">
                <NavItem humor={humor} setHumor={this.setHumor} link={'/fim'} modal={modal}/>
              </Route>
              <Route exact path="/fim">
                <NavItem humor={0} setHumor={this.setHumor} link={'/estoutriste'} modal={false}/>
              </Route>
            </Switch>
            {link === "/fim"?
              <Modaljokes
                setModal={setModal} 
                modal={modal} 
                humor={humor}
                joke={joke} 
                getJoke={() => { 
                  buttonHandle(this.props) 
                }} 
                />
                :('')
            }
            {(humor>=100 && modal === false)
              ?redirect('/')
              :('')
            }
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

const redirect = link => <Redirect to={link} />;
const getJoke = async () => {
    let joke = '';
    await jokeService.getJoke().then( res => {
      joke = res.data.joke;
    })
    return joke;
}






