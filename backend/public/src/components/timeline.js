'use strict';
 
import React, {Component, Fragment} from 'react';

export default class TIMLINE extends Component {
  
    
    state = {
      
    }
  
  calanderButton = () => {
    console.log('button clicked');  
  }

  render() {
   return <Fragment>
    <h1>Users</h1>
    <p>put state stuff here </p>
    <button onClick={this.calanderButton}>Button</button>
    <p>{this.state.test} </p>
    </Fragment>
  }
}
