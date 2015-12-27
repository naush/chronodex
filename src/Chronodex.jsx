import React from 'react'
import Index from './Index.jsx'
import Style from './Style.jsx'
import Slice from 'simple-slice'

class Chronodex extends React.Component {
  radius(eventCount) {
    let { radius } = this.props
    return radius * (1 + eventCount * 0.2)
  }

  hourToDegree (hour) {
    let degree = 0
    if (hour < 12) {
      degree = hour * 30
    }
    return degree
  }

  render () {
    let { size, center, radius, events } = this.props

    let style = new Style()
    let viewBox = [0, 0, size, size].join(' ')
    let props = {
      center: center,
      color: 'white',
      strokeWidth: 0.5,
      opacity: 1.0
    }

    return (
      <div style={style.container()}>
        <div style={style.center()}>
          <div style={style.inner()}>
            <div>
              <svg
                viewBox={viewBox}
                style={style.chart()}
                >
                <Index center={center} />
                <Slice {...props} radius={radius} start={0} end={30} />
                <Slice {...props} radius={radius * 1.2} start={30} end={60} />
                <Slice {...props} radius={radius * 1.4} start={60} end={90} />
                <Slice {...props} radius={radius} start={90} end={120} />
                <Slice {...props} radius={radius * 1.2} start={120} end={150} />
                <Slice {...props} radius={radius * 1.4} start={150} end={180} />
                <Slice {...props} radius={radius} start={180} end={210} />
                <Slice {...props} radius={radius * 1.2} start={210} end={240} />
                <Slice {...props} radius={radius * 1.4} start={240} end={270} />
                <Slice {...props} radius={radius} start={270} end={300} />
                <Slice {...props} radius={radius * 1.2} start={300} end={330} />
                <Slice {...props} radius={radius * 1.4} start={330} end={360} />
                {
                  events.map((event, index) => {
                    let [start, end, descriptions] = event
                    let eventCount = descriptions.split(",").length - 1

                    return (
                      <Slice
                        key={index}
                        center={center}
                        radius={this.radius(eventCount)}
                        color={style.event().color}
                        opacity={0.5}
                        strokeWidth={2.0}
                        strokeColor={style.event().color}
                        start={this.hourToDegree(start)}
                        end={this.hourToDegree(end)}
                      />
                    )
                  })
                }
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
          </div>
        </div>
      </div>
    )
  }
}

Chronodex.propTypes = {
  size: React.PropTypes.number,
  center: React.PropTypes.number,
  radius: React.PropTypes.number
}

export default Chronodex
