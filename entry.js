import React from 'react'
import ReactDOM from 'react-dom'
import Chronodex from './src/Chronodex.jsx'
import OneDayCalendar from './src/SimpleOneDayCalendar.jsx'
import ICAL from 'ical.js'

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

function filterEvents(events, year, month, date) {
  return events.filter(function(event) {
    let [startDate, endDate, summary] = event
    return (startDate.getFullYear() == year &&
            startDate.getMonth() == month &&
            startDate.getDate() == date)
  })
}

function parseQueryString() {
  let pairs = location.search.slice(1).split('&');
  let params = {}
  pairs.map(function(pair) {
    pair = pair.split('=')
    params[pair[0]] = decodeURIComponent(pair[1] || '')
  })
  return params
}

readLocalFile('tmp/calendar.ics', function(response) {
  let cevents = parseICalData(response)
  let params = parseQueryString()
  let year = params['year']
  let month = params['month'] - 1
  let date = params['date']
  let events = filterEvents(cevents, year, month, date)

  ReactDOM.render(<OneDayCalendar
                  events={events}
                />, document.querySelector('#one-day-calendar'))

  ReactDOM.render(<Chronodex
                  title='Chronodex'
                  size={256}
                  center={128}
                  radius={64}
                  events={events}
                />, document.querySelector('#chronodex'))
})
