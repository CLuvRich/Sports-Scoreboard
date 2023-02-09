

 //HOME SCORE

 let scoreEl1 = document.getElementById("score-el1")
 let score1 = 0

function add1() {
    score1 += 1
    scoreEl1.textContent = score1
}

function add2() {
    score1 += 2
    scoreEl1.textContent = score1
}

function add3() {
    score1 +=3
    scoreEl1.textContent = score1
}

function reset1() {
    score1 = 0
    scoreEl1.textContent = score1
}


//GUEST SCORE

let scoreEl2 = document.getElementById("guest-el")
let score2 = 0

function guestadd1() {
    score2 += 1
    scoreEl2.textContent = score2
}

function guestadd2() {
    score2 += 2
    scoreEl2.textContent = score2
}

function guestadd3() {
    score2 +=3
    scoreEl2.textContent = score2
}

function reset2() {
    score2 = 0
    scoreEl2.textContent = score2
}