import React, { Component } from 'react';

export default class MilestoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Run a marathon',
      description: 'I ran 26.2 miles!!!',
    };

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name] : ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addMilestone(this.state);
  }

  render() {
    return <form
      onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange}
        name="name"
        type="text"
        placeholder="name"
        value={this.state.name}
      />
      <input onChange={this.handleChange}
        name="description"
        type="text"
        placeholder="description"
        value={this.state.name}
      />
    </form>;
  }
}