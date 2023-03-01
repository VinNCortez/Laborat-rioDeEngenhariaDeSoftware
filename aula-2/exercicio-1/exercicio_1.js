let h1 = document.createElement("h1")
let date = new Date()
h1.innerText = `${weekDays[date.getDay()]}, ${applyZeros(date.getDate())} de ${months[date.getMonth()]} de ${date.getFullYear()}`

document.body.append(h1)
