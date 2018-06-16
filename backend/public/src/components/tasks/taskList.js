import React, { Component } from 'react';

import TaskItem from './taskItem';
import Timeline from '../timeline';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.compileList = this.compileList.bind(this);
  }

  compileList = () => {
    console.log('props', this.props.tasks)
    return <ul>
        {this.props.tasks.map(task => (
          <TaskItem 
          // removeTask={this.props.removeTask}
          // addTask={this.props.addTask}
          // tasks={tasks} key={tasks.id} index={tasks.isEditing}
            task={task} />
      ))};
    </ul>
  }

  render() {
    return <div>
      <ul>
        <h2>
          Task List:
        </h2>
        {this.compileList()}
      </ul>
    </div>;
  }
}