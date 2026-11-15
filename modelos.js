// Modelos fictícios que podem ser apresentados para negócios de todo o Brasil.
// Para um cliente real, escolha o modelo padrão e desative modoDemonstracao.
import * as confeitaria from "./config.js?v=2";
import * as lanchonete from "./modelos/lanchonete.js?v=2";
import * as presentes from "./modelos/presentes.js?v=2";
import * as floricultura from "./modelos/floricultura.js?v=2";
import * as roupas from "./modelos/roupas.js?v=2";

export const modoDemonstracao = true;
export const modeloPadrao = "confeitaria";

export const modelos = {
  confeitaria: {
    titulo: "Confeitaria",
    monograma: "DI",
    fotoDestaque: {
      src: "./assets/vitrines/bolo-festa.webp",
      alt: "Bolo de camadas com creme e morangos frescos",
    },
    fotos: {
      "bolo-festa": "bolo-festa",
      "bolo-caseiro": "bolo-caseiro",
      bento: "bento",
      brigadeiros: "brigadeiros",
      trufas: "trufas",
      brownie: "brownie",
      "kit-festa": "kit-festa",
      presente: "caixa-presente",
    },
    ...confeitaria,
  },
  lanchonete: {
    titulo: "Lanchonete",
    monograma: "ES",
    fotoDestaque: {
      src: "./assets/vitrines/burger-duplo.webp",
      alt: "Hambúrguer duplo com queijo derretido, servido com batatas fritas",
    },
    fotos: { "burger-duplo": "burger-duplo" },
    ...lanchonete,
  },
  presentes: {
    titulo: "Presentes",
    monograma: "AP",
    fotoDestaque: {
      src: "./assets/vitrines/kit-carinho.webp",
      alt: "Caixa de presente com laço, caneca, vela e cartão",
    },
    fotos: { "kit-carinho": "kit-carinho" },
    ...presentes,
  },
  floricultura: {
    titulo: "Floricultura",
    monograma: "JA",
    fotoDestaque: {
      src: "./assets/vitrines/buque-campo.webp",
      alt: "Buquê em tons de rosa e coral embrulhado em papel claro",
    },
    fotos: { "buque-campo": "buque-campo" },
    ...floricultura,
  },
  roupas: {
    titulo: "Roupas",
    monograma: "EU",
    fotoDestaque: {
      src: "./assets/vitrines/camisa-linho.webp",
      alt: "Camisa de linho bege e jeans azul sobre um banco de madeira",
    },
    fotos: { "camisa-linho": "camisa-linho" },
    ...roupas,
  },
};

const parametro = modoDemonstracao ? new URLSearchParams(globalThis.location?.search ?? "").get("modelo") : null;
export const modeloAtual = Object.hasOwn(modelos, parametro) ? parametro : modeloPadrao;
export const { loja, produtos } = modelos[modeloAtual];
