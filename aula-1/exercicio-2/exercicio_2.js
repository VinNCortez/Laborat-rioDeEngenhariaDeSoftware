let value

do {
    value = parseInt(prompt(informer))
} while(value < 1)

let divisions = 0
let prime_number = true

for(let i = 1; i < Math.ceil(value / 2); i++) {
    if (value % i === 0){
        console.log(i)
        if (++divisions > 1){
            alert("O número não é Primo")
            prime_number = false
            console.log("entrou no break")
            break
        }
    }
}
console.log(divisions)
if (prime_number){
    alert("O número é primo")
}