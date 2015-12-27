import React from 'react'
import Slice from 'simple-slice'
import Index from './Index.jsx'

class Pie extends React.Component {
  render () {
    let { size, center, radius } = this.props

    let props = {
      center: center,
      color: 'white',
      strokeWidth: 0.5,
      opacity: 1.0
    }

    return (
      <div>
        <svg viewBox={[0, 0, size, size].join(' ')}
          style={ { maxHeight: '100%' } }>
          <Index center={center} />
          <Slice {...props} radius={radius} start={0} end={30} />
          <Slice {...props} radius={radius * 1.2} start={30} end={60} />
          <Slice {...props} radius={radius * 1.6} start={60} end={90} />
          <Slice {...props} radius={radius} start={90} end={120} />
          <Slice {...props} radius={radius * 1.2} start={120} end={150} />
          <Slice {...props} radius={radius * 1.6} start={150} end={180} />
          <Slice {...props} radius={radius} start={180} end={210} />
          <Slice {...props} radius={radius * 1.2} start={210} end={240} />
          <Slice {...props} radius={radius * 1.6} start={240} end={270} />
          <Slice {...props} radius={radius} start={270} end={300} />
          <Slice {...props} radius={radius * 1.2} start={300} end={330} />
          <Slice {...props} radius={radius * 1.6} start={330} end={360} />
          <circle
            cx={center}
            cy={center}
            r={radius / 2}
            fill='white'
            stroke='black'
            strokeWidth='0.5'
          />
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
