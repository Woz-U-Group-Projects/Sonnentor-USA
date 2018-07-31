import React from 'react';
import './index.css';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Sale, Cart, About } from "./screens";
import { render } from 'react-dom';

let store = createStore(reducer)

const Index = ({ store }) => (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/sale" component={Sale} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </Provider>
   );
   render(
    <Index store={store} />,
    document.getElementById('root')
 );
   
   