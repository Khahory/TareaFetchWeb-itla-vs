const data = new FormData();
data.append('nombre', 'nombre');
data.append('apellido', 'apellido');
data.append('telefono', 'telefono');
fetch('http://www.raydelto.org/itla/agenda/', {
        method: 'POST',
        body: data
    })
    .then(function(response) {
        if (response.ok) {
            return response.text()
        } else {
            throw "Error en la llamada Ajax";
        }

    })
    .then(function(texto) {
        console.log(texto);
    })
    .catch(function(err) {
        console.log(err);
    });


var contenido = document.querySelector('#contenido')

function traer() {
    fetch('http://www.raydelto.org/itla/agenda/')
        .then(repuesta => repuesta.json())
        .then(datos => {
            let resultado = "<p>Estos son los datos del json</p>";
            console.log(datos);
            datos.forEach(contacto => {
                resultado += `
                <ul class="menu">
                  <li class="menu">El nombre es: ${contacto.nombre}</li>
                  <li class="menu">El apellido es: ${contacto.apellido}</li>
                  <li class="menu">El telefono es: ${contacto.telefono}</li>
                  <br>
                </ul>
                `;
            });
            // crear etiquetas dinamicamente
            document.querySelector("#resultado").innerHTML = resultado;
        });
}