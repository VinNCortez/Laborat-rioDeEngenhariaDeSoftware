let value

do {
    value = parseInt(prompt(informer))
} while(value < 1)

let divisions = 0
let prime_number = true

for(let i = 1; i < value / 2 + 1; i++) {
    if (value % i === 0){
        console.log(value, )
        if (++divisions > 1){
            alert("O número não é Primo")
            prime_number = false
            break
        }
    }
}
if (!prime_number){
    alert("O número é primo")
}