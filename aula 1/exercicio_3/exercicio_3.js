import {informer} from "../../library";


let value

do {
    value = parseInt(prompt(informer))
} while(value < 1)

value % 2 === 0 ? alert("O número é par") : alert("O número é ímpar")