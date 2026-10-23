const prompt = require("prompt-sync")()

let resultado = 0
const quantasVezes = Number(prompt("Quantas vezes? "))

// OBS: As unidades que estão sendo convertidas estão inicialmento no seu valor no SI.

for (let i = 0; i < quantasVezes; i++) {
    const valor = Number(prompt("Digite um valor: "))
    const opcao = prompt("Digite a opção desejada: ")

    switch (opcao) {
        case "km":
            resultado = valor / 1000
            console.log(`${resultado} km`)
            break
        case "hm":
            resultado = valor / 100
            console.log(`${resultado} hm`)
            break
        case "dam":
            resultado = valor / 10
            console.log(`${resultado} dam`)
            break
        case "dm":
            resultado = valor * 10
            console.log(`${resultado} dm`)
            break
        case "cm":
            resultado = valor * 100
            console.log(`${resultado} cm`)
            break
        case "mm":
            resultado = valor * 1000
            console.log(`${resultado} mm`)
            break
        case "min":
            resultado = valor / 60
            console.log(`${resultado} min`)
            break
        case "h":
            resultado = valor / 3600
            console.log(`${resultado} h`)
            break
        case "F":
            resultado = (valor * 9 / 5) + 32
            console.log(`${resultado}°F`)
            break
        case "K":
            resultado = valor + 273
            console.log(`${resultado}K`)
            break
        case "kg":
            resultado = valor / 1000
            console.log(`${resultado}kg`)
            break
        case "hg":
            resultado = valor / 100
            console.log(`${resultado}hg`)
            break
        case "dag":
            resultado = valor / 10
            console.log(`${resultado}dag`)
            break
        case "dg":
            resultado = valor * 10
            console.log(`${resultado}dg`)
            break
        case "cg":
            resultado = valor * 100
            console.log(`${resultado} cg`)
            break
        case "mg":
            resultado = valor * 1000
            console.log(`${resultado} mg`)
            break
        default:
            console.log("Valor ou opção não identificado(s)")
    }

}