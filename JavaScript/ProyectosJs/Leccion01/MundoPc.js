/*Creamos la clase Padre */
class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    //Metodos getter y setter para leer y modificar las propiedadess de las variables
    get tipoEntrada (){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}   //Creamos las claes hijas Raton y Teclado, ambas heredan de DispositovoEntrada 
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);//llama al constructor de la clase padre
        this._idRaton = ++Raton.contadorRatones;//incrementa el contador y le asigna un ID unico al objeto raton
    }
    get idRaton(){
        return this._idRaton;
    }
    //Metodo toString devuelve una representacion textual del objeto
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}//Creamos objeto raton y asignamos sus valores 
let raton1 = new Raton('USB', 'Genius');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth', 'Axxus');
console.log(raton2.toString());   

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;

    }
}
let teclado1 = new Teclado('USB', 'Lenovo');
console.log(teclado1.toString());
let teclado2 = new Teclado('Blutooth', 'Samsung');
console.log(teclado2.toString());  


//Clase iindependiente Monitor
class Monitor {
    static contadorMonitores = 0;
    
    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}]`;

    }
}
let monitor1 = new Monitor('DELL', 21);
console.log(monitor1.toString());
let monitor2 = new Monitor('HP', 15);
console.log(monitor2.toString()); 


//Clase computadora recibe objetos de otras clases de parametros
class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre}\n ${this._monitor}\n ${this._teclado}\n ${this._raton}`;
    }

}
let computadora1 = new Computadora('GAMER', monitor1, teclado1, raton1 );
console.log(computadora1.toString());
console.log(`${computadora1}`);
let computadora2 = new Computadora('PC ESCRITORIO', monitor2, teclado2, raton2);
console.log(`${computadora2}`);


//Creamos la clase orden para realizar una lista de compras de computadoras
class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    //Metodo para agregar una instancia de computadora al array
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    //Metodo para recorrer el array e imprimir el detalle de la orden
    mostrarOrden(){
        let computadorasOrden = '';//variable temporal
        for(let computadora of this._computadoras){//usamos ciclo for-of para iterar sobre los elementos del array
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);

    }

}
//Creacion de ordenes y agregacion de productos
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();





