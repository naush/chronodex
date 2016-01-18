import React from 'react'
import Chronodex from './../Chronodex.jsx'
import 'babel-polyfill'

class MonthlyCalendar extends React.Component {
  filterEvents (events, year, month, date) {
    return events.filter(function(event) {
      let [startDate, endDate, summary] = event
      return (startDate.getFullYear() == year &&
              startDate.getMonth() == month &&
              startDate.getDate() == date)
    })
  }

  *dateRange (start, end) {
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
      yield new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
  }

  render () {
    let { events, year, month } = this.props

    let startDate = new Date(year, month - 1, 1)
    let endDate = new Date(year, month, 0)
    let dates = [...this.dateRange(startDate, endDate)]

    return (
      <div>
        {
          dates.map((date, index) => {
            let cevents = this.filterEvents(events,
                                            date.getFullYear(),
                                            date.getMonth(),
                                            date.getDate())
            return <Chronodex
                    key={index}
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

export default MonthlyCalendar
