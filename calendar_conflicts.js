// --- Question:
// Write a program to find conflicts in a list of appointments.
// Let’s say that you are writing a calendar program and you need a method
// to find conflicting meetings on the schedule.
// --- Example
// eventConf() => ["event1", "event2"]

const EVENTS = [
  [1, 2,  "event1"],
  [4, 6,  "event2"],
  [3, 8,  "event3"],
  [7, 10, "event4"],
  [9, 12, "event5"],
]

// not orderd events
function eventConf(events) {
  let res = []
  for (const event1 of events) {
    for(const event2 of events) {
      if (event1[1] < event2[1] && event1[1] > event2[0]) {
        res.push(event1)
      }
    }
  }
  console.log(res)
}

// orderd events
function eventConf(events) {
  let conf = []
  let end = events[0][1]

  for (let i = 0; i < events.length; i++) {
    if (events[i][1] > end && events[i][0] < end) {
      conf.push(events[i])
    }

    end = events[i][1]
  }

  console.log(conf)
}

eventConf(EVENTS)
