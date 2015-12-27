import React from 'react'
import Chronodex from './components/Chronodex.jsx'

React.render(<Chronodex
                title='Chronodex'
                size={128}
                center={64}
                radius={32}
              />, document.querySelector('#chronodex'))
