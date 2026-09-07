console.log('calculator started')
console.log(`inputs received: ${process.argv.slice(2)}`)

let operation=process.argv[2]
let num1=Number(process.argv[3])
let num2=Number(process.argv[4])

if(!operation||isNaN(num1)||isNaN(num2)){
    console.log('invalid input, use: node calculator.js <operation> <num1> <num2>')
    process.exit(1)
}

let result

if(operation==='add'){
    result=num1+num2
}else if(operation==='subtract'){
    result=num1-num2
}else if(operation==='multiply'){
    result=num1*num2
}else if(operation==='divide'){
    if(num2===0){
        console.log('error: cannot divide by zero')
        process.exit(1)
    }
    result=num1/num2
}else{
    console.log('invalid operation, use add, subtract, multiply or divide')
    process.exit(1)
}

console.log(`Result: ${result}`)
console.log('calculator finished')