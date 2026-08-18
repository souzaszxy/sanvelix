let tarefas = [];
let contadorId = 0;

let inputText = document.querySelector(".inputText");
let btnEnviar = document.querySelector(".btnEnviar");
let lista = document.querySelector(".lista");

btnEnviar.addEventListener("click", function() {
    adicionarTarefa();
});

inputText.addEventListener("keydown", function(event){
    if (event == "Enter") {

adicionarTarefa();



    }



})

function adicionarTarefa() {
    let texto = inputText.value.trim();

    if (texto !== "") {
        contadorId++;
        tarefas.push({ id: contadorId, tarefa: texto, concluido: false });
        console.log(tarefas);

        inputText.value = "";
    }
}