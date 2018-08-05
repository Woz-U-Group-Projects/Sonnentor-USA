import React from 'react';
import './index.css';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Sale, Cart, About } from "./screens";
import { render } from 'react-dom';
import { Header } from "./components"


let store = createStore(reducer)

const Index = ({ store }) => (
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/sale" component={Sale} />
      <Route path="/cart" component={Cart} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
const mapStateToProps = (state) => {
  return {
      ...state
  }
}
connect(mapStateToProps)(Index);

render(
<Provider store={store}>
<div>
    <Index />
</div>
</Provider>,
document.getElementById('root')
);
export default Header;