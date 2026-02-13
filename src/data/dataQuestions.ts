export const DATA_QUESTIONS = [
  {
    id: 1,
    question: "O que é JavaScript?",
    options: [
      "Uma biblioteca de Java para desenvolvimento web",
      "Uma linguagem de programação interpretada, de alto nível, orientada a objetos e executada no navegador",
      "Um framework CSS para estilização de páginas",
      "Um banco de dados NoSQL"
    ],
    correctAnswer: 1,
    questionIndicator: "question-01"
  },
  {
    id: 2,
    question: "Qual a diferença entre == e === em JavaScript?",
    options: [
      "Não há diferença, ambos fazem a mesma coisa",
      "== é mais rápido que ===",
      "== compara valores com coerção de tipo, === compara valor e tipo sem coerção",
      "=== só funciona com números"
    ],
    correctAnswer: 2,
    questionIndicator: "question-02"
  },
  {
    id: 3,
    question: "Como declarar uma função em JavaScript?",
    options: [
      "func minhaFuncao() {}",
      "def minhaFuncao() {}",
      "void minhaFuncao() {}",
      "function minhaFuncao() {} ou const minhaFuncao = () => {}"
    ],
    correctAnswer: 3,
    questionIndicator: "question-03"
  },
  
  {
    id: 4,
    question: "O que é o 'this' em JavaScript?",
    options: [
      "Uma referência ao contexto de execução atual, que depende de como a função foi chamada",
      "Uma palavra reservada que sempre aponta para o objeto window",
      "Uma variável global disponível em todos os escopos",
      "Um método nativo do JavaScript"
    ],
    correctAnswer: 0,
    questionIndicator: "question-04"
  },
  {
    id: 5,
    question: "O que são Promises em JavaScript?",
    options: [
      "Funções que garantem a execução de código",
      "Objetos que representam a eventual conclusão ou falha de uma operação assíncrona",
      "Variáveis que armazenam múltiplos valores",
      "Métodos para criar loops infinitos"
    ],
    correctAnswer: 1,
    questionIndicator: "question-05"
  },
  {
    id: 6,
    question: "Qual a diferença entre null e undefined?",
    options: [
      "São exatamente a mesma coisa",
      "null é usado para números e undefined para strings",
      "undefined significa que uma variável foi declarada mas não inicializada, null é um valor atribuído intencionalmente para representar 'sem valor'",
      "undefined não existe em JavaScript, apenas null"
    ],
    correctAnswer: 2,
    questionIndicator: "question-06"
  },
  {
    id: 7,
    question: "O que é destructuring em JavaScript?",
    options: [
      "Um método para deletar propriedades de objetos",
      "Uma forma de converter strings em arrays",
      "Um tipo de loop para percorrer arrays",
      "Uma sintaxe para extrair valores de arrays ou propriedades de objetos em variáveis distintas"
    ],
    correctAnswer: 3,
    questionIndicator: "question-07"
  },
  {
    id: 8,
    question: "O que é um closure em JavaScript?",
    options: [
      "Uma função que tem acesso ao escopo externo mesmo após a função externa ter sido executada",
      "Uma função que fecha a aplicação",
      "Um método para encerrar loops",
      "Uma sintaxe para criar objetos privados"
    ],
    correctAnswer: 0,
    questionIndicator: "question-08"
  },
  {
    id: 9,
    question: "Como funciona o Event Loop no JavaScript?",
    options: [
      "É um loop infinito que executa todo o código JavaScript",
      "Monitora a Call Stack e Task Queue, executando tarefas da fila quando a stack está vazia, permitindo operações assíncronas em single-thread",
      "É responsável apenas por eventos de clique do usuário",
      "Executa múltiplas threads simultaneamente"
    ],
    correctAnswer: 1,
    questionIndicator: "question-09"
  },
  {
    id: 10,
    question: "O que é hoisting em JavaScript?",
    options: [
      "Uma técnica para otimizar performance de loops",
      "Um método para elevar elementos na DOM",
      "O comportamento do JavaScript de mover declarações de variáveis e funções para o topo do escopo durante a compilação",
      "Uma forma de importar módulos"
    ],
    correctAnswer: 2,
    questionIndicator: "question-10"
  },
];
