// almacenar variables div y elementos

let divConfirmaciones = document.querySelector('div.confirmaciones');
let divNumPedido = document.querySelector('div.numero-pedido')
let btnCargar = document.querySelector('button#cargar');
let btnRefrescar = document.querySelector('button#refrescar');
let ul = document.querySelector('div.confirmaciones ul');
let form = document.getElementById('#formulario');
let pedidosLimite = []; // array que almacena pedidos (max 5)

// almacenar variables input

let inputNombre = document.querySelector('#nombre-libro');
let inputAutor = document.querySelector('#nombre-autor');
let inputDir = document.querySelector('#dir-comprador');

class Pedido {
    constructor(titulo, autor, direccion) {
        this.titulo = titulo;
        this.autor = autor;
        this.direccion = direccion
        this.cargarItems(titulo, autor, direccion);
    };

    cargarItems(titulo, autor, direccion) {
        let li = document.createElement('li');
        li.textContent = `El libro titulado ${this.titulo}, del autor  ${this.autor}  será llevado a la dirección: ${this.direccion}`;
        ul.appendChild(li)
    };


};

btnCargar.addEventListener('click', () => {
    if (pedidosLimite.length === 5) {
        return alert('Límite de ítems superado (máx 5)')
    } else {
        if (inputNombre.value && inputAutor.value && inputDir.value) {
            let obj = new Pedido(inputNombre.value, inputAutor.value, inputDir.value);
            pedidosLimite.push(obj);
            // vaciar inputs
            form.reset();
        } else {
            alert('Todos los campos son obligatorios')
        }
        if (pedidosLimite.length === 1) {
            agregarP()
        }
    }
});

// selecciona elementos li y span para eliminar, resetea el formulario si es que tiene valores y resetea 'pedidos límite'
btnRefrescar.addEventListener('click', function () {
    let eliminarLi = document.querySelectorAll('div.confirmaciones li');
    let eliminarSpan = document.querySelectorAll('div.numero-pedido span')
    eliminarLi.forEach(el => el.remove());
    eliminarSpan.forEach(el => el.remove());
    form.reset();
    pedidosLimite = [];
});


// funciones 

// genera un número random del 1 al 1000
function crearNumeroPedido() {
    let num = Math.floor(Math.random() * 1001);
    return num;
}

// agrega el span con el número de pedido a un <p>
function agregarP() {
    let num = crearNumeroPedido();
    let span = document.createElement('span');
    span.textContent = num
    divNumPedido.querySelector('p').appendChild(span)
}