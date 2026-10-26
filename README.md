# Pronto

**Do zero ao app em minutos.** Escolha um preset, marque os recursos e baixe um starter kit completo com código, README e roadmap — usando stacks open source.

Tudo roda no navegador. Sem cadastro, sem servidor, sem espera.

## O que o app faz

- Gera um kit para **React + Vite, Vue, Svelte, Astro, Expo/React Native, Tauri e Express**.
- Monta um projeto com 12 recursos plugáveis (auth, banco, pagamentos, uploads, tempo real, offline, analytics, i18n, tema escuro, push, SEO e painel admin).
- Produz um `.zip` real com código inicial, `README.md`, `.gitignore` e roadmap em Markdown.
- Mostra sugestões de bibliotecas open source para cada recurso escolhido.
- Salva projetos e o progresso do roadmap no `localStorage`.
- Funciona offline, sem dependências de runtime e sem enviar dados para lugar nenhum.

## Como rodar

Com o runtime do OMGithub:

```bash
bash start.sh
```

Ou sirva os arquivos estáticos localmente:

```bash
python3 -m http.server 3002
```

Abra `http://localhost:3002`.

## Stacks e licenças

| Stack | Tipo | Licença |
| --- | --- | --- |
| React + Vite | Web / PWA | MIT |
| Vue 3 + Vite | Web / PWA | MIT |
| Svelte + Vite | Web / PWA | MIT |
| Astro | Web / PWA | MIT |
| Expo / React Native | Mobile | MIT |
| Tauri | Desktop | MIT / Apache-2.0 |
| Express / Node | API | MIT |

As licenças são dos projetos principais. Dependências geradas mantêm suas próprias licenças.

## Estrutura

```text
index.html      interface e seções
styles.css      design responsivo e temas
app.js          dados das stacks, gerador, ZIP, persistência e interações
start.sh        entrada do preview no runtime
capture.sh      captura de screenshots no runtime
```

## Privacidade

O gerador não faz chamadas de rede. Nome, descrição, projetos e checkboxes ficam apenas no `localStorage` do seu navegador.

## Licença

MIT. Veja [`LICENSE`](LICENSE).

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Remixed using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/thom1khali971-arch/AppBuildhelper)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/thom1khali971-arch/AppBuildhelper)

- 🎮 [Open the project](https://omgithub.com/thom1khali971-arch/AppBuildhelper).
- ✨ [Remix this project](https://omgithub.com/?remix=thom1khali971-arch%2FAppBuildhelper).
- 💻 [Explore the source](https://github.com/thom1khali971-arch/AppBuildhelper).
- 🛠️ [Check build runs](https://github.com/thom1khali971-arch/AppBuildhelper/actions).
- 🐛 [Report an issue](https://github.com/thom1khali971-arch/AppBuildhelper/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/thom1khali971-arch).
- 🌍 [Create with OMGithub](https://omgithub.com).
- 🧬 [Explore the remix source](https://github.com/thom1khali971-arch/AppBuildhelper).
<!-- omgithub:readme:end -->
