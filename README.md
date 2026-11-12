# Vexa Digital — vitrines de demonstração

Vitrines fictícias de pequenos negócios para apresentar o serviço a empreendedores de qualquer região do Brasil. Os preços, nomes, horários e produtos são ilustrativos. **Não há WhatsApp configurado ou envio real de pedidos.** O atendimento nacional refere-se à **Vexa Digital**, não à área de entrega de cada loja.

## Ver a demonstração

Abra [a demo pública](https://renddre2.github.io/vexa-vitrine-demo/) e escolha **Confeitaria**, **Lanchonete**, **Presentes**, **Floricultura** ou **Roupas** para testar catálogo, filtros, carrinho e prévia de pedido.

Para testar localmente, na raiz deste repositório execute `python -m http.server 4173` e acesse `http://localhost:4173/`. É necessário servidor HTTP por causa dos módulos JavaScript.

Verifique os dados e o fluxo de mensagens dos modelos com `node --test`.

## Preparar um site para cliente

1. Faça uma **cópia separada** desta pasta para o projeto do cliente. Escolha o segmento em `modelos.js`, alterando `modeloPadrao` para `confeitaria`, `lanchonete`, `presentes`, `floricultura` ou `roupas`.
2. Em `config.js` (confeitaria) ou `modelos/<segmento>.js` (demais segmentos), personalize nome, categoria, chamada, descrição, horário, cidade ou área atendida, ícones, título do catálogo e produtos. Preços são em **centavos** e IDs dos produtos devem ser únicos. Fotos autorizadas podem ser informadas por `foto: "./imagens/produto.jpg"` em cada produto.
3. Valide com o cliente a retirada e as entregas disponíveis antes de ajustar `aceitaEntrega`. Somente após confirmar o número e a autorização, preencha `whatsapp` com o DDI e DDD, como `55` + DDD + número. A demonstração compartilhada continua com WhatsApp vazio.
4. Coloque `modoDemonstracao = false` em `modelos.js`. Isso esconde o seletor e as mensagens de demonstração, e ignora o parâmetro de URL `?modelo=`. Personalize também os textos estáticos de `index.html` que precisarem de ajuste e as cores em `estilos.css`.
5. Teste no celular e no computador. Confirme categorias, preços, quantidade, pedido por retirada e entrega, taxa e mensagem do WhatsApp antes de publicar o site do cliente com autorização específica.

Os cinco segmentos são modelos iniciais. Para lojas de roupas, registre tamanho, numeração e cor nas observações e confirme estoque antes de fechar pedidos. Para floriculturas, confirme a disponibilidade de flores e a data de entrega. É possível criar outros modelos copiando um arquivo de `modelos/` e registrando a importação e a opção no objeto `modelos` de `modelos.js`. Para apresentar a um prospect, use o link da demo da Vexa e explique que a loja é fictícia.

Não use marcas, fotos, telefones ou dados de potenciais clientes sem autorização. A publicação de qualquer site real depende da confirmação dos dados e da permissão do titular da empresa.
