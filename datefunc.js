// date function
// eval-evaluate

var checkDate=new Date();
// console.log(checkdate.getDate())
// console.log(checkdate.getMonth())
// console.log(checkdate.getFullYear())
// var myDate=checkDate.getDate()
// var myMonth=checkDate.getMonth()
// var myYear=checkDate.getFullYear()
// var fullDate = myDate+'/'+eval(myMonth+1)+'/'+myYear
// document.querySelector('.displaydate').innerHTML=fullDate

// time function
console.log(checkDate.getHours()) 
console.log(checkDate.getMinutes()) 
console.log(checkDate.getSeconds()) 
console.log(checkDate.toLocaleTimeString())
setInterval(() => {
    var checkDate = new Date()   
    var myTime = checkDate.toLocaleTimeString()
    document.querySelector('.displaytime').innerHTML = myTime},1000)