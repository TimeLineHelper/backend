import React, { Component } from 'react';

import TaskItem from './taskItem';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    // this.compileList = this.compileList.bind(this);
  }

  // compileList = () => {
  //   console.log('props', this.props)
  //   return this.props.tasks.map(task => {
  //     return <TaskItem 
  //       removeTask={this.props.removeTask}
  //       addTask={this.props.addTask}
  //       tasks={tasks} key={tasks.id} index={tasks.isEditing}>
  //     </TaskItem>;
  //   });
  // }

  render() {
    return <div>
      <ul>
        <h2>
          Task List:
        </h2>
        {/* {this.compileList()} */}
      </ul>
    </div>;
  }
}