import test from "node:test";
import assert from "node:assert/strict";
import { modelos } from "../modelos.js";
import { alterarQuantidade, itensSelecionados, linkWhatsApp, montarMensagem, totalPedido } from "../pedido.js";

test("os três modelos têm catálogo válido e pedidos apenas ilustrativos", () => {
  assert.deepEqual(Object.keys(modelos), ["confeitaria", "lanchonete", "presentes"]);

  for (const [nome, { loja, produtos }] of Object.entries(modelos)) {
    assert.ok(loja.nome && loja.chamada && loja.local, nome);
    assert.equal(loja.whatsapp, "", nome);
    assert.equal(produtos.length, 8, nome);
    assert.equal(new Set(produtos.map((produto) => produto.id)).size, produtos.length, nome);
    assert.ok(produtos.every((produto) => produto.nome && produto.categoria && Number.isInteger(produto.preco) && produto.preco > 0), nome);

    const carrinho = alterarQuantidade({}, produtos[0].id, 2);
    const itens = itensSelecionados(carrinho, produtos);
    assert.equal(totalPedido(itens), 2 * produtos[0].preco);
    const mensagem = montarMensagem({
      loja: loja.nome,
      itens,
      cliente: "Teste",
      modalidade: "Entrega",
      endereco: "Endereço fictício",
      observacoes: "Teste ilustrativo",
    });
    assert.match(mensagem, /Endereço fictício/);
    assert.equal(linkWhatsApp(loja.whatsapp, mensagem), null);
  }
});

test("o seletor escolhe apenas modelos conhecidos", async () => {
  for (const [parametro, esperado] of [
    ["?modelo=confeitaria", "confeitaria"],
    ["?modelo=lanchonete", "lanchonete"],
    ["?modelo=presentes", "presentes"],
    ["?modelo=desconhecido", "confeitaria"],
  ]) {
    globalThis.location = { search: parametro };
    const selecionado = await import(`../modelos.js?teste=${encodeURIComponent(parametro)}`);
    assert.equal(selecionado.modeloAtual, esperado);
    assert.equal(selecionado.produtos, selecionado.modelos[esperado].produtos);
  }
  delete globalThis.location;
});
