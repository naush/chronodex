import React from 'react'

class Index extends React.Component {
  mark (index, radius, degree, center) {
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

  render () {
    let { center } = this.props

    let hours = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
    let minutes = [
      0, 7.5, 15, 22.5, 30, 37.5, 45, 52.5, 60, 67.5, 75, 82.5,
      90, 97.5, 105, 112.5, 120, 127.5, 135, 142.5, 150, 157.5, 165, 172.5,
      180, 187.5, 195, 202.5, 210, 217.5, 225, 232.5, 240, 247.5, 255, 262.5,
      270, 277.5, 285, 292.5, 300, 307.5, 315, 322.5, 330, 337.5, 345, 352.5
    ]

    return (
      <g>
        {
          hours.map((degree, index) => {
            return (this.mark(index, 5, degree, center))
          })
        }
        {
          minutes.map((degree, index) => {
            return (this.mark(index, 3, degree, center))
          })
        }
      </g>
    )
  }

}

export default Index
