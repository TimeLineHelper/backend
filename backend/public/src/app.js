'use strict';
import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
 
import ReactDOM from 'react-dom';
import './style/main.css';

class MainPage extends Component {
  render() {
    return <Fragment>
      <h1 id="mainTitle">Track It</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere libero nulla, ac lobortis libero tincidunt non. Nulla magna nisi, vehicula vitae neque at, cursus varius massa. Pellentesque sollicitudin enim vitae sollicitudin pulvinar. Quisque a risus vel erat mollis aliquet.</p>
      <h2>Begin tracking now!</h2>
      <p><Link to="/create-timeline">Create-timeline</Link></p>
    </Fragment>;
  }
}

class App extends Component {
  render(){
    return <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={MainPage}/>
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);