import React from 'react';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    },
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail() {
    const clickState = this.state.clicked;
    this.setState({
      clicked: !clickState
    })
  }

  render() {
    const trips = this.props.trip;
    if (this.state.clicked === false) {
      console.log(this.props.trip)
      return (
        <div onClick={() => this.showDetail()} >
          <div className="tripButton">{trips.name}</div>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.showDetail()} >
          {Object.values(trips).map((trip, i) => (
            <div className="tripList">{trip}</div>
          ))}
        </div>
      )
    }
  }
}

export default Saved;