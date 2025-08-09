// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  if (nombre === "") {
    alert("Por favor ingresa el nombre del amigo");
    return;
  }

  amigos.push(nombre);

  mostrarLista();

  document.getElementById("amigo").value = "";

  //console.log(amigos);
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const sorteoAmigos = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[sorteoAmigos];
    console.log(amigoSorteado);

    //Mostrar Resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo elegido es ${amigoSorteado}</li>`;
}
