import React from 'react'

class DailyCalendar extends React.Component {
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

  renderHeader () {
    let { events } = this.props

    if (events.length > 0) {
      let [start, end, summaries] = events[0]

      return (
        <tr key='-1'>
          <th
            colSpan='2'
            style={ {
            padding: '0 10px 0 10px',
            borderLeft: '5px solid deepskyblue',
            background: 'whitesmoke',
            width: '180'
          } }>{ start.toLocaleDateString() }</th>
        </tr>
      )
    } else {
      return void 0
    }
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
            this.renderHeader()
          }
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

export default DailyCalendar
