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
        "Me preocupo com as pessoas que perderam o seus empregos para maquinas e defendem a importancia "
    ]
  },
  {
    enunciado: "Voce tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento";
    alternativas: [
        "Criar uma imagem utilizando uma plataforma de design como Paint",
        "Criar uma imagem utilizando um gerador de imagem IA."
    ] 
  }    
  {
    enunciado: "Voce tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento";
    alternativas: [
        "Criar uma imagem utilizando uma plataforma de design como Paint",
        "Criar uma imagem utilizando um gerador de imagem IA."
  } {
    enunciado: "Voce tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento";
    alternativas: [
        "Escrever comando para o chat é uma forma de contribuir com o trabalho, por isso não é um problema",
        "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda maquína erra"
    ] 
  },
]; 