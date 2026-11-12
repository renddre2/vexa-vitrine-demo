// Modelo fictício para loja de roupas. Tamanhos e cores devem ser confirmados antes do pedido.
export const loja = {
  nome: "Essência Urbana · Exemplo",
  categoria: "Moda e acessórios · Demonstração",
  chamada: "Peças versáteis para o seu estilo.",
  descricao: "Explore roupas e acessórios, escolha suas peças favoritas e indique tamanho e cor nas observações do pedido.",
  horario: "Seg a sáb · 10h às 19h (exemplo)",
  local: "Localidade ilustrativa · Brasil",
  whatsapp: "",
  aceitaEntrega: true,
  tituloCatalogo: "Moda e acessórios",
  icone: "👗",
  iconeSecundario: "🛍️",
  observacoesPlaceholder: "Ex.: camiseta M azul, vestido G preto, confirmar disponibilidade...",
};

export const produtos = [
  { id: "camiseta-basica", nome: "Camiseta básica", categoria: "Camisetas", descricao: "Malha macia em cores variadas. Informe tamanho e cor.", preco: 4990, emoji: "👕", destaque: "Versátil" },
  { id: "camiseta-estampada", nome: "Camiseta estampada", categoria: "Camisetas", descricao: "Modelo casual com estampa ilustrativa. Informe tamanho.", preco: 5990, emoji: "👕" },
  { id: "camisa-linho", nome: "Camisa de linho", categoria: "Camisas", descricao: "Corte leve para ocasiões especiais. Informe tamanho e cor.", preco: 11990, emoji: "👔" },
  { id: "vestido-midi", nome: "Vestido midi", categoria: "Vestidos", descricao: "Modelo confortável de comprimento médio. Informe tamanho e cor.", preco: 13990, emoji: "👗" },
  { id: "vestido-casual", nome: "Vestido casual", categoria: "Vestidos", descricao: "Peça leve para o dia a dia. Informe tamanho.", preco: 9990, emoji: "👗" },
  { id: "calca-jeans", nome: "Calça jeans", categoria: "Calças", descricao: "Modelagem reta e lavagem clássica. Informe numeração.", preco: 14990, emoji: "👖" },
  { id: "bolsa-casual", nome: "Bolsa casual", categoria: "Acessórios", descricao: "Bolsa compacta de uso diário. Informe cor.", preco: 8990, emoji: "👜" },
  { id: "bone", nome: "Boné ajustável", categoria: "Acessórios", descricao: "Boné em cores variadas. Informe cor preferida.", preco: 3990, emoji: "🧢" },
];
