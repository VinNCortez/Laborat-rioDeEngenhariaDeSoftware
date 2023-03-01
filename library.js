const informer = "Informe um número inteiro e positivo"

function parseValue(value){
    if (isNaN(value)){
        return value
    } else {
        return parseInt(value)
    }
}

function fatorial(value){
    if (value ===  0){
        return 1
    } else if (value === 1){
        return 1
    } else {
        return value * fatorial(value - 1)
    }
}