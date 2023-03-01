function ehPalindromo(string){
    return string.toLowerCase() === string.toLowerCase().split("").reverse().join("")
}

function verifyPalindromo(){
    let input = document.getElementsByTagName("input")[0]
    let h1 = document.getElementsByTagName("h1")[0]

    if (input.value.length > 0) {
        h1.innerText = ehPalindromo(input.value.toString()) ? "É um palindromo" : "Não é um palindromo"
    } else {
        h1.innerText = ""
    }
}

document.getElementsByTagName("input")[0].addEventListener("blur", verifyPalindromo)