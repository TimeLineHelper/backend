import React, { Component, Fragment } from 'react';

import TaskList from '../tasks/taskList';
// import TaskForm from './tasks/taskForm';
import ElementForm from '../elements/elementForm.js';

export default class AddItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    }
  }

  render() {
    return <Fragment>
      <div>
        <h1>{this.props.name}</h1>
        <p>Now add important dates and milestones to your event!</p>

        <ElementForm></ElementForm>
        {/* <TaskForm addTask={this.addTask} buttonText='create'></TaskForm> */}
        {/* <TaskList></TaskList> */}
      </div>
    </Fragment>
  }
}

// render() {
//   return <Fragment>
//     <div>
//       <p id="createItem-intro">Begin by creating an Event!</p>
//       <TaskForm buttonText="update"
//         task={this.props.task}
//         toggleEdit={this.toggleEdit}
//         addTask={this.props.addTask} />
//       <Link to="/create-timeline"></Link>
//     </div>
//   </Fragment>;
// }