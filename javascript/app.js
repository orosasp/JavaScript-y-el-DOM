/** DocumentLoaded
 * Aunque el DOM aun no se aya construido, ya podemos usar nuestro objeto document
 * El evento DOMContentLoaded es lanzado cunado la pagina web llega a un punto donde
 * el HTML ya fue parseado y el DOM ya fue construido
 *
 * Siempre que necesitemos ejecutar ciertas acciones y nuestro javascript lo ayamos
 * colocado dentro de la etiqueta <head> vamos a tener que utilizar el evento DOMContentLoaded
 *
 * Pero generalmente es mucho mejor que coloquemos nuestra etiqueta script despues de
 * que el html y el css ayan cargado, de esta forma en conexiones lentas el usuario final tendra
 * una mejor experiencia con nuestra pagina y en lugar de visualizar una pagina web en blanco
 * ya podra interactuar con el HTML y el CSS que previamente abran cargado
 *  */
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('El DOM ya fue construido');
//   /** Obtener elementos por ID */
//   const title = document.getElementById('title');
//   const description = document.getElementById('description');

//   // Para modificar texto de un elemento
//   title.innerHTML = 'Cursos';
//   // description.innerHTML = 'Listado de cursos';
// });

/** Obtener elementos por ID */
const title = document.getElementById('title');
const description = document.getElementById('description');

// Para modificar texto de un elemento
title.innerHTML = 'Cursos';
description.innerHTML = 'Listado de cursos';

// console.log(title);
// console.log(description);

/** Obtener elementos por clase */
// const items = document.getElementsByClassName('list-group-item');
// for (let i = 0; i < items.length; i++) {
//   const element = items[i];
//   console.log(element);
// }

/** Obtener elementos por etiqueta */
// const items = document.getElementsByTagName('li');
// for (let i = 0; i < items.length; i++) {
//   if (i % 2 == 0) {
//     let element = items[i];
//     element.style.background = "#f2f2f2";
//   }
//   console.log(element);
// }

/** Obtener elementos por CSS
 * Si existen varios elementos con es misma clase, querySelector
 * va a retornar la primera que cumpla con la regla. La busqueda
 * la va a hacer de forma descendente.
 *
 * Lo interesante de ocupar querySelector es que podemos buscar
 * elementos mediante reglas CSS mas complejas
 *
 */
// const element = document.querySelector('#first-course');
// const element = document.querySelector('.list-group-item');
// const element = document.querySelector('li');
// const element = document.querySelector('div.row > ul.list-group > li');
// const items = document.querySelectorAll('li:nth-child(odd)'); // Pares
const items = document.querySelectorAll('li:nth-child(even)'); // Impares
for (let i = 0; i < items.length; i++) {
  let element = items[i];
  element.style.background = '#f2f2f2';
}

/** Elementos hijos */
// const list = document.querySelector('ul');
// Para saber la cantidad de hijos que posee un elemento se hace
// mediante el atributo childElementCount
// console.log(list.childElementCount);

// Si queremos obtener el listado de hijos lo vamos a hacer
// mediante el atributo childres
// console.log(list.children);
// for (let i = 0; i < list.children.length; i++) {
//   console.log(list.children[i]);
// }
// Accede a hijos especificos
// console.log(list.children[0]);
// console.log(list.children[2]);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// Una vez accedido a los elementos hijos podemos acceder a sus atributos
// podemos modificarlos o leerlos
// console.log(list.firstElementChild.innerHTML);
// console.log(list.lastElementChild.innerHTML);

/** Elementos hermanos y ansestros */
// const element = document.querySelector('div.row > ul.list-group > li');
// console.log(element.parentElement); // Obtiene el elemento padre
// console.log(element.parentElement.parentElement); // Obtiene el elemento abuelo
// console.log(element.nextElementSibling); // Obtiene el elemento hermano
// console.log(element.nextElementSibling.nextElementSibling); // Obtiene el siguiente elemento hermano
// const lastElement = document.getElementById('last-course'); // Ultimo elemento por id
// console.log(lastElement);
// console.log(lastElement.previousElementSibling); // Obtiene el elemento previo

/** Nodos
 * Son los elementos mas pequeños que se encuentran en el arbol DOM
 */
// const element = document.getElementById('first-course');
// console.log(element.childElementCount);
// console.log(element.childNodes.length);
// console.log(element.childNodes);

/** innerHTML es un atributo de lectura y escritura para leer y modificar */
// description.textContent = 'Listado de cursos';
// description.innerHTML = '<strong>' + description.textContent + '</strong>';
// console.log(description.innerHTML);
// console.log(description.textContent); // Obtiene el texto de un elemento de un node

/** Evento de clic */
const button = document.querySelector('.btn.btn-primary');
// button.addEventListener('dblclick', function () { //Dobre clic
//   console.log('Hola mundo');
// });

/** Objeto target */
// button.addEventListener('click', function (e) {
//   if (title.style.display != 'none') {
//     title.style.display = 'none';
//     description.style.display = 'none';
//     // button.textContent = 'Mostrar';
//     // e.target.textContent = 'Mostrar';
//     this.textContent = 'Mostrar';
//   } else {
//     title.style.display = 'block';
//     description.style.display = 'block';
//     // button.textContent = 'Ocultar';
//     // e.target.textContent = 'Ocultar';
//     this.textContent = 'Ocultar';
//   }
// });

/** Eventos del mouse */
// button.addEventListener('mouseenter', function () {
//   this.className = 'btn btn-danger';
// });

// button.addEventListener('mouseout', function () {
//   this.className = 'btn btn-primary';
// });

