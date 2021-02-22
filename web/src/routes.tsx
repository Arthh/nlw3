import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphaMaps from './pages/OrphaMaps'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphaMaps} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;