import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import store from "./redux/store/index";
import App from './App';

/**
 * Testes do componente App.js , consistindo em navegar nas telas
 * verificando se os elementos foram renderizados e estão presentes 
 * na tela gerada
 * 
 * @author: Marc Reinan Gomes
 */

afterEach(cleanup);

/** Estado inicial */
const startingState = {
  humor: 0,
  link: '/estoutriste',
  modal: false,
  joke: ''
}

/** Estado final */
const lastState = {
  humor: -100,
  link: '/fim',
  modal: true,
  joke: ''
}

/** Wrapper para utilizar a store do redux */
function renderWithRedux(component,{initialState, store}){
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

/** Teste dos componentes e das telas do APP*/
describe('Testes do componente App', () => {

  it('Renderiza o título', () => {
    const { getByText } = renderWithRedux(<App />, {startingState, store});
    const objElement = getByText(/Make Me Happy/i);
    expect(objElement).toBeInTheDocument();
  });
  
  it('Renderiza o subtítulo', () => {
    const { getByText } = renderWithRedux(<App />, {startingState, store});
    const objElement = getByText(/Conte piadas e faça uma SPA feliz/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Renderiza o texto do nível de humor inicial', () => {
    const { getByText } = renderWithRedux(<App />, {startingState, store});
    const objElement = getByText(/Humor: normal/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Renderiza o smiley com humor normal', () => {
    const { getByText } = renderWithRedux(<App />, {startingState, store});
    const objElement = getByText(/😐/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Dispara o clique, vai para a tela /estoutriste e testa o nivel de humor', () => {
    const { getByText } = renderWithRedux(<App />, {startingState, store});
    fireEvent.click(getByText(/😐/i));
    const objElement = getByText(/Humor: 100% triste/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Testa o emoji 100% triste da tela /estoutriste', () => {
    const { getByText } = renderWithRedux(<App />, {startingState, store});
    const objElement = getByText(/😫/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Dispara o clique, vai para a tela /mefacafeliz e testa o nivel de humor', () => {
    const { getByText } = renderWithRedux(<App />, {lastState, store});
    fireEvent.click(getByText(/😫/i));
    const objElement = getByText(/Humor: 100% triste/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Testa o emoji 100% triste da tela /mefacafeliz', () => {
    const { getByText } = renderWithRedux(<App />, {lastState, store});
    const objElement = getByText(/😫/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Testa o título inicial da modal da tela /mefacafeliz', () => {
    const { getByText } = renderWithRedux(<App />, {lastState, store});
    const objElement = getByText(/Olá Visitante/i);
    expect(objElement).toBeInTheDocument();
  });

  it('Testa o texto inicial da modal da tela /mefacafeliz', () => {
    const { getByText } = renderWithRedux(<App />, {lastState, store});
    const objElement = getByText(/Boa sorte/i);
    expect(objElement).toBeInTheDocument();
  });
  
});