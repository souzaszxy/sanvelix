const frases = [
  
  "Acredite em você e no seu potencial.",
  "Cada pequeno passo te aproxima do seu objetivo.",
  "Não desista: grandes conquistas levam tempo.",
  "Você é capaz de superar seus desafios.",
  "Transforme seus obstáculos em oportunidades.",
  "O sucesso começa quando você decide tentar.",
  "Continue avançando, mesmo que seja devagar.",
  "Seu esforço de hoje constrói o seu amanhã.",
  "Erros fazem parte do caminho para o crescimento.",
  "Você consegue mais do que imagina."
];
const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase() {
let indice = Math.floor(Math.random()* frases.length)
fraseTexto.textContent = frases [indice]

 }

btnFrase.addEventListener("click", function(){
mostrarFrase()

})

