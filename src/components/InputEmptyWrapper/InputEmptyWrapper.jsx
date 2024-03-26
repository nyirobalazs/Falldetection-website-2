import React from 'react';

class InputEmptyWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textInputContent: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textInputContent: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.textInputContent}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputEmptyWrapper;