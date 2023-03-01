function applyZeros(number){
    return number.toString().padStart(2, "0")
}

let h1 = document.createElement("h1")


document.body.append(h1)

function recursiveClock(){
    let date = new Date()
    h1.innerText = `${applyZeros(date.getHours())}:${applyZeros(date.getMinutes())}:${applyZeros(date.getSeconds())}`
    setTimeout(recursiveClock, 1000)
}

recursiveClock()