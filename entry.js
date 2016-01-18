import React from 'react'
import ReactDOM from 'react-dom'
import Chronodex from './src/Chronodex.jsx'
import OneDayCalendar from './src/SimpleOneDayCalendar.jsx'

let events = [
  [9, 9.5, 'Email'],
  [10, 11, 'Meeting'],
  [11, 11.75, 'Work'],
  [12, 13, 'Lunch'],
  [13, 15, 'Meeting'],
  [15, 16, 'Work'],
  [16, 17, 'Email,Coffee'],
  [17, 17.5, 'Commute,Reading'],
  [18, 19, 'Exercise,Music'],
  [19.75, 20, 'Dinner,Netflix'],
  [20, 21, 'Walk Dog']
]

ReactDOM.render(<Chronodex
                title='Chronodex'
                size={256}
                center={128}
                radius={64}
                events={events}
              />, document.querySelector('#chronodex'))

ReactDOM.render(<OneDayCalendar
                events={events}
              />, document.querySelector('#one-day-calendar'))
