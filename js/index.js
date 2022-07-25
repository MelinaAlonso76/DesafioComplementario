/*BIENVENIDA*/
let nombre = prompt('PARA CONTINUAR INGRESE SU NOMBRE: ');
confirm('Bienvenido '+nombre+'!,¿Empezamos?');


let ejecutar = true;
let num1 = 0;
let num2 = 0;
while(ejecutar){
    let opcion = parseInt(prompt('SELECCIONA UNA OPCION: 1-sumar / 2-restar / 3-multiplicar / 4-Dividir / 5-Salir'));
    switch(opcion){
        case 1:
            num1 = parseInt(prompt('Ingrese el primer numero: '));
            num2 = parseInt(prompt('Ingrese el segundo numero: '));
            console.log(num1+' + '+num2+' = ' +(num1 + num2));
            break;
        case 2:
            num1 = parseInt(prompt('Ingrese el primer numero: '));
            num2 = parseInt(prompt('Ingrese el segundo numero: '));
            console.log(num1+' - '+num2+' = ' +(num1 - num2));
            break;
        case 3:
            num1 = parseInt(prompt('Ingrese el primer numero: '));
            num2 = parseInt(prompt('Ingrese el segundo numero: '));
            console.log(num1+' x '+num2+' = ' +(num1 * num2));
            break;
        case 4:
            num1 = parseInt(prompt('Ingrese el primer numero: '));
            num2 = parseInt(prompt('Ingrese el segundo numero: '));
            console.log(num1+' / '+num2+' = ' +(num1 / num2));
            break;
        case 5:
            ejecutar = false;
            break;
        default:
            alert('Ingresaste una opcion incorrecta');
    }
}
