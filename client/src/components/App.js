import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RenderProducts from './products/Products';
import Header from './Header';
import ConfirmOrder from './products/ConfirmOrder';

import Orders from './orders/Orders';
import ShowDbValues from './db-values/ShowDbValues';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <ShowDbValues />
          <Route exact path="/" component={RenderProducts} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/orders/confirm" component={ConfirmOrder} />
          <Route exact path="/admin/panel" component={Orders} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
