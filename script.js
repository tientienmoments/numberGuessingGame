


let randomNumber = Math.floor(Math.random() * 100) + 1
console.log("random number:", randomNumber)

let areaResult = document.getElementById("area-result")
// let guessesRemaining = document.getElementById("guesses-remaining").value
//history array
let areaResultReset = areaResult.value

let remainNumber = 5
let round = []
let history = []

let time = 0 // time start from 0
let myTime;
// timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time += 1;
        document.getElementById('timecount').innerHTML = `your time on this game:${time}`
        if (time == 35) {
            timeOut();
        }

    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()// fire the timecounting function!!


function timeOut() {
    clearInterval(myTime)
    document.getElementById('timecount').innerHTML = `your time on this game is Over`
}


function choosingNumber() {
    const guessNumber = document.getElementById("user-guess").value

    console.log('User guessed:', guessNumber)

    remainNumber -=1

    if (remainNumber > 0) {

        if (guessNumber>0 && guessNumber<100 && guessNumber>randomNumber)  {

            areaResult.innerHTML = `Hint: Your Number is too High`

            document.getElementById("guesses-remaining").innerHTML = `Remain Trying ${remainNumber}`
           for(let i=0;i<history.length; i++)
            if (guessNumber === history[i]) {
                alert("Same number. Try other number")
                return
            }


        } else if (guessNumber>0 && guessNumber<100 && guessNumber < randomNumber) {

            areaResult.innerHTML = `Hint: Your Number is too Low`
            document.getElementById("guesses-remaining").innerHTML = `Remain Trying ${remainNumber}`
            for(let i=0;i<history.length; i++)
            if (guessNumber === history[i]) {
                alert("Same number. Try other number")
                return
            }

        } else if (guessNumber>0 && guessNumber<100 && guessNumber===randomNumber){

            areaResult.innerHTML = `congrat!!!success`
            
        }else{
            alert ("wrong type of number, 0<number<100")
            return
        }
        //add guessing number to history
        history.push(guessNumber)
        document.getElementById("historyArea").innerHTML = `You have tried:${history}`


    } else {
        console.log("you run out of guess")
        document.getElementById("run-out").innerHTML = `Game Over`
    }

    //number remain change -1
    //when remain change 0 , game over
}


function resetGame() {
    round.push({
        "history": history,
        "time": time
    })
    anounceText=JSON.stringify(round)
    document.getElementById("round").innerHTML = `Last game:${anounceText}`
    timecounting()
    document.getElementById("user-guess").value = ""
    // areaResultReset=0
    remainNumber = 5
    history = []
    time = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1
    document.getElementById("historyArea").innerHTML = ` `
    document.getElementById('user-guess').innerHTML = ` `
}


// when user click reset, > change go back to 5 > reset random number >reset history
// reset input box, reset