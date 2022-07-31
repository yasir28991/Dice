/* VARIABLES */
let playerOneScore = 0
let playerTwoScore = 0
let player1Turn = true
let player2Turn = true

let randomNumber

let message = document.getElementById("msg")

let playerOneScoreBoard = document.getElementById("player1score")

let playerTwoScoreBoard = document.getElementById("player2score")

let playerOneDice = document.getElementById("player1dice")

let playerTwoDice = document.getElementById("player2dice")

let rollBtn = document.getElementById("rollBtn")

let resetBtn = document.getElementById("resetBtn")

let double = document.getElementById("double")

/*END OF VARIABLES*/ 


/*FUNCTIONS*/ 

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function renderGame() {

    if (playerOneScore >= 22)
    {
        message.textContent = "Player 1 Won 🥳 🎉 "
        showResetButton()

    }  
    
    else if (playerTwoScore >= 22)
    {
        message.textContent = "Player 2 Won 🥳 🎉"
        showResetButton()
    }

    player1Turn = !player1Turn
}

rollBtn.addEventListener("click", function(){
    randomNumber = Math.floor( Math.random()*6 + 1 )

    if (player1Turn) {

        playerOneDice.textContent = randomNumber

        playerOneScore += randomNumber
        
        playerOneScoreBoard.textContent = playerOneScore

        playerTwoDice.classList.remove("active")
        playerOneDice.classList.add("active")

        message.textContent = "Player 1 Turn"
    }
    else {

        playerTwoDice.textContent = randomNumber

        playerTwoScore += randomNumber

        playerTwoScoreBoard.textContent = playerTwoScore

        playerOneDice.classList.remove("active")
        playerTwoDice.classList.add("active")
        message.textContent = "Player 2 Turn"
    }
    renderGame()

})


resetBtn.addEventListener("click", function(){
    playerOneDice.textContent = "-"
    playerTwoDice.textContent = "-"
    playerOneScore = 0
    playerTwoScore = 0
    playerOneScoreBoard = 0
    playerTwoScoreBoard = 0
    playerTwoDice.classList.remove("active")
    playerOneDice.classList.add("active")
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    message.textContent = "Player 1 turn"
})


double.addEventListener("click" , function(){
    let luck = Math.floor(Math.random()*12 + 1)
    let luckchecker = Math.floor(Math.random()*6 + 1)

    if (luckchecker === 1 && player1Turn === true) 
    {
        playerOneDice.textContent = luck

        playerOneScore += luck
        
        playerOneScoreBoard.textContent = playerOneScore

        playerTwoDice.classList.remove("active")
        playerOneDice.classList.add("active")

        message.textContent = "Player 1 Turn"

    }

    else if (luckchecker >= 2 && player1Turn === true)
    {
        playerOneDice.textContent = "0"

        playerOneScore += 0

        playerTwoDice.classList.remove("active")
        playerOneDice.classList.add("active")

        message.textContent = "Player 1 Turn"
    }

    else if (luckchecker === 1 && player1Turn === false)
    {
        playerTwoDice.textContent = luck

        playerTwoScore += luck

        playerTwoScoreBoard.textContent = playerTwoScore

        playerOneDice.classList.remove("active")
        playerTwoDice.classList.add("active")
        message.textContent = "Player 2 Turn"
    }

    else if (luckchecker >= 2 && player1Turn === false)
    {
        playerTwoDice.textContent = 0

        playerTwoScore += 0

        playerOneDice.classList.remove("active")
        playerTwoDice.classList.add("active")
        message.textContent = "Player 2 Turn"
    }

    renderGame()
})


/*END OF FUNCTIONS*/ 


/*NOTES*/ 



/*END OF NOTES*/ 