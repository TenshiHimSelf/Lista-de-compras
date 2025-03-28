const titulo = document.getElementById('titulo');
const botonm =document.getElementById('boton');
const botonVarios = document.getElementById('boton-varios');
const botonFondo = document.getElementById('boton-fondo');
const botonFiltro = document.getElementById('boton-filtro');

boton.textContent = 'Agregar';
botonVarios.textContent = 'Varios';
botonFondo.textContent = 'Cambiar Fondo';
botonFiltro.textContent = 'Cambiar Filtro';


document.body.style.backgroundColor = 'Aliceblue';



const cajaTexto = document.getElementById('caja-texto');
const listaArticulos = document.getElementById('lista-articulos');


boton.addEventListener('click', function(){
  const nuevoArticulo = cajaTexto.value.trim();
  if(nuevoArticulo !== ''){
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nuevoArticulo;
    listaArticulos.appendChild(nuevoElemento);
    cajaTexto.value = ''
  }else{
    alert('Porfavor, digite un articulo')
  }
})

const articulosVarios = ['Papas', 'Pastas', 'Galletas', 'Azucar'];

botonVarios.addEventListener('click', function(){
  articulosVarios.forEach(function(articulo){
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = articulo;
    listaArticulos.appendChild(nuevoElemento);
  })
});



 const contenedor = document.querySelector('.contenedor')

function generarColorAlatorio(){
  const letras = '0123456789ABCDEF';
  let color = '#';  
  for(let i = 0; i < 6; i++){
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

botonFondo.addEventListener('click',() =>{
  const colorAleatirio = generarColorAlatorio();
  contenedor.style.backgroundColor = colorAleatirio;
})





botonFiltro.addEventListener('click', () => {
  const articulo = cajaTexto.value.trim();
  if (articulo.charAt(0).toLowerCase() === 'c') {
    const nuevoElemento = document.createElement('li'); 
    nuevoElemento.textContent = articulo; 
    listaArticulos.appendChild(nuevoElemento);
    cajaTexto.value = '';
  } else {
    alert('El articulo debe de empezar con la letra C');
  }
});

const botonLimpiar = document.getElementById('limpiar'); 
botonLimpiar.addEventListener('click', () => {
  listaArticulos.innerHTML = '';
})


const botonTema = document.getElementById('boton-tema');
const body = document.body;

body.classList.add('claro');
botonTema.addEventListener('click', () =>{
  if(body.classList.contains('claro')){
    body.classList.remove('claro');
    body.classList.add('oscuro')
  }else{
    body.classList.remove('oscuro');
    body.classList.add('claro')
  }
});