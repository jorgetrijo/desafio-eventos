const jean1 = { producto: "jean", color: "clasico", marca: "Levis", precio: 2599};
const jean2 = { producto: "jean", color: "azul oscuro", marca: "Kevingston", precio: 2999};
const jean3 = { producto: "jean", color: "celeste", marca: "Zara", precio: 2499};
const jean4 = { producto: "jean", color: "azul claro", marca: "McOwens", precio: 3999};

const Jeans = [jean1, jean2, jean3, jean4]
console.log("Bienvenido a Gramar Indumentarias.")
let accion = prompt("Querés comprar o ver un detalle de los productos? Escribi comprar o detalle")
if (accion == "comprar"){
let cantidad = parseInt(prompt("Cuántos jeans querés comprar? Compra máxima 2 jeans"));
if (cantidad == 1){
    let elegido = parseInt(prompt("Qué jean te gustaria comprar? Cada jean tiene su numero asignado"))
    if (elegido == 1){
        console.log("El jean te cuesta $" + jean1.precio)
    }
    else if (elegido == 2){
        console.log("El jean te cuesta $" + jean2.precio)
    }
    else if (elegido == 3){
        console.log("El jean te cuesta $" + jean3.precio)
    }
    else if (elegido == 4){
        console.log("El jean te cuesta $" + jean4.precio)
    }
    else {
        console.log("No te entendi. Volve a empezar")
    }
    
}
else if (cantidad == 2){
    let elegido = (prompt("Qué jeans te gustaria comprar? Compra máxima 2 jeans."))
    if (elegido == "1 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1.precio+jean2.precio));
    }
    else if (elegido == "1 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1.precio+jean1.precio));
    }
    else if (elegido == "1 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1.precio+jean3.precio));
    }
    else if (elegido == "1 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1.precio+jean4.precio));
    }
    else if (elegido == "2 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2.precio+jean3.precio));
    }
    else if (elegido == "2 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2.precio+jean1.precio));
    }
    else if (elegido == "2 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2.precio+jean2.precio));
    }
    else if (elegido == "2 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2.precio+jean4.precio));
    }
    else if (elegido == "3 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3.precio+jean4.precio));
    }
    else if (elegido == "3 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3.precio+jean1.precio));
    }
    else if (elegido == "3 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3.precio+jean2.precio));
    }
    else if (elegido == "3 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3.precio+jean3.precio));
    }
    else if (elegido == "4 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4.precio+jean1.precio));
    }
    else if (elegido == "4 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4.precio+jean2.precio));
    }
    else if (elegido == "4 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4.precio+jean3.precio));
    }
    else if (elegido == "4 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4.precio+jean4.precio));
    }
    else {
        console.log("No te entendi. Volve a empezar")
    }
}
}
else {
    console.log("Estos son los jeans que tenemos actualmente disponibles:")
    for (const producto of Jeans) {
        console.log(producto)
    }
}
console.log("Gracias por visitar Gramar Indumentarias.");

let MaximoValor = parseInt(prompt("Cuanto te gustaría gastar?"))
console.log("Estos son los jeans que cuestan menos de $" + MaximoValor + ":")
const buscado = Jeans.filter(producto => producto.precio < MaximoValor)
console.log(buscado)

