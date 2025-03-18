// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let ingreso = document.getElementById ("Amigos")
let listado =  document.getElementById ("Listado_Amigos")

function Agregrar_Amigo(){
    let Amigos = ingreso.value;

    if (Amigos =="") {
        alert("Por favor, Inserte un nombre");
        estableceBlanco();
        return
    }

    amigos.push(Amigos);
    estableceBlanco();
    console.log(amigos)
    mostrarAmigos();

}

function estableceBlanco(){
    ingreso.value = "";
}

function mostrarAmigos(){
    listado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        listado.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function Sortear_Amigo() {  
    const friendList = document.querySelectorAll('#Listado_Amigos li');  
    
    if (friendList.length === 0) {  
        alert('No hay amigos en la lista para sortear.');  
        return;  
    }  

    let randomIndex = Math.floor(Math.random() * friendList.length);   
    let selectedFriend = friendList[randomIndex].textContent;   
    document.getElementById('resultado').innerHTML = `<li>¡Tu amigo secreto es: ${selectedFriend}! </li>`;   
}  

