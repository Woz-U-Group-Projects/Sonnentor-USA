import React from 'react';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Sale, Cart, About } from "./screens";
import ReactDOM from 'react-dom';
import { Header } from "./components";


const store = createStore(reducer);


class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/sale" component={Sale} />
            {/* <Route path="/cart" component={Cart} /> */}
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const ConnectedIndex = connect(mapStateToProps)(Index);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIndex />
  </Provider>,
  document.getElementById('root')
);


