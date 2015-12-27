import React from 'react'
import Chronodex from './components/Chronodex.jsx'

let events = [
  [12, 1, 'Lunch'],
  [1, 3, 'Marketing Meeting'],
  [3, 4, 'Coffee'],
  [4, 5, 'Email'],
  [5, 6, 'Commute,Reading,Music'],
  [7, 8, 'Dinner,Netflix'],
  [8, 12, 'Sleep']
]

React.render(<Chronodex
                title='Chronodex'
                size={128}
                center={64}
                radius={32}
                events={events}
              />, document.querySelector('#chronodex'))
