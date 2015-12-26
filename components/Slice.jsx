import React from 'react'

class Slice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opacity: 0.6 }
  }

  mouseEnter () {
    this.setState({ opacity: 1.0 })
  }

  mouseLeave () {
    this.setState({ opacity: 0.6 })
  }

  toRadian (degrees) {
    return Math.PI * degrees / 180
  }

  render () {
    let { center, radius, start, end, color } = this.props

    let radians = this.toRadian(end - start - 90)
    let destX = center + radius * Math.cos(radians)
    let destY = center + radius * Math.sin(radians)
    let transformation = `rotate(${start} ${center} ${center})`
    let description = [
      'M', center, center,
      'L', center, center - radius,
      'A', radius, radius, 0, 0, 1, destX, destY,
      'z'
    ].join(' ')
    let styles = {
      graph: {
        fill: color,
        stroke: color,
        opacity: this.state.opacity
      },
      stroke: {
        strokeWidth: 0.0,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeOpacity: this.state.opacity
      }
    }

    return (
      <g transform={ transformation }
        style={ styles.graph }
        onMouseEnter={ this.mouseEnter.bind(this) }
        onMouseLeave={ this.mouseLeave.bind(this) }>
        <path d={ description } style={ styles.stroke } />
      </g>
    )
  }
}

Slice.propTypes = {
  center: React.PropTypes.number,
  radius: React.PropTypes.number,
  start: React.PropTypes.number,
  end: React.PropTypes.number,
  color: React.PropTypes.string
}

export default Slice
