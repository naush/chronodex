import React from 'react'
import ReactDOM from 'react-dom'
import DailyCalendar from './src/calendars/DailyCalendar.jsx'
import MonthlyCalendar from './src/calendars/MonthlyCalendar.jsx'
import WeeklyChart from './src/charts/WeeklyChart.jsx'
import ICAL from 'ical.js'
import "babel-polyfill"

function readLocalFile(path, callback) {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      callback(xhr.response)
    }
  }
  xhr.open('GET', path, true);
  xhr.send()
}

function parseICalData(data) {
  let parsed = ICAL.parse(data)
  let component = new ICAL.Component(parsed)
  let vevents = component.getAllSubcomponents("vevent")
  let events = vevents.map((vevent) => new ICAL.Event(vevent))
  let cevents = []

  events.map(function(event) {
    let summary = event.summary
    let startDate = event.startDate.toJSDate()
    let endDate = event.endDate.toJSDate()
    cevents.push([startDate, endDate, summary])
  })

  return cevents
}

readLocalFile('tmp/calendar.ics', function(response) {
  let ievents = parseICalData(response)

  // ReactDOM.render(<DailyCalendar
  //                 events={events}
  //                 />, document.querySelector('#daily-calendar'))

  // ReactDOM.render(<MonthlyCalendar
  //                  events={ievents}
  //                  year={2015}
  //                  month={12}
  //                  />, document.querySelector('#monthly-calendar'))

  let root = document.querySelector('#weekly-chart')
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  months.map(function(month) {
    let monthNode = document.createElement('div')
    root.appendChild(monthNode)
    ReactDOM.render(<WeeklyChart
                    events={ievents}
                    year={2015}
                    month={month}
                    />, monthNode)
  })

  let yearNode = document.createElement('div')
  root.appendChild(yearNode)
  ReactDOM.render(<WeeklyChart
                   events={ievents}
                   year={2015}
                  />, yearNode)

})
