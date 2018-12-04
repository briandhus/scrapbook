import React from 'react';
import Saved from './Saved';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    }
  }

  componentDidMount() {
    this.getTrips();
  }

  getTrips() {
    fetch('/trips')
      .then(response => response.json())
      .then(entries => {
        this.setState({ trips: entries })
      })
      .catch(error => console.log(error));
  }

  render() {
    const { trips } = this.state;

    return (
      <div className="wrapper">
        <h1>ScrapBook</h1>
        <div className="newTrip">Start a new adventure</div>
        {
          trips.map(trip => (<Saved name={trip} />))
        }
      </div>
    )
  }
}

export default App;
