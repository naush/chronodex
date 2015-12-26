import React from 'react'
import Slice from './Slice.jsx'

class Pie extends React.Component {
  render () {
    let { size, center, radius } = this.props

    return (
      <div>
        <svg viewBox={[0, 0, size, size].join(' ')}
          style={ { maxHeight: '100%' } }>
          <Slice center={center} radius={radius} start={0} end={45} color='red' />
          <Slice center={center} radius={radius} start={45} end={90} color='orange' />
          <Slice center={center} radius={radius} start={90} end={135} color='yellow' />
          <Slice center={center} radius={radius} start={135} end={180} color='green' />
          <Slice center={center} radius={radius} start={180} end={225} color='blue' />
          <Slice center={center} radius={radius} start={225} end={270} color='indigo' />
          <Slice center={center} radius={radius} start={270} end={315} color='purple' />
          <Slice center={center} radius={radius} start={315} end={360} color='white' />
        </svg>
      </div>
    )
  }
}

Pie.propTypes = {
  size: React.PropTypes.number,
  center: React.PropTypes.number,
  radius: React.PropTypes.number
}

export default Pie
