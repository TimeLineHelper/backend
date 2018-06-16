'use strict';
 
import React, {Component, Fragment} from 'react';

import Token from '../../../credentials.json';

export default class TIMLINE extends Component {
  
    
    state = {
      
    }
  
  calanderButton = () => {
    console.log('button clicked');  
    // fetch('http://localhost:3000/getcaldata')
     
    //   .then(() => {
    //     console.log('25 results:Token', Token);
      
    //   })

      fetch('http://localhost:3000/getcaldata')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          res.write('<h1>' + data + '</h1>');
    
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
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
