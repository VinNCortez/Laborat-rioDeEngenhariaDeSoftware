const informer = "Informe um número inteiro e positivo"
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

function applyZeros(number){
    return number.toString().padStart(2, "0")
}

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