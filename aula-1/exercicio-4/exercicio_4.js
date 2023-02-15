import {fatorial, informer} from "../../library";


let value

do {
    value = parseInt(prompt(informer))
} while (value < 1)

alert(fatorial(value))
