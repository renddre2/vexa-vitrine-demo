export function dinheiro(centavos) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(centavos / 100);
}

export function alterarQuantidade(carrinho, id, diferenca) {
  if (!Number.isInteger(diferenca) || !id) throw new Error("Item inválido.");
  const quantidade = Math.max(0, (carrinho[id] ?? 0) + diferenca);
  const proximo = { ...carrinho };
  if (quantidade === 0) delete proximo[id];
  else proximo[id] = quantidade;
  return proximo;
}

export function itensSelecionados(carrinho, produtos) {
  return produtos
    .filter((produto) => Number.isInteger(carrinho[produto.id]) && carrinho[produto.id] > 0)
    .map((produto) => ({ ...produto, quantidade: carrinho[produto.id] }));
}

export function totalPedido(itens) {
  return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

export function montarMensagem({ loja, itens, cliente, modalidade, endereco, observacoes }) {
  if (!itens.length) throw new Error("Adicione pelo menos um produto.");
  if (!cliente.trim()) throw new Error("Informe seu nome.");
  if (modalidade === "Entrega" && !endereco.trim()) throw new Error("Informe o endereço de entrega.");

  const linhas = [
    `Olá, ${loja}! Gostaria de fazer um pedido:`,
    "",
    ...itens.map((item) => `${item.quantidade}x ${item.nome} — ${dinheiro(item.preco * item.quantidade)}`),
    "",
    `*Subtotal: ${dinheiro(totalPedido(itens))}*`,
    `*Nome:* ${cliente.trim()}`,
    `*Modalidade:* ${modalidade}`,
  ];
  if (modalidade === "Entrega") linhas.push(`*Endereço:* ${endereco.trim()}`);
  if (observacoes.trim()) linhas.push(`*Observações:* ${observacoes.trim()}`);
  linhas.push("", "Pode confirmar a disponibilidade e o valor final (incluindo eventual entrega)?");
  return linhas.join("\n");
}

export function linkWhatsApp(numero, mensagem) {
  const apenasDigitos = numero.replace(/\D/g, "");
  // Números internacionais válidos, sem zeros e sem números de exemplo.
  if (!/^[1-9]\d{10,14}$/.test(apenasDigitos)) return null;
  return `https://wa.me/${apenasDigitos}?text=${encodeURIComponent(mensagem)}`;
}
