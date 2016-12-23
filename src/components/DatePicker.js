import React, {Component, PropTypes} from 'react'
import DayPicker, {DateUtils} from "react-day-picker"
import moment from 'moment'
import 'react-day-picker/lib/style.css'

class DatePicker extends Component {
  static propTypes = {};

  state = {
    from: null,
    to: null
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = e => {
   e.preventDefault();
   this.setState({
     from: null,
     to: null,
   });
 }

  render() {
    const { from, to } = this.state;
    return (
      <div className="RangeExample">
        <DayPicker
          numberOfMonths={ 2 }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick={ this.handleDayClick }
        />
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <h3>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
          </h3>
        }
      </div>
    )
  }

  handleChange = selected => this.setState({selected})
}

export default DatePicker
