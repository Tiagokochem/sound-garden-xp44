const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com";

const inputNome =  document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

//QueryStrin
//Tratamento de caracteres especiais

const prencherCampos = (dados) => {
    const{name, poster, attractions, description, scheduled, number_tickets } = dados; // ver se precisa de ;

    inputNome.value = name;
    inputAtracoes.value = attractions; //tratamento de virgula,
    inputDescricao.value = description;
    inputData.value = scheduled; // tratamento pra data
    inputLotacao.value = number_tickets;
    inputBanner.value = poster;

}

const getEventoPorId = (id) => {
    fetch(`${SOUND_URL}/events/${id}`)
    .then((response) => response.json())
    .then(prencherCampos);
}