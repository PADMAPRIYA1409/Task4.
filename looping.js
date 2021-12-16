var subjects=['tamil','english','maths','cs','biology','hindi','science']
var show='';
// for
// for(var i=0;i<subjects.length;i++){
//     show+=subjects[i]+'<br>'
// }
// for of 
// for( var i of subjects){
//     console.log(i)
//     show+=i+"<br/>"
// }

// initilization
var i=0;
// while
while(i<subjects.length){
    show+=subjects[i]+"<br/>"
    i++
} 
    // increment or decrement

// while(i<subjects.length)

document.querySelector('.displaysubjects').innerHTML=show