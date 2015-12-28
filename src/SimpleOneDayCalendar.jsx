import React from 'react'

class SimpleOneDayCalendar extends React.Component {
  formatMinute(minute) {
    if (minute <= 10) {
      return '0' + minute
    } else {
      return minute
    }
  }

  format(time) {
    let period = String.fromCharCode(13250) // ㏂
    if (time >= 12) {
      period = String.fromCharCode(13272) // ㏘
    }
    let hour = Math.floor(time)
    let minute = Math.round((time - hour) * 60)

    return `${hour}:${this.formatMinute(minute)} ${period}`
  }

  render () {
    let { events } = this.props

    return (
      <table style={ {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
        fontFamily: 'Courier New',
        fontSize: 16
      } }>
        {
          events.map((event, index) => {
            let [start, end, descriptions] = event

            return (
              <tr key={index}>
                <td style={ {
                  padding: '0 10px 0 10px',
                  borderLeft: '5px solid deepskyblue',
                  background: 'whitesmoke'
                } }>{this.format(start)} - {this.format(end)}</td>
              <td style={ {
                  padding: '0 10px 0 10px',
                  background: 'whitesmoke'
                } }>{descriptions.split(",").join(", ")}</td>
              </tr>
            )
          })
        }
      </table>
    )
  }
}

export default SimpleOneDayCalendar
