import { loja, produtos, modelos, modeloAtual, modoDemonstracao } from "./modelos.js";
import { alterarQuantidade, dinheiro, itensSelecionados, linkWhatsApp, montarMensagem, totalPedido } from "./pedido.js";

const $ = (id) => document.getElementById(id);
let carrinho = {};
let categoriaAtual = "Todos";
let mensagemAtual = "";

function botao(texto, classe, acao, rotulo) {
  const elemento = document.createElement("button");
  elemento.type = "button";
  elemento.className = classe;
  elemento.textContent = texto;
  if (rotulo) elemento.setAttribute("aria-label", rotulo);
  elemento.addEventListener("click", acao);
  return elemento;
}

function texto(tag, conteudo, classe) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  elemento.textContent = conteudo;
  return elemento;
}

function atualizarQuantidade(id, diferenca) {
  carrinho = alterarQuantidade(carrinho, id, diferenca);
  $("feedback").textContent = "";
  $("previa").hidden = true;
  renderizarCarrinho();
}

function renderizarFiltros() {
  const filtro = $("filtros");
  filtro.replaceChildren();
  const categorias = ["Todos", ...new Set(produtos.map((produto) => produto.categoria))];
  for (const categoria of categorias) {
    const item = botao(categoria, "filtro", () => {
      categoriaAtual = categoria;
      renderizarFiltros();
      renderizarProdutos();
    });
    item.setAttribute("aria-pressed", String(categoriaAtual === categoria));
    filtro.append(item);
  }
}

function renderizarProdutos() {
  const grade = $("grade-produtos");
  grade.replaceChildren();
  const visiveis = produtos.filter((produto) => categoriaAtual === "Todos" || produto.categoria === categoriaAtual);

  for (const produto of visiveis) {
    const cartao = document.createElement("article");
    cartao.className = "cartao-produto";

    const arte = document.createElement("div");
    arte.className = "arte-produto";
    if (produto.foto) {
      const imagem = document.createElement("img");
      imagem.className = "foto-produto";
      imagem.src = produto.foto;
      imagem.alt = produto.nome;
      imagem.loading = "lazy";
      arte.append(imagem);
    } else {
      arte.append(texto("span", produto.emoji, "emoji-produto"));
    }
    if (produto.destaque) arte.append(texto("span", produto.destaque, "destaque-produto"));

    const corpo = document.createElement("div");
    corpo.className = "corpo-produto";
    corpo.append(texto("span", produto.categoria.toUpperCase(), "categoria-produto"));
    corpo.append(texto("h3", produto.nome));
    corpo.append(texto("p", produto.descricao, "descricao-produto"));

    const linha = document.createElement("div");
    linha.className = "linha-produto";
    linha.append(texto("strong", dinheiro(produto.preco), "preco-produto"));
    linha.append(botao("+", "botao-adicionar", () => atualizarQuantidade(produto.id, 1), `Adicionar ${produto.nome} ao pedido`));
    corpo.append(linha);
    cartao.append(arte, corpo);
    grade.append(cartao);
  }
}

function renderizarCarrinho() {
  const itens = itensSelecionados(carrinho, produtos);
  const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0);
  $("contagem-topo").textContent = String(quantidadeTotal);
  $("contagem-painel").textContent = `${quantidadeTotal} ${quantidadeTotal === 1 ? "item" : "itens"}`;
  $("subtotal").textContent = dinheiro(totalPedido(itens));

  const lista = $("itens-pedido");
  lista.replaceChildren();
  if (!itens.length) {
    lista.append(texto("p", "Seu carrinho ainda está vazio. Escolha seus produtos no catálogo!", "carrinho-vazio"));
    return;
  }

  for (const item of itens) {
    const linha = document.createElement("div");
    linha.className = "item-carrinho";
    linha.append(texto("span", item.emoji, "item-emoji"));

    const detalhes = document.createElement("div");
    detalhes.className = "item-detalhes";
    detalhes.append(texto("strong", item.nome));
    detalhes.append(texto("small", dinheiro(item.preco * item.quantidade)));

    const controles = document.createElement("div");
    controles.className = "controles-qtd";
    controles.append(botao("−", "qtd", () => atualizarQuantidade(item.id, -1), `Diminuir ${item.nome}`));
    controles.append(texto("span", String(item.quantidade)));
    controles.append(botao("+", "qtd", () => atualizarQuantidade(item.id, 1), `Aumentar ${item.nome}`));
    linha.append(detalhes, controles);
    lista.append(linha);
  }
}

