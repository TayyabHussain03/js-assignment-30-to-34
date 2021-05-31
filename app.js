// **********QUESTION 1**********

// var currentDate = new Date()
// console.log(currentDate)


// **********QUESTION 2**********

// var monthName = ["January", "Febrary", "March", "April", "May", "June", "July", "August",
//     "September", "October", "November", "December"]

// var date = new Date()
// console.log("The current Month is " + monthName[date.getMonth()])


// **********QUESTION 3**********

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)


// **********QUESTION 4**********

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// if (nameOfToday = "Saturday" || "Sunday") {
//     alert("Today is Fun Day")
// }
// else {
//     alert("Today is not Fun Day")
// }


// **********QUESTION 5**********

// var date = new Date()
// console.log (date.getDate())

// if(date <= "16") {
//     alert("First Fifteen Days of the Month")
// }

// else{
//     alert("Last Fifteen Days of the Month")
// }


// **********QUESTION 6**********

// var date = new Date()
// console.log(date)
// var n = date.getTime()
// console.log("Elapse Time From 1970: " + n)
// var minutes = n/60000
// console.log("Elapse Minutes From 1970: " + minutes)


// **********QUESTION 7**********

// var date = new Date()
// console.log(date)
// var time = date.getHours()
// console.log(time)

// if (time >= 0 && time < 12) {
//     alert("It's AM")
// }
// else if (time >= 12 && time < 24) {
//     alert("It's PM")
// }


// **********QUESTION 8**********

// var date = new Date();
// date.setDate(0);
// console.log(date)


// **********QUESTION 9**********

// var date1 = new Date("14 May 2021");
// var date2 = new Date();
// var difference = date2.getTime() - date1.getDay();
// var differenceInDays = (difference / (1000 * 3600 * 24) / 365)
// differenceInDays = Math.floor(differenceInDays)
// console.log(differenceInDays + " day passed from 1st Ramadan 2021")


// **********QUESTION 10**********

// var currentDate = new Date();
// var currentDateTime = currentDate.getTime() / 1000;
// var Year2021 = new Date("01 January 2021").getTime() / 1000;
// document.write("On reference date " + currentDate);
// document.write("<h4>" + (currentDateTime - Year2021) + " seconds passed since the begining of 2021" + "</h4>");


//**********QUESTION 11**********

// var current = new Date();
// document.write("<div>","Current Date "+current+ "</div>");
// current.setHours(current.getHours()-1);
// document.write("<div>","1 hour ago, it was "+current+ "</div>");
