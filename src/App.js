/**
 * App.js - Core da aplicação, responsável por instanciar os componentes,
 * gerenciar o estado e as rotas
 * 
 * @author: Marc Reinan Gomes
 */

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Container } from 'reactstrap';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setHumor, setLink, setModal, setJoke } from "./redux/actions/appActions";
import jokeService from "./services/jokeApiService";

import './assets/styles/global.css';

import { Smiley } from './components/Smiley';
import Modaljokes from './components/Modaljokes';

import SEO from 'react-seo-component';

class App extends Component {
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
    }

      const humorHandle = humor =>{
        setHumor(humor);
      }

    const NavItem = (props) => {
      setHumor(props.humor);
      setLink(props.link);
      setModal(props.modal);
      return null;
    }
    
    
    return (
      <main>
        <SEO
          title={".:: Make Me Happy"}
          titleTemplate={(link === '/estoutriste'? "Home": link === '/mefacafeliz'?"Estou triste": "Me faça feliz") }
          titleSeparator={`|`}
          description={"Faça uma SPA feliz, contando piadas para ela com a geek-joke-api, projeto criado com React.js, redux e axios"}
        />
 
        <Container fluid className="main bg-primary">
          <Router>

            <h1 className="main-title">
              Make Me Happy <br/>
              <small>Conte piadas e faça uma SPA feliz</small>
            </h1>

            <Smiley
              link={link}
              humor={humor}
            />

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

            {(humor>=100 && modal === false) || (humor===0 && modal === false)
              ?redirect('/')
              :('')
            }
            
            <Switch>
              <Route exact path="/">
                <NavItem humor={0} setHumor={this.setHumor} link={'/estoutriste'} modal={false}/>
              </Route>
              <Route exact path="/estoutriste">
                <NavItem humor={-100} setHumor={this.setHumor} link={'/mefacafeliz'} modal={true}/>
              </Route>
              <Route exact path="/mefacafeliz">
                <NavItem humor={humor} setHumor={this.setHumor} link={'/fim'} modal={modal}/>
              </Route>
              <Route exact path="/fim">
                <NavItem humor={0} setHumor={this.setHumor} link={'/estoutriste'} modal={false}/>
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

const redirect = link => <Redirect to={link} />;

const getJoke = async () => {
    let joke = '';
    await jokeService.getJoke().then( res => {
      joke = res.data.joke;
    })
    return joke;
}






