let jean1 = 2599;
let jean2 = 2999;
let jean3 = 2499;
let jean4 = 3999;

let cantidad = parseInt(prompt("Cuántos jeans querés comprar? Compra máxima 2 jeans"));
if (cantidad == 1){
    let elegido = parseInt(prompt("Qué jean te gustaria comprar? Cada jean tiene su numero asignado"))
    if (elegido == 1){
        console.log("El jean te cuesta $" + jean1)
    }
    else if (elegido == 2){
        console.log("El jean te cuesta $" + jean2)
    }
    else if (elegido == 3){
        console.log("El jean te cuesta $" + jean3)
    }
    else if (elegido == 4){
        console.log("El jean te cuesta $" + jean4)
    }
    else {
        console.log("No te entendi. Volve a empezar")
    }
    
}
else if (cantidad == 2){
    let elegido = (prompt("Qué jeans te gustaria comprar? Compra máxima 2 jeans."))
    if (elegido == "1 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1+jean2));
    }
    else if (elegido == "1 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1+jean1));
    }
    else if (elegido == "1 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1+jean3));
    }
    else if (elegido == "1 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean1+jean4));
    }
    else if (elegido == "2 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2+jean3));
    }
    else if (elegido == "2 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2+jean1));
    }
    else if (elegido == "2 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2+jean2));
    }
    else if (elegido == "2 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean2+jean4));
    }
    else if (elegido == "3 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3+jean4));
    }
    else if (elegido == "3 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3+jean1));
    }
    else if (elegido == "3 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3+jean2));
    }
    else if (elegido == "3 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean3+jean3));
    }
    else if (elegido == "4 y 1"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4+jean1));
    }
    else if (elegido == "4 y 2"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4+jean2));
    }
    else if (elegido == "4 y 3"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4+jean3));
    }
    else if (elegido == "4 y 4"){
        console.log("Los jeans te cuestan en total $" + parseInt(jean4+jean4));
    }
    else {
        console.log("No te entendi. Volve a empezar")
    }
}

