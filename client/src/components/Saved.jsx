import React from 'react';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    },
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clickState = this.state.clicked;
    this.setState({
      clicked: !clickState
    })
  }

  render() {
    if (this.props.trip !== undefined) {
      console.log(this.props.trip)
      return (
        <div onClick={this.handleClick} >

        </div>
      )
    }
  }
}

export default Saved;