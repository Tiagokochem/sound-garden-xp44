const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com";

const formCadastroEvento = document.querySelector('#cadastro-evento');

formCadastroEvento.addEventListener('submit', () => {
    event.preventDefault(); //evita que a página seja recarreada

    const inputNome =  document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");

    alert(inputNome.value);

})


