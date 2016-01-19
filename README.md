# Chronodex

An implementation of Chronodex in ReactJS and SVG based on Patrick Ng's [work](http://scription.typepad.com/blog/2011/11/scription-chronodex-weekly-planner-2012-free-download-with-the-cost-of-a-prayer.html#.VoBWkN-rS-U).

# Description

> Each page is like a branch, each opened page is a week, each day is like a beautiful flower grew from that page, consist of petals of your day's time slices.

# Installation

Run the following from command line.

```
npm install
npm start
```

Go to [http://localhost:8080](http://localhost:8080) on your browser to view the chronodex.

<img width="863" alt="chronodex" src="https://cloud.githubusercontent.com/assets/232740/12013904/d2a1627e-acee-11e5-84e0-2b96f7fe5e3c.png">

# Events

The chronodex component expects the following format for events.

```javascript
let events = [
  [9, 9.5, 'Email'], // start hour, end hour, event descriptions (comma-delimited)
  [10, 11, 'Meeting'],
  [11, 11.75, 'Work'],
  [12, 13, 'Lunch'],
  [13, 15, 'Meeting'],
  [15, 16, 'Work'],
  [16, 17, 'Email,Coffee'],
  [17, 17.5, 'Commute,Reading'],
  [18, 19, 'Exercise,Music'],
  [19.75, 20, 'Dinner,Netflix'],
  [20, 21, 'Walk Dog']
]
```
