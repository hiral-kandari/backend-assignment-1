const isEven=require('./modules/isEven')
const log=require('./modules/logger')

log('app.js started')

let num1=10
let num2=7

if(isEven(num1)){
    log(`${num1} is even`)
}else{
    log(`${num1} is odd`)
}

if(isEven(num2)){
    log(`${num2} is even`)
}else{
    log(`${num2} is odd`)
}

log('app.js finished')