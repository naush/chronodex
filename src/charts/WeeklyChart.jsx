import React from 'react'
import Chronodex from './../Chronodex.jsx'
import 'babel-polyfill'

class WeeklyChart extends React.Component {
  filterEvents (events, year, month, day) {
    return events.filter(function(event) {
      let [startDate, endDate, summary] = event
      return (year == null || startDate.getFullYear() == year) &&
             (month == null || startDate.getMonth() == month - 1) &&
             startDate.getDay() == day
    })
  }

  render () {
    let { events, year, month } = this.props

    let days = [0, 1, 2, 3, 4, 5, 6]

    return (
      <div>
        {
          days.map((day) => {
            let cevents = this.filterEvents(events, year, month, day)

            return <Chronodex
                    key={day}
                    title='Chronodex'
                    size={64}
                    center={32}
                    radius={16}
                    events={cevents}
                    />
          })
        }
      </div>
    )
  }
}

export default WeeklyChart

