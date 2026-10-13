# Rota & Mar — guia de viagem

Site estático para planejar as viagens a Donegal e ao Japão. Não precisa de servidor, build ou dependências: abra `docs/index.html` no navegador para visualizar localmente. Também incluí uma página inicial em `/index.html` para redirecionar o acesso raiz e evitar a tela de "Forbidden" em servidores que não listam diretórios.

## Personalizar o guia

- Edite `docs/data.js` para atualizar destinos, dias, atividades, dicas e valores estimados.
- Edite `docs/styles.css` para ajustar cores e aparência. O visual principal usa uma estética cinematográfica em Azul-Teal e Terracota e se adapta a celulares e telas maiores.
- Os checklists marcados ficam salvos apenas no navegador e aparelho em que foram usados.

Os custos e planos incluídos são exemplos editáveis, não cotações nem reservas confirmadas.

## Publicar no GitHub Pages

1. Envie os arquivos deste projeto para o GitHub.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch que contém os arquivos (por exemplo, `main`) e a pasta **`/docs`**; clique em **Save**.
5. Aguarde a publicação. O GitHub exibirá o endereço do site na mesma página de Pages.

Após atualizar os arquivos em `docs/` e enviar as alterações à branch escolhida, o Pages publica a versão nova automaticamente. O repositório precisa estar público em planos que não incluam GitHub Pages privado.
