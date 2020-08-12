import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Estoutriste from '../pages/Estoutriste';
import Mefacafeliz from '../pages/Mefacafeliz';

/**
 * Rotas da aplicação
 */
export default function Routes(){

  return (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/estoutriste">
        <Estoutriste />
      </Route>
      <Route exact path="/mefacafeliz">
        <Mefacafeliz />
      </Route>
      <Route exact path="/fim">
        <Home />
      </Route>
    </Switch>
  </>
  )
}