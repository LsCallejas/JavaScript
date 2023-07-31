let saldo = 1000

function consignar(valor){
    saldo += valor
    return true
}

function retirar(valor){
    if(valor > saldo){
        return false
    }

    saldo -= valor
    return true
}

function realizarAccion(accion){
    if(accion === "1"){
        let valor = parseInt(prompt("valor a consignar"))
        return consignar(valor)
    }

    if (accion === "2"){
        let valor = parseInt(prompt("indique el valor a retirar"))
        return retirar(valor)
    }
    return false
}

function main(){
    while(true){
        let accion = prompt("¿Que opcion desea? 1. Consignar, 2.Retirar, 3.Salir")
        if(accion === "3"){
            alert("Hasta luego")
            break
        }

        let resultado = realizarAccion(Accion)
        if(resultado === false){
            alert("Esta accion no es valida")
        }else{
            alert("Accion realizada, nuevo saldo " + saldo)
        }
    }
}

main()