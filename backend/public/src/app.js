import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../../styles/main.scss';

import Timeline from './components/timeline';
// import MainPage from './components/mainPage';

export default class App extends Component {
  render(){
    return <BrowserRouter>
      <Fragment>
        <nav>
          <h1>TimeLine App</h1>
          <ul>
            {/* <li><Link to='/'>Main Page</Link></li> */}
            <li><Link to='/create-timeline'>Timeline</Link></li>
          </ul>
        </nav>
        <div>
          {/* <Route exact path="/" component={MainPage} /> */}
          <Route path="/create-timeline" component={Timeline} />
        </div>
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);