/** setTimeOut */
// setTimeout(
//   function (p1, p2, p3) {
//     console.log(p1);
//     console.log(p2);
//     console.log(p3);
//   },
//   3000,
//   'argumento1',
//   'argumento2',
//   'argumento3'
// );

/** Eventos del teclado */
// const input = document.getElementById('input');

// input.addEventListener('keydown', function (e) {
//   console.log('Tecla presionada ' + e.key);
// });

/** Evento submit */
// Para obtener los valores de input vamos a utillizar el atributo value
// const form = document.getElementById('course-form');
// console.log(form);
// form.addEventListener('submit', function (e) {
//   e.preventDefault(); // Previene el comportamineto default de un form evitando recargar la pagina para mandar los valores aun servidor
//   let title = document.getElementById('title-form').value;
//   let description = document.getElementById('description-form').value;
//   console.log(title);
//   console.log(description);
// });

/**  Eventos por cambio de valor */
// const checkbox = document.getElementById('checkbox');
// let title_form = document.getElementById('title-form');
// title_form.addEventListener('change', function () {
//   console.log('Cambio de valir');
// });

/** Event Bubbling
 * Algo interesante en los eventos de javascript es que estos no se detienen en el evento que los disparo
 * sino que se propagan, la propagacion se hara a todos los ancestros hasta llegar al nodo padre
 * es decir de forma ascendente.
 *
 * A la propagacion de eventos lo vamos a conocer como Event Bubbling
 *
 * Conocer como se propagan los eventos en nuestro DOM nos permitira crear paginas web aun mas robustas
 * y con un mejor preformance *
 */

/** Propagación de eventos
 *
 * this modifica el valor segun el evento se baya propagando, caso contrario ocurre con target
 * target almacena el elemento que disparo el evento y el valor se mantiene a pesar de la propagacion
 */
const element = document.querySelector('li');
const list = document.querySelector('ul');
// const div_row = document.querySelector('.row');
// const div_container = document.querySelector('.container');
// const body = document.querySelector('body');

// element.addEventListener('click', showMessage);
// list.addEventListener('click', showMessage);
// div_row.addEventListener('click', showMessage);
// div_container.addEventListener('click', showMessage);
// body.addEventListener('click', showMessage);

// for (let element of document.querySelectorAll('*')) {
//   element.addEventListener('click', showMessage);
// }

// function showMessage(e) {
//   console.log('Elemento actual ' + this.tagName);
//   console.log('Elemento que disparo el evento ' + e.target.tagName);
//   console.log('\n');
// }

/** Detener propagación */
// element.addEventListener('click', function (e) {
//   console.log('Clic sobre el elemento');
//   e.stopPropagation();
// });

// list.addEventListener('click', function () {
//   console.log('Clic sobre la lista');
// });

/** Crear nuevos elementos del DOM */
const row = document.querySelector('.row');
const form = document.getElementById('course-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let title = document.getElementById('title-form').value;
  let description = document.getElementById('description-form').value;

  create_card(title, description);
});

// function create_card_by_innerHTML(title, description) {
//   let html = `<div class="col-sm-6 col-md-4">
//   <div class="thumbnail">
//     <div class="caption">
//       <h3 id="title_card">${title}</h3>
//       <p id="description_card">${description}</p>
//       <p>
//         <a href="#" class="btn btn-danger">Acción</a>
//       </p>
//     </div>
//   </div>
// </div>`;
//   row.innerHTML += html;
// }

/** Agregar elementos al DOM */
// function create_card(title, description) {
//   let div = document.createElement('div');
//   div.className = 'col-sm-6 col-md-4';

//   let divThumbnail = document.createElement('div');
//   divThumbnail.className = 'thumbnail';

//   let divCaption = document.createElement('div');
//   divCaption.className = 'caption';

//   let h3 = document.createElement('h3');
//   h3.textContent = title;

//   let p1 = document.createElement('p');
//   p1.textContent = description;

//   let p2 = document.createElement('p');
//   let a = document.createElement('a');
//   a.className = 'btn btn-danger';
//   a.textContent = 'Eliminar';

//   p2.addEventListener('click', delete_card());

//   p2.appendChild(a);
//   divCaption.appendChild(h3);
//   divCaption.appendChild(p1);
//   divCaption.appendChild(p2);

//   divThumbnail.appendChild(divCaption);
//   div.appendChild(divThumbnail);

//   row.appendChild(div);
// }

/** Eliminar elementos */
let div = null;
function create_card(title, description) {
  div = document.createElement('div');
  div.className = 'col-sm-6 col-md-4';

  let divThumbnail = document.createElement('div');
  divThumbnail.className = 'thumbnail';

  let divCaption = document.createElement('div');
  divCaption.className = 'caption';

  let h3 = document.createElement('h3');
  h3.textContent = title;

  let p1 = document.createElement('p');
  p1.textContent = description;

  let p2 = document.createElement('p');
  let a = document.createElement('a');
  a.className = 'btn btn-danger';
  a.textContent = 'Eliminar';

  p2.addEventListener('click', delete_card);
  p2.appendChild(a);

  divCaption.appendChild(h3);
  divCaption.appendChild(p1);
  divCaption.appendChild(p2);

  divThumbnail.appendChild(divCaption);
  div.appendChild(divThumbnail);

  row.appendChild(div);
}

function delete_card(e) {
  // Necesitamos el padre y el elemento a eliminar que debe de ser un hijo del padre
  let ancestor = getAncestor(e.target, 4);
  row.removeChild(ancestor);
}

function getAncestor(ancestor, level) {
  if (level == 0) {
    return ancestor;
  }
  level--;
  return getAncestor(ancestor.parentElement, level);
}
