// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa el nombre del amigo.");
    return;
  }
  amigos.push(nombre);
  actualizarLista();
  limpiarCaja();
  console.log(amigos);
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>Amigo ${i + 1}: ${amigos[i]} 
    <button onclick="eliminarAmigo(${i})" >Eliminar</button>
    </li>`;
  }
}

function limpiarCaja() {
  let valorCaja = (document.querySelector("#amigo").value = "");
}

function eliminarAmigo(indice) {
  amigos.splice(indice, 1);
  actualizarLista();
  console.log(indice);
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  const sorteoAmigos = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[sorteoAmigos];
  console.log(amigoSorteado);

  //Mostrar Resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto elegido es ${amigoSorteado}</li>`;

  //Eliminar al amigo ya elegido
  amigos.splice(sorteoAmigos, 1);
  actualizarLista();

  // Mensaje cuando todo los amigos se han sorteado
  if (amigos.length === 0) {
    resultado.innerHTML += `<li>¡Todos los amigos han sido sorteados!</li>`;
  }
}
