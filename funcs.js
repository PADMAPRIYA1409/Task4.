/* funcs
1.named 
2.anonymous
3.immediately invoked
*/
// calling func
// named func without parameter
    // function declare(){
    // console.log(`declare your format method`)
    // }
    // declare();
    function good(){
    var dispaly="good"
    var great="dressing skills you have"
    console.log(`hi nandz ${dispaly} ${great}`)}
    good();
// func with parameter
function addition(a,b){
    return a+b
}
console.log(addition(3,4))
// annonymous
var subraction=function(a,b){
    return a-b
}
console.log(subraction(3,3))
// imediately invoked
var multiply=(function(a,b){
    return a*b
})(9,2)
console.log(multiply)

// callback func
function infosys (){
    setTimeout(()=>{
        metal()
    },3000)
    // Work()
    console.log('hi ...how r u')
}
function metal(){
    console.log('better do next time')
}
infosys()


