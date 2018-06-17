import React, { Component } from 'react';

import MilestoneItem from './milestoneItem';

export default class MilestoneList extends Component {
  constructor(props) {
    super(props);

    this.compileList = this.compileList.bind(this);
  }

  compileList = () => {
    return this.props.milestones.map((milestone, index) => {
      return <MilestoneItem removeMilestone={this.props.removeMilestone}
        milestone={milestone} key={milestone.id} index={index} />;
    });
  }

  render() {
    return <div>
      <ul>
        {this.compileList()}
      </ul>
    </div>;
  }
}