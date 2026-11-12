// Modelo fictício para lanchonete. Valores em centavos. Nenhum pedido real é enviado.
export const loja = {
  nome: "Estação do Sabor · Exemplo",
  categoria: "Lanches e combos · Demonstração",
  chamada: "Seu lanche favorito está a poucos cliques.",
  descricao: "Escolha seu hambúrguer, adicione acompanhamentos e confira como montar um pedido completo pelo celular.",
  horario: "Ter a dom · 18h às 23h (exemplo)",
  local: "Localidade ilustrativa · Brasil",
  whatsapp: "",
  aceitaEntrega: true,
  tituloCatalogo: "Lanches e combos",
  icone: "🍔",
  iconeSecundario: "🍟",
  observacoesPlaceholder: "Ex.: sem cebola, ponto da carne...",
};

export const produtos = [
  { id: "burger-classico", nome: "Burger clássico", categoria: "Hambúrgueres", descricao: "Pão, carne, queijo, alface e molho especial.", preco: 2890, emoji: "🍔", destaque: "Mais pedido" },
  { id: "burger-duplo", nome: "Burger duplo", categoria: "Hambúrgueres", descricao: "Dois hambúrgueres com queijo e molho da casa.", preco: 3890, emoji: "🍔" },
  { id: "burger-veggie", nome: "Burger vegetal", categoria: "Hambúrgueres", descricao: "Hambúrguer de vegetais e salada fresca.", preco: 3290, emoji: "🥬" },
  { id: "batata", nome: "Batata frita", categoria: "Acompanhamentos", descricao: "Porção crocante com tempero especial.", preco: 1690, emoji: "🍟" },
  { id: "aneis", nome: "Anéis de cebola", categoria: "Acompanhamentos", descricao: "Porção para compartilhar.", preco: 1890, emoji: "🧅" },
  { id: "combo-classico", nome: "Combo clássico", categoria: "Combos", descricao: "Burger clássico, batata e bebida.", preco: 4190, emoji: "🥤", destaque: "Combo" },
  { id: "refrigerante", nome: "Refrigerante lata", categoria: "Bebidas", descricao: "Lata de 350 ml, sabor à escolha.", preco: 690, emoji: "🥤" },
  { id: "suco", nome: "Suco natural", categoria: "Bebidas", descricao: "Copo de 300 ml, sabor à escolha.", preco: 1190, emoji: "🍊" },
];
