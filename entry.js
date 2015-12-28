import React from 'react'
import Chronodex from './src/Chronodex.jsx'

let events = [
  [9, 10, 'Email'],
  [10, 12, 'Meeting'],
  [12, 13, 'Lunch'],
  [13, 15, 'Meeting'],
  [15, 16, 'Coffee'],
  [16, 17, 'Email'],
  [17, 18, 'Commute,Reading,Music'],
  [18, 19, 'Exercise'],
  [19, 20, 'Dinner,Netflix']
]

React.render(<Chronodex
                title='Chronodex'
                size={256}
                center={128}
                radius={64}
                events={events}
              />, document.querySelector('#chronodex'))
