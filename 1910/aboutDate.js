// var today = new Date();
// var year = today.getFullYear();
// console.log(year);
// var day = today.getDay();
// console.log(day);

function isWeekend(dateString) {
    // Write code here...
    var date = new Date(dateString);
    // console.log(date);
    var day = date.getDay();
    if (day === 5 || day === 6) {
        return console.log('true');
    } else return console.log('false');
  }

isWeekend('2021/10/19');

function diffMs(a, b) {
    // viết code ở đây
    return (new Date(b)).getTime()-(new Date(a)).getTime();
   }