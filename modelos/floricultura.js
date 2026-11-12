// Modelo fictício para floricultura. Valores em centavos e contatos não configurados.
export const loja = {
  nome: "Jardim de Afetos · Exemplo",
  categoria: "Flores e arranjos · Demonstração",
  chamada: "Flores que transformam momentos em lembranças.",
  descricao: "Escolha um buquê, uma planta ou um arranjo especial e veja como organizar seu pedido pelo celular.",
  horario: "Seg a sáb · 9h às 18h (exemplo)",
  local: "Localidade ilustrativa · Brasil",
  whatsapp: "",
  aceitaEntrega: true,
  tituloCatalogo: "Flores e arranjos",
  icone: "💐",
  iconeSecundario: "🌷",
  observacoesPlaceholder: "Ex.: cor preferida, mensagem do cartão, data desejada...",
};

export const produtos = [
  { id: "buque-campo", nome: "Buquê do campo", categoria: "Buquês", descricao: "Flores variadas em tons alegres, com embalagem delicada.", preco: 7990, emoji: "💐", destaque: "Mais escolhido" },
  { id: "buque-rosas", nome: "Buquê de rosas", categoria: "Buquês", descricao: "Rosas clássicas em embalagem para presente.", preco: 11990, emoji: "🌹" },
  { id: "buque-girassois", nome: "Buquê de girassóis", categoria: "Buquês", descricao: "Girassóis para alegrar um dia especial.", preco: 8990, emoji: "🌻" },
  { id: "arranjo-mesa", nome: "Arranjo de mesa", categoria: "Arranjos", descricao: "Composição floral em vaso decorativo.", preco: 10990, emoji: "🌸" },
  { id: "arranjo-mini", nome: "Mini arranjo", categoria: "Arranjos", descricao: "Arranjo compacto para presentear.", preco: 4490, emoji: "🌼" },
  { id: "orquidea", nome: "Orquídea em vaso", categoria: "Plantas", descricao: "Planta florida com embalagem de presente.", preco: 9990, emoji: "🪴" },
  { id: "suculenta", nome: "Suculenta em vaso", categoria: "Plantas", descricao: "Planta compacta de fácil cuidado.", preco: 2490, emoji: "🌵" },
  { id: "cartao-floral", nome: "Cartão com mensagem", categoria: "Complementos", descricao: "Cartão para acompanhar flores e presentes.", preco: 990, emoji: "💌" },
];
