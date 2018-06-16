import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

// import Timeline from './components/timeline';

class MainPage extends Component {
  render() {
    return <Fragment>
      <h1>MainPage</h1>
      <p>stuff and things</p>
      <p><Link to="/create-timeline">Create-timeline</Link></p>
    </Fragment>;
  }
}

class App extends Component {
  render(){
    return <BrowserRouter>
      <Fragment>
        <h1>TimeLine App</h1>
        <Route exact path="/" component={MainPage}/>
        {/* <Timeline /> */}
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);