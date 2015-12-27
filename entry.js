import React from 'react'
import Chronodex from './components/Chronodex.jsx'

let events = [
  [12, 1, 'Lunch'],
  [1, 3, 'Meeting'],
  [3, 4, 'Coffee'],
  [4, 5, 'Email'],
  [5, 6, 'Commute,Reading,Music'],
  [6, 7, 'Exercise'],
  [7, 8, 'Dinner,Netflix'],
  [8, 9, 'Reading']
]

React.render(<Chronodex
                title='Chronodex'
                size={256}
                center={128}
                radius={64}
                events={events}
              />, document.querySelector('#chronodex'))
