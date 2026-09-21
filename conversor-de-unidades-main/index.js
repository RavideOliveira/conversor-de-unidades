let valor = 5
let opcao = "F"

let mensagem = `${"Seja bem vindo(a) ao meu conversor de unidades."}

${"Escolha um valor, uma opção e obtenha seu resultado."}`
console.log(mensagem)

//para comprimento 'de metros para...'

if(opcao === "km") {
    let resultado = valor / 1000
    console.log(resultado + "km")
} else if(opcao === "hm") {
    let resultado = valor * 100
    console.log(resultado + "hm")
} else if(opcao === "dam") {
    let resultado = valor / 10
    console.log(resultado + "dam")
} else if(opcao === "dm") {
    let resultado = valor * 10
    console.log(resultado + "dm")
} else if(opcao === "cm") {
    let resultado = valor * 100
    console.log(resultado + "cm")
} else if(opcao === "mm") {
    let resultado = valor * 1000
    console.log(resultado + "mm")
}


//para tempo 'de segundos para...'

if(opcao === "min") {
    let resultado = valor / 60
    console.log(resultado + "min")
} else if(opcao === "h") {
    let resultado = (valor / 60) / 60
}

//para temperatura 'de celsius para...'

if(opcao === "F") {
    let resultado = (valor * 9/5) + 32
    console.log(resultado + "°F")
} else if(opcao === "K") {
    let resultado = valor + 273
    console.log(resultado + "°K")
}

//para massa 'gramas para...'

if(opcao === "kg") {
    let resultado = valor / 1000
    console.log(resultado + "kg")
} else if(opcao === "hg") {
    let resultado = valor / 100
    console.log(resultado + "hg")
} else if(opcao === "dag") {
    let resultado = valor / 10
    console.log(resultado + "dag")
} else if(opcao === "dg") {
    let resultado = valor * 10
    console.log(resultado + "dg")
} else if(opcao === "cg") {
    let resultado = valor * 100
    console.log(resultado + "cg")
} else if(opcao === "mg") {
    let resultado = valor * 1000
    console.log(resultado + "mg")
}