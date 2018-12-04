import React from 'react';
import DatePicker from "react-datepicker";
import Saved from './Saved';
import Button from './Button';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      formOpen: false,
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      airline: '',
      price: null,
    },
    this.showForm = this.showForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getTrips();
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date,
      endDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }

  showForm() {
    const formState = this.state.formOpen;
    this.setState({ formOpen: !formState });
  }

  getTrips() {
    fetch('/trips')
      .then(response => response.json())
      .then(entries => {
        this.setState({ trips: entries })
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { trips, startDate, endDate } = this.state;

    if (this.state.formOpen === false) {
      return (
        <div className="wrapper">
          <h1>ScrapBook</h1>
          <div className="tripButton" onClick={() => this.showForm()}>Start a new adventure</div>
          { trips.map(trip => (<Saved trip={trip} />)) }
          { trips.map(trip => (<Button name={trip.name} />)) }
        </div>
      )
    }
    return (
      <div className="wrapper">
        <h1>ScrapBook</h1>
        <div className="tripButton" onClick={() => this.showForm()}>Start a new adventure</div>
        { trips.map(trip => (<Saved trip={trip} />)) }
        { trips.map(trip => (<Button name={trip.name} />)) }
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onChangeStart={this.handleChangeStart} onChangeEnd={this.handleChangeEnd} start={startDate} end={endDate} />
      </div>
    )
  }
}

export default App;
