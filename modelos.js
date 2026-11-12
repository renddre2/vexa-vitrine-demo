// Modelos fictícios que podem ser apresentados para negócios de todo o Brasil.
// Para um cliente real, escolha o modelo padrão e desative modoDemonstracao.
import * as confeitaria from "./config.js";
import * as lanchonete from "./modelos/lanchonete.js";
import * as presentes from "./modelos/presentes.js";

export const modoDemonstracao = true;
export const modeloPadrao = "confeitaria";

export const modelos = {
  confeitaria: { titulo: "Confeitaria", ...confeitaria },
  lanchonete: { titulo: "Lanchonete", ...lanchonete },
  presentes: { titulo: "Presentes", ...presentes },
};

const parametro = modoDemonstracao ? new URLSearchParams(globalThis.location?.search ?? "").get("modelo") : null;
export const modeloAtual = Object.hasOwn(modelos, parametro) ? parametro : modeloPadrao;
export const { loja, produtos } = modelos[modeloAtual];
