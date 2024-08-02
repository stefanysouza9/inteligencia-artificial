const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.queryCommandValue(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voce se depara com uma nova tecnologia, um chat que consegue responder"
        alternativas: [
            "Isso e assustador!",
            "Isso e maravilhoso!"
        ]
     
    },
    { 
        enuciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial (IA) uma professora de"
        alternativas: [
            "Ultilizar uma ferramenta de busca na internet que ultiliza IA para que ela ajude a encontrar a informação",
            "Escrever o trabalho com base nas convesas que teve com colegas, algumas pesquisa na internet e com",
        ]
    },
{
    enunciado: "Apos a elaboração do trabalho, a professora realizou um debate entre a turma para entender";
    alternativas: [
        "Defende a ideia de que a IA pode criar novas oportunidades de emprego ",
        "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 2";
    alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ] 
  }    
  {
    enunciado: "Pergunta 2";
    alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ] 
  } {
    enunciado: "Pergunta 2";
    alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ] 
  } 