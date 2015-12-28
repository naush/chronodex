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

<img width="529" alt="chronodex" src="https://cloud.githubusercontent.com/assets/232740/12012177/39f7411a-acb7-11e5-823b-40f5603e63ab.png">

# Events

Modify events [here](https://github.com/naush/chronodex/blob/master/entry.js#L4-L13) to reflect your personal  calendadr.

```javascript
let events = [
  [12, 1, 'Lunch'],
  [1, 3, 'Meeting'],
  [3, 4, 'Coffee'],
  [4, 5, 'Email'],
  [5, 6, 'Commute,Reading,Music'],
  [6, 7, 'Exercise'],
  [7, 8, 'Dinner,Netflix'],
  [8, 9, 'Reading']
]
```

