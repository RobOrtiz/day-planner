$(document).ready(function() {
    var test = false;
// link current date from moment.js into jumbotron
var now = moment().format('MMMM Do YYYY');

let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');

if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

  let $dateHeading = $('#currentDay');
  $dateHeading.text(now);

// Enter task and save to planner
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  // If plans were retrieved from localStorage, update the plan array to it
  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    // this should only occur on first time the app is loaded in the browser
    planTextArr = new Array(9);
  }

  // set variable referencing planner element
  let $plannerDiv = $('#plannerContainer');
  // clear existing elements
  $plannerDiv.empty();

  // build calendar by row for fix set of hours
  for (let hour = 9; hour <= 22; hour++) {
    // index for array use offset from hour
    let index = hour - 9;

  };
});