function atualizarEntrega() {
  const entrega = document.querySelector('input[name="modalidade"]:checked').value === "Entrega";
  $("campo-endereco").hidden = !entrega;
  $("endereco").required = entrega;
}

function configurarLoja() {
  $("faixa-demo").hidden = !modoDemonstracao;
  $("aviso-catalogo").hidden = !modoDemonstracao;
  $("aviso-rodape").hidden = !modoDemonstracao;
  $("marca-nome").textContent = loja.nome;
  $("marca-icone").textContent = loja.icone;
  $("categoria-loja").textContent = loja.categoria.toUpperCase();
  $("titulo").textContent = loja.chamada;
  $("descricao-loja").textContent = loja.descricao;
  $("arte-principal").textContent = loja.icone;
  $("arte-pequena").textContent = loja.iconeSecundario;
  $("horario").textContent = loja.horario;
  $("local").textContent = loja.local;
  $("titulo-catalogo-texto").textContent = loja.tituloCatalogo;
  $("observacoes").placeholder = loja.observacoesPlaceholder;
  $("nome-rodape").textContent = loja.nome;
  $("opcao-entrega").hidden = !loja.aceitaEntrega;
  document.title = `Vitrine | ${loja.nome}`;

  if (modoDemonstracao) {
    const links = $("modelos-links");
    for (const [chave, modelo] of Object.entries(modelos)) {
      const ancora = document.createElement("a");
      ancora.href = `?modelo=${encodeURIComponent(chave)}`;
      ancora.textContent = modelo.titulo;
      ancora.className = "modelo-link";
      if (chave === modeloAtual) ancora.setAttribute("aria-current", "page");
      links.append(ancora);
    }
  }

  const numeroConfigurado = linkWhatsApp(loja.whatsapp, "Teste") !== null;
  $("finalizar").firstChild.textContent = numeroConfigurado ? "Enviar pedido no WhatsApp " : "Ver prévia de pedido ";
  $("selo-whatsapp").textContent = numeroConfigurado ? "Pedidos pelo WhatsApp" : "Prévia de pedido";
  $("texto-pedido-beneficio").textContent = numeroConfigurado ? "Finalize direto pelo WhatsApp" : "Veja a prévia para o WhatsApp";
  $("aviso-preco").textContent = modoDemonstracao
    ? "Valores ilustrativos. Na versão real, a loja confirma disponibilidade e eventual taxa de entrega no WhatsApp."
    : "Disponibilidade e eventual taxa de entrega são confirmadas pela loja no WhatsApp.";
  $("aviso-previa").textContent = modoDemonstracao
    ? "Loja e valores fictícios. Copie a mensagem para conferir como o cliente faria o pedido."
    : numeroConfigurado
      ? "Confira a mensagem que será enviada pelo WhatsApp."
      : "Configure o número do WhatsApp da loja para habilitar o envio.";
}

function finalizarPedido(evento) {
  evento.preventDefault();
  $("feedback").textContent = "";
  const itens = itensSelecionados(carrinho, produtos);
  const modalidade = document.querySelector('input[name="modalidade"]:checked').value;

  try {
    mensagemAtual = montarMensagem({
      loja: loja.nome,
      itens,
      cliente: $("nome").value,
      modalidade,
      endereco: $("endereco").value,
      observacoes: $("observacoes").value,
    });
  } catch (erro) {
    $("feedback").textContent = erro.message;
    if (!itens.length) $("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
    else if (!$("nome").value.trim()) $("nome").focus();
    else if (modalidade === "Entrega") $("endereco").focus();
    return;
  }

  const link = linkWhatsApp(loja.whatsapp, mensagemAtual);
  if (link) {
    const ancora = document.createElement("a");
    ancora.href = link;
    ancora.target = "_blank";
    ancora.rel = "noopener noreferrer";
    document.body.append(ancora);
    ancora.click();
    ancora.remove();
    $("feedback").textContent = "WhatsApp aberto. Revise a mensagem e envie para a loja.";
    return;
  }

  $("texto-previa").textContent = mensagemAtual;
  $("previa").hidden = false;
  $("previa").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function copiarMensagem() {
  try {
    await navigator.clipboard.writeText(mensagemAtual);
    $("copiar").textContent = "Mensagem copiada ✓";
  } catch {
    $("copiar").textContent = "Selecione o texto acima para copiar";
  }
}

configurarLoja();
renderizarFiltros();
renderizarProdutos();
renderizarCarrinho();
$("form-pedido").addEventListener("submit", finalizarPedido);
$("modalidade-grupo").addEventListener("change", atualizarEntrega);
$("copiar").addEventListener("click", copiarMensagem);
atualizarEntrega();
