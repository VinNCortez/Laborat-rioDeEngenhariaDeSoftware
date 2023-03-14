const INPUTS_IDS = ["marca", "modelo", "ano", "cor", "kilometragem", "valor_fipe"]

class Carro {
    constructor (marca, modelo, ano, cor, kilometragem, valor_fipe) {
        this.marca = marca
        this.modelo = modelo
        this.ano = parseInt(ano)
        this.cor = cor
        this.kilometragem = parseInt(kilometragem)
        this.valor_fipe = parseFloat(valor_fipe).toFixed(2)
    }

    anosUtilizacao () {
        return new Date().getFullYear() - this.ano
    }

    valorMercado () {
        let kilometragem_ano = Math.round(this.kilometragem / this.anosUtilizacao())
        if (kilometragem_ano <= 30000) {
            return (this.valor_fipe * 1.10).toFixed(2)
        }
        else if (kilometragem_ano > 30000 >= 50000) {
            return  this.valor_fipe
        }
        else {
            return (this.valor_fipe * 0.90).toFixed(2)
        }
    }

}

function createContainerCarro() {
    let container = document.createElement("div")
    container.classList.add("container", "border", "rounded", "p-5", "pb-3", "bg-light", "my-5")
    container.id = "resultado"
    container.innerHTML = "<div class='row'><div class='col'><div><label class=\"form-label\">Valor Mercado:</label></div></div><div class='col'><label class=\"form-label\">Anos de utilização:</label></div></div>"
    return container
}

function createInputResultado() {
    let input = document.createElement("input")
    input.readOnly = true
    input.classList.add("form-control")
    return input
}

function mostrarResultados() {
    let values = []

    INPUTS_IDS.forEach(
        (input_id) => {values.push(document.getElementById(input_id).value)}
    )
    let carro = new Carro(...values)

    let container = createContainerCarro()
    let input_valor_mercado = createInputResultado()
    let input_anos_utilizacao = createInputResultado()

    input_valor_mercado.value = carro.valorMercado()
    input_anos_utilizacao.value = carro.anosUtilizacao()

    container.querySelectorAll("[class=col]")[0].append(input_valor_mercado)
    container.querySelectorAll("[class=col]")[1].append(input_anos_utilizacao)
    document.body.append(container)
}

document.getElementById("button_result").addEventListener("click", mostrarResultados)