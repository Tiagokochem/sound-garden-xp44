const PreencherForm = document.querySelector("#formulario")
console.log(PreencherForm);


PreencherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const PreencherObjeto = new FormData(PreencherForm);
    const atracoes = PreencherObjeto.get('atracoes-input').split(',');
    
    const body = 
        {
            "name": PreencherObjeto.get('nome-input'),
            "poster": "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/08/rock-in-rio-1985-cartaz.jpg",
            "attractions": atracoes,
            "description": PreencherObjeto.get('descricao-input'),
            "scheduled": PreencherObjeto.get('data-input'),
            "number_tickets": PreencherObjeto.get('lotacao-input'),
          }

    console.log(body);

    fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
        "method" : "POST", 
        "headers": {"content-type": "application/json"},
        "body" : JSON.stringify(body)
    }).then(response => console.log(response)
).then( () => {
    alert("Evento Criado")
    window.location('admin.html');
}
).catch(error => console.error(error))

});