// Modelo fictício para loja de presentes. Valores em centavos. Nenhum pedido real é enviado.
export const loja = {
  nome: "Afeto & Papel · Exemplo",
  categoria: "Presentes criativos · Demonstração",
  chamada: "Pequenos gestos, grandes lembranças.",
  descricao: "Encontre lembranças, kits e mimos para ocasiões especiais. Monte seu pedido e confira a prévia pelo WhatsApp.",
  horario: "Seg a sáb · 10h às 19h (exemplo)",
  local: "Localidade ilustrativa · Brasil",
  whatsapp: "",
  aceitaEntrega: true,
  tituloCatalogo: "Mimos e presentes",
  icone: "🎁",
  iconeSecundario: "💌",
  observacoesPlaceholder: "Ex.: nome na embalagem, mensagem para cartão...",
};

export const produtos = [
  { id: "kit-carinho", nome: "Kit carinho", categoria: "Kits", descricao: "Caixa com pequenos mimos para presentear.", preco: 6490, emoji: "🎁", destaque: "Para presentear" },
  { id: "kit-escrita", nome: "Kit papelaria", categoria: "Kits", descricao: "Caderno, caneta e adesivos decorativos.", preco: 4990, emoji: "📓" },
  { id: "caneca", nome: "Caneca ilustrada", categoria: "Presentes", descricao: "Caneca com estampa criativa.", preco: 3290, emoji: "☕" },
  { id: "vela", nome: "Vela perfumada", categoria: "Presentes", descricao: "Vela decorativa de aroma suave.", preco: 3890, emoji: "🕯️" },
  { id: "porta-retrato", nome: "Porta-retrato", categoria: "Presentes", descricao: "Moldura para um momento especial.", preco: 2790, emoji: "🖼️" },
  { id: "cartao", nome: "Cartão artesanal", categoria: "Papelaria", descricao: "Cartão para escrever uma mensagem afetiva.", preco: 990, emoji: "💌" },
  { id: "caderno", nome: "Caderno criativo", categoria: "Papelaria", descricao: "Caderno com capa ilustrada.", preco: 2490, emoji: "📔" },
  { id: "sacola", nome: "Embalagem especial", categoria: "Papelaria", descricao: "Sacolinha para acompanhar o presente.", preco: 790, emoji: "🛍️" },
];
