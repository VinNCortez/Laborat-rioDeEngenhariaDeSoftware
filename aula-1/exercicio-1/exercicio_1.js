import {parseValue} from "../../library";

let value = prompt("Informe um dado")

if (confirm("Deseja verificar o tipo do dado?")) {
    alert(`O tipo do dado é: ${typeof(parseValue(value))}`)
} else {
    alert("Obrigado por visitar esta página")
}