import React from 'react';

const Form = () => (
  <div>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name your trip:
        <input type="text" name='name' onChange={(e) => this.handleChange(e)} />
        Date:
        <input type="text" name='Date' onChange={(e) => this.handleChange(e)} />
        Airline Travelled:
        <input type="text" name='airline' onChange={(e) => this.handleChange(e)} />
        Price of flight:
        <input type="text" name='airlinePrice' onChange={(e) => this.handleChange(e)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
)

export default Form;