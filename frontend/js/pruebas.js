//Get the current hour
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
const message = document.querySelector('.msg');

var date = new Date("2012-01-18T16:03");

console.log( (date.getMinutes()<10?'0':'') + date.getMinutes() );