const output = document.getElementById("output") // Gets output div & puts it in a variable
var hour = new Date().getHours(); //Get hour


demo();


//console.log(`The tempature is ${json.main.temp} degrees farenheit`)

// if the hour is greater than hour 19 (past 7pm) then execute the first statement, if the hour is less than 7am, then do the second statement
function good() {

    if(hour >= 19 || hour <= 7) {
        output.innerText = `Since its after 7PM, you should do something inside!`
    } else {
        output.innerText = `Since its not 7PM yet, you should go outside!`
    }
    
}

function sad() {
    if(hour >= 21 || hour <= 7) {
        output.innerText = `Since almost midnight! You should go to sleep, it will make you feel better.`
    } else {
        output.innerText = `Since not past midnight! Go and talk to a friend!`
    }
}


function bored() {
    if(hour >= 19 || hour <= 7) {
        output.innerText = `Looks like its after 7PM, how about some video games? `
    } else {
        output.innerText = `Oh! It's not 7PM yet, you should play outside!`
    }
}

function hyper() {
    if(hour >= 19 || hour <= 7) {
        output.innerText = `Since its after 7PM, you should play Virtual Reality `
    } else {
        output.innerText = `Since its not 7PM yet, tackle someone in the street`
    }
}

console.log(`The military hour is ${hour}`)
