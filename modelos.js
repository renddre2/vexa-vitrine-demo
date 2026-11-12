// Modelos fictícios que podem ser apresentados para negócios de todo o Brasil.
// Para um cliente real, escolha o modelo padrão e desative modoDemonstracao.
import * as confeitaria from "./config.js";
import * as lanchonete from "./modelos/lanchonete.js";
import * as presentes from "./modelos/presentes.js";
import * as floricultura from "./modelos/floricultura.js";
import * as roupas from "./modelos/roupas.js";

export const modoDemonstracao = true;
export const modeloPadrao = "confeitaria";

export const modelos = {
  confeitaria: { titulo: "Confeitaria", ...confeitaria },
  lanchonete: { titulo: "Lanchonete", ...lanchonete },
  presentes: { titulo: "Presentes", ...presentes },
  floricultura: { titulo: "Floricultura", ...floricultura },
  roupas: { titulo: "Roupas", ...roupas },
};

const parametro = modoDemonstracao ? new URLSearchParams(globalThis.location?.search ?? "").get("modelo") : null;
export const modeloAtual = Object.hasOwn(modelos, parametro) ? parametro : modeloPadrao;
export const { loja, produtos } = modelos[modeloAtual];
