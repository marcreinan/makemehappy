import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import appReducer from './reducers/appReducer';
import store from "./store/index";
import App from './App';

afterEach(cleanup);

const startingState = {
  humor: 0,
  link: '/estoutriste',
  modal: false,
  joke: ''
}

function renderWithRedux(component,{initialState, store}){
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

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
  
});