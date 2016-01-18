import React from 'react'

class SimpleOneDayCalendar extends React.Component {
  formatMinute(minute) {
    return minute <= 10 ? '0' + minute : minute
  }

  format(date) {
    let period = String.fromCharCode(13250) // ㏂
    let hour = date.getHours()
    let minute = date.getMinutes()

    if (hour > 12) {
      period = String.fromCharCode(13272) // ㏘
    }

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
        <tbody>
          {
            events.map((event, index) => {
              let [start, end, descriptions] = event

              return (
                <tr key={index}>
                  <td style={ {
                    padding: '0 10px 0 10px',
                    borderLeft: '5px solid deepskyblue',
                    background: 'whitesmoke',
                    width: '180'
                  } }>{this.format(start)} - {this.format(end)}</td>
                <td style={ {
                    padding: '0 10px 0 10px',
                    background: 'whitesmoke',
                    width: '250'
                  } }>{descriptions.split(",").join(", ")}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default SimpleOneDayCalendar
