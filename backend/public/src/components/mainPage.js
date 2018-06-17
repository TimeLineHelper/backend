import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// import Timeline from './timeline';

export default class MainPage extends Component {
  render() {
    return <div>
      <Link to="/">Welcome to the TimeLine Helper App!</Link>
    </div>;
  }
}