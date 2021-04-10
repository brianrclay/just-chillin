var openHours = [
  {
      day: 'sunday',
      open: '00:00',
      closed: '00:00',
      closedAllDay: true
  },
  {
      day: 'monday',
      open: '07:30',
      closed: '21:00',
      closedAllDay: false
  },
  {
      day: 'tuesday',
      open: '07:30',
      closed: '21:00',
      closedAllDay: false
  },
  {
      day: 'wednesday',
      open: '07:30',
      closed: '21:00',
      closedAllDay: false
  },
  {
      day: 'thursday',
      open: '07:30',
      closed: '21:00',
      closedAllDay: false
  },
  {
      day: 'friday',
      open: '07:30',
      closed: '21:00',
      closedAllDay: false
  },
  {
      day: 'saturday',
      open: '09:00',
      closed: '21:00',
      closedAllDay: false
  }
];

var currentDate = new Date();
var day = currentDate.getDay();
var hour = currentDate.getHours();
var min = currentDate.getMinutes();
openTime = openHours[day].open;
closedTime = openHours[day].closed;

console.log(openHours[day]);

var openHoursMinutes = openTime.split(/[.:]/);
var closedHoursMinutes = closedTime.split(/[.:]/);
var formatedOpen = (parseInt(openHoursMinutes[0] + openHoursMinutes[1]));
var formatedClosed = (parseInt(closedHoursMinutes[0] + closedHoursMinutes[1]));
var formatedCurrentTime = (parseInt(""+ hour + min));

function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

var openToday = tConvert (openTime);
var closedToday = tConvert (closedTime);

var cleverMessage = [
  "We're sad too",
  "Check back tomorrow",
  "The sun will come out tomorrow",
  "Keep calm and soda on",
  "We're just chillin"
];

console.log(formatedCurrentTime >= formatedOpen, formatedCurrentTime <= formatedClosed, formatedClosed && !openHours[day].closedAllDay);

var message = (cleverMessage[Math.floor(Math.random() * cleverMessage.length -1 ) + 1 ]);

if(formatedCurrentTime >= formatedOpen && formatedCurrentTime <= formatedClosed && !openHours[day].closedAllDay){
  $('.toast-headline').text("We're Open Now!");
  $('.open-toast img').attr('src', '/images/smile.svg');
  $('.toast-hours').text("Today's Hours: " + openToday + ' - ' + closedToday);
}else{
  $('.toast-headline').text("We're closed right now");
  $('.open-toast img').attr('src', '/images/asleep.svg');
  $('.toast-hours').text(message);
}