import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Container } from 'reactstrap';
import SEO from 'react-seo-component';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setHumor, setLink, setModal, setJoke } from "./redux/actions/appActions";

import jokeService from "./services/jokeApiService";

import './assets/styles/global.css';

import { APP_NAME, APP_SUBNAME, APP_TITLE} from './constants/envConfig';
import { Smiley } from './components/Smiley';
import Modaljokes from './components/Modaljokes';

/**
 * App.js - Core da aplicação, responsável por instanciar os componentes,
 * gerenciar o estado, as rotas e renderizar a interface com as tags SEO
 * 
 * @author: Marc Reinan Gomes
 */
class App extends Component {
  render() {
    let { 
      setHumor, /** Seta o nivel humor */
      humor,    /** Nivel de humor */
      setLink,  /** Seta a rota do link */
      link,     /** Rota do link no smiley */
      setModal, /** Seta a visibilidade do modal */
      modal,    /** Visibilidade da modal */
      setJoke,  /** Seta uma piada */
      joke      /** Piada atual */
    } = this.props;

    /** Pega uma nova piada na API e seta o nível do humor */
    const buttonHandle = async (props) => {
      setJoke( await getJoke());
      let newHumor = props.humor + Math.round((Math.random() * 25));
      if(newHumor <= 100){
        humorHandle(newHumor);
      }else{
        humorHandle(100);
      }
    }

    /** Seta o nível do humor */
    const humorHandle = humor =>{
      setHumor(humor);
    }

    /** Elemento de navegação para setar os estados de acordo com a rota */
    const NavItem = (props) => {
      setHumor(props.humor);
      setLink(props.link);
      setModal(props.modal);
      return null;
    }
    
    
    return (
      <main>
        {/** Componente SEO  */}
        <SEO
          title={`${APP_TITLE}`}
          titleTemplate={ (link === '/estoutriste' 
                            ? "Home"
                            : link === '/mefacafeliz'
                              ? "Estou triste"
                              : "Me faça feliz") }
          titleSeparator={`|`}
          description={`Faça uma SPA feliz, contando piadas para ela com a geek-joke-api
                        , projeto criado com React.js, redux e axios`}
        />

        {/** Main Container */}
        <Container fluid className="main bg-primary">
          <Router>

            {/** APP Display */}
            <h1 className="main-title">
              {APP_NAME} <br/>
              <small>{APP_SUBNAME}</small>
            </h1>

            {/** Componente Smiley */}
            <Smiley
              link={link}
              humor={humor}
            />

            {/** Componente Modal */}
            { link === "/fim"
              ? <Modaljokes
                  setModal={setModal} 
                  modal={modal} 
                  humor={humor}
                  joke={joke} 
                  getJoke={() => { 
                    buttonHandle(this.props) 
                  }}/>
              : ('')
            }

            {/** Componente Redirect - utilizado para alterar a rota */}
            { (humor>=100 && modal === false) 
              || (humor===0 && modal === false)
                ?redirect('/')
                :('')
            }
            
            {/** Switch Router */}
            <Switch>
              {/** Rota / */}
              <Route exact path="/">
                <NavItem humor={0} setHumor={this.setHumor} link={'/estoutriste'} modal={false}/>
              </Route>
              {/** Rota /estoutriste */}
              <Route exact path="/estoutriste">
                <NavItem humor={-100} setHumor={this.setHumor} link={'/mefacafeliz'} modal={true}/>
              </Route>
              {/** Rota /mefacafeliz */}
              <Route exact path="/mefacafeliz">
                <NavItem humor={humor} setHumor={this.setHumor} link={'/fim'} modal={modal}/>
              </Route>
              {/** Rota /fim */}
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

/** Mapeia o estado global nas props */
const mapStateToProps = store => ({
    humor: store.appState.humor,
    link: store.appState.link,
    modal: store.appState.modal,
    joke: store.appState.joke,
  });

/** Mapeia as actions globais nas funções locais */
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setHumor, setLink, setModal, setJoke }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * Componente Redirect
 * @param {string} - link = Link da rota para ser redirecionada
 */ 
const redirect = link => <Redirect to={link} />;

/**
 * Requisita uma piada do serviço jokeService
 */
const getJoke = async () => {
    let joke = '';
    await jokeService.getJoke().then( res => {
      joke = res.data.joke;
    })
    return joke;
}






