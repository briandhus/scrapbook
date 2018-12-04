import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ onSubmit, start, end, onChange, onChangeStart, onChangeEnd, onClick }) => (
  <div className="formPage">
    <form onSubmit={onSubmit}>
      <label>
        Name your trip:
        <input type="text" name="name" onChange={(e) => onChange(e)} />
        Date Begin:
        <DatePicker
            selected={start}
            startDate={start}
            endDate={end}
            onChange={onChangeStart}
        />
        Date End:
        <DatePicker
            selected={end}
            startDate={start}
            endDate={end}
            onChange={onChangeEnd}
        />
        Airline Travelled:
        <input type="text" name="airline" onChange={(e) => onChange(e)} />
        Price of flight:
        <input type="text" name="airlinePrice" onChange={(e) => onChange(e)} />
      </label>
      <input id="formSubmit" type="button" onClick={onClick} value="Submit" />
    </form>
  </div>
)

export default Form;