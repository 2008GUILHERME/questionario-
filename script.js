const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você precisa resolver um problema, você prefere:",
        alternativas: [
            {
                texto: "Fazer cálculos",
                afirmacao: "Você demonstra raciocínio lógico e analítico, típico de alguém das Exatas."
            }, 
            {
                texto: "Conversar",
                afirmacao: "Você valoriza interpretação e comunicação, características fortes das Humanas."
            }
        ]
    },
    {
        enunciado: "Qual disciplina na escola te atraía mais?",
        alternativas: [
            {
                texto: " Matemática, Física ou Química.",
                afirmacao: "Você tem facilidade em lidar com números e experimentos — um perfil de Exatas."
            },
            {
                texto: " História, Filosofia ou Literatura.",
                afirmacao: "Você gosta de compreender a sociedade e o ser humano — perfil de Humanas."
            }
        ]
    },
    {
        enunciado: "Ao trabalhar em grupo, você costuma:",
        alternativas: [
            {
                texto: "Focar em organizar, estruturar o projeto e cuidar dos resultados práticos.",
                afirmacao: "Seu jeito prático e objetivo mostra forte inclinação para Exatas."
            },
            {
                texto: "Incentivar a comunicação, a troca de ideias e a criatividade do grupo.",
                afirmacao: "Sua habilidade de lidar com pessoas destaca um perfil mais de Humanas."
            }
        ]
    },
    {
        enunciado: "Se tivesse que escolher um passatempo, seria:",
        alternativas: [
            {
                texto: "Resolver quebra-cabeças, jogar xadrez ou programar algo.",
                afirmacao: "Você curte desafios lógicos, reforçando o lado das Exatas."
            },
            {
                texto: "Ler livros, escrever textos ou discutir sobre temas sociais.",
                afirmacao: "Você se conecta com ideias e histórias, reforçando o lado das Humanas."
            }
        ]
    },
    {
        enunciado: "Quando pensa no futuro profissional, você imagina: ",
        alternativas: [
            {
                texto: "Trabalhar com tecnologia, engenharia, finanças ou áreas que exigem precisão.",
                afirmacao: " Você se vê em áreas técnicas e analíticas, confirmando seu perfil de Exatas."
            },
            {
                texto: "trabalhar com comunicação, direito, educação ou áreas ligadas a pessoas.",
                afirmacao: "Você se imagina em carreiras ligadas à interação humana, confirmando seu perfil de Humanas "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Teu perfil é voltado as";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
