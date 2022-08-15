const URL = "https://xp41-soundgarden-api.herokuapp.com/events"

const inputName = document.querySelector('#nome');
const inputPoster = document.querySelector('#poster');

const id = new URLSearchParams(window.location.search).get('id');


async function listarEventos (){
    const resposta = await fetch(URL)
    return resposta.json()
}

listarEventos()