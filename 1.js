const informer = "Informe um número inteiro e positivo"

function parseValue(value){
    if (isNaN(value)){
        return value
    } else {
        return parseInt(value)
    }
}

function fatorial(value){
    if (value == 0){
        return 1
    } else if (value == 1){
        return 1
    } else {
        return value * fatorial(value - 1)
    }
}



function exercicio1(){
    let value = prompt("Informe um dado")

    if (confirm("Deseja verificar o tipo do dado?")) {
        alert(`O tipo do dado é: ${typeof(parseValue(value))}`)
    } else {
        alert("Obrigado por visitar esta página")
    }
}

function exercicio2(){
    let value
    do {
        value = parseInt(prompt(informer))
    } while(value < 1)

    var divisoes = 0
    var nao_primo = false

    for(var i = 1; i < value / 2 + 1; i++) {
        if (value % i == 0){
            console.log(value, )
            if (++divisoes > 1){
                alert("O número não é Primo")
                nao_primo = true
                break
            }
        }
    }
    if (!nao_primo){
        alert("O número é primo")
    }
}

function exercicio3(){
    let value
    do {
        value = parseInt(prompt(informer))
    } while(value < 1)

    value % 2 == 0 ? alert("O número é par") : alert("O número é ímpar")
}

function exercicio4(){
    let value
    do {
        value = parseInt(prompt(informer))
    } while (value < 1)

    alert(fatorial(value))
}

//exercicio1()
//exercicio2()
//exercicio3()
exercicio4()