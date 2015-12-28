# Chronodex

An implementation of Chronodex in ReactJS and SVG based on Patrick Ng's [work](http://scription.typepad.com/blog/2011/11/scription-chronodex-weekly-planner-2012-free-download-with-the-cost-of-a-prayer.html#.VoBWkN-rS-U).

# Description

> Each page is like a branch, each opened page is a week, each day is like a beautiful flower grew from that page, consist of petals of your day's time slices.he

# Installation

Run the following from command line.

```
npm install
npm start
```

Go to [http://localhost:8080](http://localhost:8080) on your browser to view the chronodex.

<img width="861" alt="chronodex" src="https://cloud.githubusercontent.com/assets/232740/12013726/d4b8b87c-acea-11e5-8d71-e68edc06be0e.png">

# Events

Modify events [here](https://github.com/naush/chronodex/blob/master/entry.js#L5-L16) to reflect your personal calendar.

```javascript
let events = [
  [9, 10, 'Email'], // start hour, end hour, event descriptions (comma-delimited)
  [10, 12, 'Meeting'],
  [12, 13, 'Lunch'],
  [13, 15, 'Meeting'],
  [15, 16, 'Coffee'],
  [16, 17, 'Email'],
  [17, 18, 'Commute,Reading,Music'],
  [18, 19, 'Exercise'],
  [19, 20, 'Dinner,Netflix'],
  [20, 21, 'Walk Dog']
]
```
