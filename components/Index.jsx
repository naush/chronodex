import React from 'react'
import "babel-polyfill"

class Index extends React.Component {
  mark (center, degree, radius, index=1) {
    let description = [
      'M', center, 0,
      'L', center, radius
    ].join(' ')

    let style = {
      fill: 'none',
      stroke: 'currentcolor',
      strokeWidth: 0.5
    }

    return (
          <path key={index}
                d={description}
                transform={`rotate(${degree} ${center} ${center})`}
                style={style} />
    )
  }

  *range (begin, end, interval = 1) {
    for (let number = begin; number <= end; number += interval) {
      yield number
    }
  }

  render () {
    let { center } = this.props
    let hours = [...this.range(0, 360, 30)]
    let minutes = [...this.range(0, 360, 7.5)]

    return (
      <g>
        { hours.map((degree, index) => { return (this.mark(center, degree, 5, index)) }) }
        { minutes.map((degree, index) => { return (this.mark(center, degree, 3, index)) }) }
      </g>
    )
  }

}

export default Index
