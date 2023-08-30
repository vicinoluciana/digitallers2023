window.onload = function() {
    window.datos = [
        { id: 1, nombre: "El mejor curso!", done: false },
        { id: 2, nombre: "Es super facil", done: false },
        { id: 3, nombre: "En un año ya triplique mis ingresos", done: false },
        { id: 4, nombre: "Ahora soy full stack", done: false }
    ];
    mostrarArreglo();
}

function agregarElemento() {
    let dato = document.getElementById('texto').value.trim();
    if (dato !== '') {
        datos.push({ id: datos.length + 1, nombre: dato, autor: "Usuario", done: false });
        document.getElementById('texto').value = '';
        mostrarArreglo();
    } else {
        Swal.fire('Ingrese un Comentario Primero')
    }
}

function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < datos.length; i++) {
        let dato = datos[i];

        let elementoDiv = document.createElement('div');
        elementoDiv.className = 'elemento';

        // Agregar la imagen
        let imagen = document.createElement('img');
        imagen.src = "//"; // Reemplaza "ruta" con la ubicación de las imágenes
        imagen.className = 'imagen-comentario';
        elementoDiv.appendChild(imagen);

        let nombreParrafo = document.createElement('p');
        nombreParrafo.innerText = dato.nombre;
        elementoDiv.appendChild(nombreParrafo);

        if (dato.id > 4) {
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';
            botonEliminar.setAttribute('data-index', i);
            botonEliminar.className = 'boton-eliminar';
            botonEliminar.onclick = confirmarEliminarElemento;
            elementoDiv.appendChild(botonEliminar);
        }

        resultado.appendChild(elementoDiv);
    }
}


function confirmarEliminarElemento() {
    let index = this.getAttribute('data-index');
    let confirmar = confirm('¿Estás seguro de eliminar este comentario?');

    if (confirmar) {
        datos.splice(index, 1);
        mostrarArreglo();
    }
}





// Función para mostrar u ocultar el botón de volver al principio
function mostrarVolverArriba() {
    const botonVolverArriba = document.getElementById("volver-arriba");
    if (window.scrollY > 300) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }
}

// Event listener para detectar el desplazamiento del usuario
window.addEventListener("scroll", mostrarVolverArriba);

// Función para volver al principio de la página
function volverArriba() {
    window.scrollTo(0, 0);
}

// Event listener para el clic en el botón de volver al principio
document.getElementById("volver-arriba").addEventListener("click", volverArriba);