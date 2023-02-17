const path = require('path');

notifier = require('node-notifier')

function alert(){
    notifier.notify({
        title: 'Take a 5 minute break',
        message: "It's been 30 minutes, you should take a break!",
        wait: true,
        icon: path.join(__dirname,"icon.png"),
        priority: 2,
        sound: "Notification.Looping.Call4", //4, 6, 7, 8, 9, 10, call 1, 3, (4), 6, 7, 9, 10 are bareable, Call 4 is used.
        appID: "Break-Reminder"
      });
}

function beginalert(){
    notifier.notify({
        title: "notifier online!",
        message: "notifying every 30 minutes!",
        sound: "Notification.Looping.Alarm7",
        icon: path.join(__dirname,"icon.png"),
        priority: 2,
        wait: true,
        appID: "Break-Reminder"
    })
}

const second = 1000;
const minute = 60 * second;
beginalert()
setInterval(alert, (30 * minute) )