import React from 'react';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    console.log('props -------', this.props)
    if (this.props.trip !== undefined) {
      return (
        <div>
          
        </div>
      )
    }
  }
}

export default Saved;