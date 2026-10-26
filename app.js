const DRAFT_KEY = 'pronto:draft:v1'
const PROJECTS_KEY = 'pronto:projects:v1'

const TYPES = [
  { id: 'web', label: 'Web app', glyph: 'W' },
  { id: 'mobile', label: 'Mobile', glyph: 'M' },
  { id: 'desktop', label: 'Desktop', glyph: 'D' },
  { id: 'api', label: 'API', glyph: 'A' }
]

const ICONS = {
  user: '<circle cx="9" cy="6" r="2.6"/><path d="M3.5 15c.6-2.8 2.7-4.3 5.5-4.3s4.9 1.5 5.5 4.3"/>',
  database: '<ellipse cx="9" cy="4.8" rx="5.5" ry="2.2"/><path d="M3.5 4.8v8.4c0 1.2 2.5 2.2 5.5 2.2s5.5-1 5.5-2.2V4.8"/><path d="M3.5 9c0 1.2 2.5 2.2 5.5 2.2s5.5-1 5.5-2.2"/>',
  card: '<rect x="2.5" y="4.5" width="13" height="9" rx="1.6"/><path d="M2.5 7.5h13"/><path d="M5 11.5h2.5"/>',
  upload: '<path d="M9 12.5V4.5"/><path d="m5.8 7.5 3.2-3 3.2 3"/><path d="M3 13.5h12"/>',
  bolt: '<path d="M9.8 2.8 4.6 10h3.4l-1 5.2 5.4-7.4H9Z"/>',
  cloud: '<path d="M5.5 13.5h7a3 3 0 0 0 .4-6A4.3 4.3 0 0 0 5.6 6 3.6 3.6 0 0 0 5.5 13.5Z"/><path d="m3 3 12 12"/>',
  chart: '<path d="M3 15V9"/><path d="M7.5 15V5"/><path d="M12 15v-4"/><path d="M16 15H2"/>',
  globe: '<circle cx="9" cy="9" r="6"/><path d="M3 9h12"/><path d="M9 3c1.8 1.7 2.7 3.7 2.7 6S10.8 13.3 9 15c-1.8-1.7-2.7-3.7-2.7-6S7.2 4.7 9 3Z"/>',
  moon: '<path d="M14.8 10.8A6 6 0 0 1 7.2 3.2 6 6 0 1 0 14.8 10.8Z"/>',
  bell: '<path d="M9 2.8a4 4 0 0 0-4 4v3l-1.5 2.5h11L13 9.8v-3a4 4 0 0 0-4-4Z"/><path d="M7.5 14.2a1.6 1.6 0 0 0 3 0"/>',
  search: '<circle cx="8" cy="8" r="4.5"/><path d="m11.3 11.3 3.7 3.7"/>',
  grid: '<rect x="2.5" y="2.5" width="5.5" height="5.5" rx="1"/><rect x="10" y="2.5" width="5.5" height="5.5" rx="1"/><rect x="2.5" y="10" width="5.5" height="5.5" rx="1"/><rect x="10" y="10" width="5.5" height="5.5" rx="1"/>'
}

const FEATURES = [
  {
    id: 'auth',
    label: 'Autenticação',
    icon: 'user',
    task: 'Implementar login, sessão e proteção de rotas',
    lib: { default: 'Better Auth / Supabase Auth', expo: 'Expo AuthSession', express: 'Passport.js' }
  },
  {
    id: 'database',
    label: 'Banco de dados',
    icon: 'database',
    task: 'Modelar o banco e construir o CRUD principal',
    lib: { default: 'Prisma + SQLite/Postgres', expo: 'Expo SQLite', express: 'Prisma + Postgres' }
  },
  {
    id: 'payments',
    label: 'Pagamentos',
    icon: 'card',
    task: 'Integrar checkout e webhooks de cobrança',
    lib: { default: 'Stripe', expo: 'Stripe React Native', express: 'Stripe' }
  },
  {
    id: 'upload',
    label: 'Uploads',
    icon: 'upload',
    task: 'Adicionar upload de arquivos com URLs assinadas',
    lib: { default: 'UploadThing / S3', expo: 'Expo FileSystem + S3', express: 'Multer + S3' }
  },
  {
    id: 'realtime',
    label: 'Tempo real',
    icon: 'bolt',
    task: 'Ativar eventos em tempo real e estados otimistas',
    lib: { default: 'Socket.IO', expo: 'Socket.IO', express: 'Socket.IO' }
  },
  {
    id: 'offline',
    label: 'Offline',
    icon: 'cloud',
    task: 'Implementar cache offline e sincronização',
    lib: { default: 'Workbox + IndexedDB', expo: 'AsyncStorage + NetInfo', express: 'Fila de jobs (BullMQ)' }
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'chart',
    task: 'Plugar analytics privacy-first e eventos-chave',
    lib: { default: 'Plausible / Umami', expo: 'PostHog', express: 'Umami' }
  },
  {
    id: 'i18n',
    label: 'Multi-idioma',
    icon: 'globe',
    task: 'Adicionar i18n e extrair os textos da interface',
    lib: { default: 'i18next', expo: 'i18n-js', express: 'i18next' }
  },
  {
    id: 'darkmode',
    label: 'Tema escuro',
    icon: 'moon',
    task: 'Implementar tema claro/escuro com persistência',
    lib: { default: 'CSS variables', expo: 'Appearance API', express: 'N/A' }
  },
  {
    id: 'push',
    label: 'Notificações',
    icon: 'bell',
    task: 'Enviar notificações push e gerenciar permissões',
    lib: { default: 'Web Push', expo: 'Expo Notifications', express: 'Web Push' }
  },
  {
    id: 'seo',
    label: 'SEO',
    icon: 'search',
    task: 'Revisar SEO técnico, metadados e Open Graph',
    lib: { default: 'Astro SEO / next-seo', expo: 'Expo Router Head', express: 'OpenAPI + docs' }
  },
  {
    id: 'admin',
    label: 'Painel admin',
    icon: 'grid',
    task: 'Construir painel admin protegido por papel',
    lib: { default: 'React Admin', expo: 'Expo Router', express: 'AdminJS' }
  }
]

const FEATURE_MAP = Object.fromEntries(FEATURES.map((feature) => [feature.id, feature]))

const TYPES_MAP = Object.fromEntries(TYPES.map((type) => [type.id, type]))

const STACKS = [
  {
    id: 'react',
    name: 'React + Vite',
    glyph: 'R',
    license: 'MIT',
    lang: 'JavaScript / JSX',
    color: '#61dafb',
    badge: 'Web',
    blurb: 'O caminho mais direto para uma interface componentizada com build rápido e ecossistema gigante.',
    deploy: 'Vercel, Netlify ou Cloudflare Pages',
    types: ['web', 'pwa'],
    commands: ['npm install', 'npm run dev'],
    files(ctx) {
      const features = featureNames(ctx)
      return withReadme({
        'package.json': makePackage(ctx, {
          type: 'module',
          scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
          dependencies: { react: '^19.0.0', 'react-dom': '^19.0.0' },
          devDependencies: { '@vitejs/plugin-react': '^4.4.1', vite: '^6.3.5' }
        }),
        'index.html': htmlShell(ctx, '/src/main.jsx'),
        'vite.config.js': [
          "import { defineConfig } from 'vite'",
          "import react from '@vitejs/plugin-react'",
          '',
          'export default defineConfig({',
          '  plugins: [react()],',
          '})',
          ''
        ].join('\n'),
        'src/main.jsx': [
          "import { StrictMode } from 'react'",
          "import { createRoot } from 'react-dom/client'",
          "import App from './App.jsx'",
          "import './styles.css'",
          '',
          "createRoot(document.getElementById('root')).render(",
          '  <StrictMode>',
          '    <App />',
          '  </StrictMode>,',
          ')',
          ''
        ].join('\n'),
        'src/App.jsx': [
          "import { useState } from 'react'",
          '',
          `const appName = ${q(ctx.name)}`,
          `const tagline = ${q(ctx.description)}`,
          `const stack = ${q(ctx.stack.name)}`,
          `const license = ${q(ctx.stack.license)}`,
          `const features = ${JSON.stringify(features)}`,
          '',
          'export default function App() {',
          '  const [ready, setReady] = useState(false)',
          '',
          '  return (',
          '    <main className="app">',
          '      <header className="topbar">',
          '        <span className="brand">{appName}</span>',
          '        <span className="badge">{stack}</span>',
          '      </header>',
          '      <section className="hero">',
          '        <p className="eyebrow">Starter kit · {license}</p>',
          '        <h1>{appName}</h1>',
          '        <p className="lede">{tagline}</p>',
          '        <div className="features">',
          '          {features.map((feature) => <span key={feature}>{feature}</span>)}',
          '        </div>',
          '        <button className="cta" onClick={() => setReady(!ready)}>',
          "          {ready ? 'Tudo pronto.' : 'Começar agora'}",
          '        </button>',
          '      </section>',
          '    </main>',
          '  )',
          '}',
          ''
        ].join('\n'),
        'src/styles.css': starterCss(ctx)
      }, ctx)
    }
  },
  {
    id: 'vue',
    name: 'Vue 3 + Vite',
    glyph: 'V',
    license: 'MIT',
    lang: 'JavaScript / SFC',
    color: '#42d392',
    badge: 'Web',
    blurb: 'Curva de aprendizado suave, arquivos .vue legíveis e reatividade pronta para o MVP.',
    deploy: 'Vercel, Netlify ou Cloudflare Pages',
    types: ['web', 'pwa'],
    commands: ['npm install', 'npm run dev'],
    files(ctx) {
      const features = featureNames(ctx)
      return withReadme({
        'package.json': makePackage(ctx, {
          type: 'module',
          scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
          dependencies: { vue: '^3.5.13' },
          devDependencies: { '@vitejs/plugin-vue': '^5.2.3', vite: '^6.3.5' }
        }),
        'index.html': htmlShell(ctx, '/src/main.js'),
        'vite.config.js': [
          "import { defineConfig } from 'vite'",
          "import vue from '@vitejs/plugin-vue'",
          '',
          'export default defineConfig({',
          '  plugins: [vue()],',
          '})',
          ''
        ].join('\n'),
        'src/main.js': [
          "import { createApp } from 'vue'",
          "import App from './App.vue'",
          "import './styles.css'",
          '',
          "createApp(App).mount('#app')",
          ''
        ].join('\n'),
        'src/App.vue': [
          '<script setup>',
          "import { ref } from 'vue'",
          '',
          `const appName = ${q(ctx.name)}`,
          `const tagline = ${q(ctx.description)}`,
          `const stack = ${q(ctx.stack.name)}`,
          `const license = ${q(ctx.stack.license)}`,
          `const features = ${JSON.stringify(features)}`,
          'const ready = ref(false)',
          '</script>',
          '',
          '<template>',
          '  <main class="app">',
          '    <header class="topbar">',
          '      <span class="brand">{{ appName }}</span>',
          '      <span class="badge">{{ stack }}</span>',
          '    </header>',
          '    <section class="hero">',
          '      <p class="eyebrow">Starter kit · {{ license }}</p>',
          '      <h1>{{ appName }}</h1>',
          '      <p class="lede">{{ tagline }}</p>',
          '      <div class="features">',
          '        <span v-for="feature in features" :key="feature">{{ feature }}</span>',
          '      </div>',
          '      <button class="cta" @click="ready = !ready">',
          "        {{ ready ? 'Tudo pronto.' : 'Começar agora' }}",
          '      </button>',
          '    </section>',
          '  </main>',
          '</template>',
          ''
        ].join('\n'),
        'src/styles.css': starterCss(ctx)
      }, ctx)
    }
  },
  {
    id: 'svelte',
    name: 'Svelte + Vite',
    glyph: 'S',
    license: 'MIT',
    lang: 'JavaScript / Svelte',
    color: '#ff5b24',
    badge: 'Web',
    blurb: 'Menos código no runtime e um resultado enxuto. Ótimo para landing pages e MVPs velozes.',
    deploy: 'Vercel, Netlify ou Cloudflare Pages',
    types: ['web', 'pwa'],
    commands: ['npm install', 'npm run dev'],
    files(ctx) {
      const features = featureNames(ctx)
      return withReadme({
        'package.json': makePackage(ctx, {
          type: 'module',
          scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
          devDependencies: { '@sveltejs/vite-plugin-svelte': '^5.0.3', svelte: '^5.28.2', vite: '^6.3.5' }
        }),
        'index.html': htmlShell(ctx, '/src/main.js'),
        'vite.config.js': [
          "import { defineConfig } from 'vite'",
          "import { svelte } from '@sveltejs/vite-plugin-svelte'",
          '',
          'export default defineConfig({',
          '  plugins: [svelte()],',
          '})',
          ''
        ].join('\n'),
        'src/main.js': [
          "import { mount } from 'svelte'",
          "import App from './App.svelte'",
          "import './styles.css'",
          '',
          "const app = mount(App, { target: document.getElementById('app') })",
          '',
          'export default app',
          ''
        ].join('\n'),
        'src/App.svelte': [
          '<script>',
          "  let ready = false",
          `  const appName = ${q(ctx.name)}`,
          `  const tagline = ${q(ctx.description)}`,
          `  const stack = ${q(ctx.stack.name)}`,
          `  const license = ${q(ctx.stack.license)}`,
          `  const features = ${JSON.stringify(features)}`,
          '</script>',
          '',
          '<main class="app">',
          '  <header class="topbar">',
          '    <span class="brand">{appName}</span>',
          '    <span class="badge">{stack}</span>',
          '  </header>',
          '  <section class="hero">',
          '    <p class="eyebrow">Starter kit · {license}</p>',
          '    <h1>{appName}</h1>',
          '    <p class="lede">{tagline}</p>',
          '    <div class="features">',
          '      {#each features as feature}',
          '        <span>{feature}</span>',
          '      {/each}',
          '    </div>',
          '    <button class="cta" onclick={() => (ready = !ready)}>',
          "      {ready ? 'Tudo pronto.' : 'Começar agora'}",
          '    </button>',
          '  </section>',
          '</main>',
          ''
        ].join('\n'),
        'src/styles.css': starterCss(ctx)
      }, ctx)
    }
  },
  {
    id: 'astro',
    name: 'Astro',
    glyph: 'A',
    license: 'MIT',
    lang: 'JavaScript / Astro',
    color: '#ff8a4c',
    badge: 'Web',
    blurb: 'Conteúdo primeiro, JavaScript zero por padrão. A escolha certa para landing pages e blogs.',
    deploy: 'Vercel, Netlify ou Cloudflare Pages',
    types: ['web', 'pwa'],
    commands: ['npm install', 'npm run dev'],
    files(ctx) {
      return withReadme({
        'package.json': makePackage(ctx, {
          type: 'module',
          scripts: { dev: 'astro dev', build: 'astro build', preview: 'astro preview' },
          dependencies: { astro: '^5.7.10' }
        }),
        'astro.config.mjs': [
          "import { defineConfig } from 'astro/config'",
          '',
          'export default defineConfig({})',
          ''
        ].join('\n'),
        'src/pages/index.astro': [
          '---',
          `const appName = ${q(ctx.name)}`,
          `const tagline = ${q(ctx.description)}`,
          `const stack = ${q(ctx.stack.name)}`,
          `const license = ${q(ctx.stack.license)}`,
          `const features = ${JSON.stringify(featureNames(ctx))}`,
          '---',
          '',
          '<html lang="pt-BR">',
          '  <head>',
          '    <meta charset="UTF-8" />',
          '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
          `    <meta name="description" content="${escapeAttr(ctx.description)}" />`,
          '    <title>{appName}</title>',
          '  </head>',
          '  <body>',
          '    <main class="app">',
          '      <header class="topbar">',
          '        <span class="brand">{appName}</span>',
          '        <span class="badge">{stack}</span>',
          '      </header>',
          '      <section class="hero">',
          '        <p class="eyebrow">Starter kit · {license}</p>',
          '        <h1>{appName}</h1>',
          '        <p class="lede">{tagline}</p>',
          '        <div class="features">',
          '          {features.map((feature) => <span>{feature}</span>)}',
          '        </div>',
          '        <a class="cta" href="#recursos">Começar agora</a>',
          '      </section>',
          '      <section id="recursos" class="features-section">',
          '        <h2>Recursos planejados</h2>',
          '        <ul>',
          '          {features.map((feature) => <li>{feature}</li>)}',
          '        </ul>',
          '      </section>',
          '    </main>',
          '  </body>',
          '</html>',
          '',
          '<style is:global>',
          starterCss(ctx).trim(),
          '</style>',
          ''
        ].join('\n')
      }, ctx)
    }
  },
  {
    id: 'expo',
    name: 'Expo / React Native',
    glyph: 'E',
    license: 'MIT',
    lang: 'JavaScript / React Native',
    color: '#c084fc',
    badge: 'Mobile',
    blurb: 'Um código, iOS e Android. Expo cuida do build enquanto você foca na experiência.',
    deploy: 'EAS Build / App Store / Google Play',
    types: ['mobile'],
    commands: ['npm install', 'npx expo start'],
    files(ctx) {
      const features = featureNames(ctx)
      return withReadme({
        'package.json': makePackage(ctx, {
          main: 'expo/AppEntry.js',
          scripts: {
            start: 'expo start',
            android: 'expo start --android',
            ios: 'expo start --ios',
            web: 'expo start --web'
          },
          dependencies: {
            expo: '~53.0.0',
            'expo-status-bar': '~2.2.3',
            react: '19.0.0',
            'react-native': '0.79.2'
          },
          devDependencies: { '@babel/core': '^7.25.2' }
        }),
        'app.json': JSON.stringify({
          expo: {
            name: ctx.name,
            slug: ctx.slug,
            version: '1.0.0',
            orientation: 'portrait',
            userInterfaceStyle: 'dark',
            splash: { backgroundColor: '#070b12' },
            ios: { supportsTablet: true },
            android: { adaptiveIcon: { backgroundColor: '#070b12' } },
            web: { bundler: 'metro' }
          }
        }, null, 2) + '\n',
        'App.js': [
          "import { useState } from 'react'",
          "import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'",
          "import { StatusBar } from 'expo-status-bar'",
          '',
          `const appName = ${q(ctx.name)}`,
          `const tagline = ${q(ctx.description)}`,
          `const stack = ${q(ctx.stack.name)}`,
          `const license = ${q(ctx.stack.license)}`,
          `const features = ${JSON.stringify(features)}`,
          '',
          'export default function App() {',
          '  const [ready, setReady] = useState(false)',
          '',
          '  return (',
          '    <SafeAreaView style={styles.safe}>',
          '      <StatusBar style="light" />',
          '      <ScrollView contentContainerStyle={styles.page}>',
          '        <View style={styles.topbar}>',
          '          <Text style={styles.brand}>{appName}</Text>',
          '          <Text style={styles.badge}>{stack}</Text>',
          '        </View>',
          '        <Text style={styles.eyebrow}>Starter kit · {license}</Text>',
          '        <Text style={styles.title}>{appName}</Text>',
          '        <Text style={styles.lede}>{tagline}</Text>',
          '        <View style={styles.chips}>',
          '          {features.map((feature) => (',
          '            <Text key={feature} style={styles.chip}>{feature}</Text>',
          '          ))}',
          '        </View>',
          '        <Pressable style={styles.cta} onPress={() => setReady(!ready)}>',
          "          <Text style={styles.ctaText}>{ready ? 'Tudo pronto.' : 'Começar agora'}</Text>",
          '        </Pressable>',
          '      </ScrollView>',
          '    </SafeAreaView>',
          '  )',
          '}',
          '',
          'const styles = StyleSheet.create({',
          '  safe: { flex: 1, backgroundColor: \'#070b12\' },',
          '  page: { padding: 24, gap: 16 },',
          '  topbar: { flexDirection: \'row\', alignItems: \'center\', justifyContent: \'space-between\' },',
          '  brand: { color: \'#f2f6fb\', fontSize: 18, fontWeight: \'700\' },',
          '  badge: { color: \'#c084fc\', fontSize: 11, borderWidth: 1, borderColor: \'#4c2c66\', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4 },',
          '  eyebrow: { color: \'#c084fc\', fontSize: 10, letterSpacing: 1.5, textTransform: \'uppercase\', marginTop: 22 },',
          '  title: { color: \'#f2f6fb\', fontSize: 40, fontWeight: \'800\', letterSpacing: -1.5 },',
          '  lede: { color: \'#94a0b2\', fontSize: 15, lineHeight: 23 },',
          '  chips: { flexDirection: \'row\', flexWrap: \'wrap\', gap: 7, marginVertical: 8 },',
          '  chip: { color: \'#d8c8f0\', fontSize: 11, backgroundColor: \'#1a1326\', borderRadius: 99, paddingHorizontal: 10, paddingVertical: 5 },',
          '  cta: { backgroundColor: \'#c084fc\', borderRadius: 12, paddingVertical: 14, alignItems: \'center\', marginTop: 10 },',
          '  ctaText: { color: \'#120a1c\', fontWeight: \'700\', fontSize: 14 }',
          '})',
          ''
        ].join('\n')
      }, ctx)
    }
  },
  {
    id: 'tauri',
    name: 'Tauri',
    glyph: 'T',
    license: 'MIT / Apache-2.0',
    lang: 'Rust + Web',
    color: '#ffc131',
    badge: 'Desktop',
    blurb: 'A leveza de uma interface web com a força do Rust. Apps desktop pequenos e nativos.',
    deploy: 'GitHub Releases / instaladores assinados',
    types: ['desktop'],
    commands: ['npm install', 'npm run tauri dev'],
    files(ctx) {
      return withReadme({
        'package.json': makePackage(ctx, {
          type: 'module',
          scripts: { dev: 'vite', build: 'vite build', tauri: 'tauri' },
          devDependencies: { '@tauri-apps/cli': '^2.5.0', vite: '^6.3.5' }
        }),
        'index.html': htmlShell(ctx, '/src/main.js', 'app'),
        'vite.config.js': [
          "import { defineConfig } from 'vite'",
          '',
          'export default defineConfig({',
          '  clearScreen: false,',
          '  server: { port: 1420, strictPort: true },',
          '})',
          ''
        ].join('\n'),
        'src/main.js': [
          `const appName = ${q(ctx.name)}`,
          `const tagline = ${q(ctx.description)}`,
          `const features = ${JSON.stringify(featureNames(ctx))}`,
          '',
          'document.title = appName',
          "document.querySelector('#brand').textContent = appName",
          "document.querySelector('#title').textContent = appName",
          "document.querySelector('#tagline').textContent = tagline",
          '',
          "const featureList = document.querySelector('#features')",
          'for (const feature of features) {',
          "  const chip = document.createElement('span')",
          '  chip.textContent = feature',
          '  featureList.append(chip)',
          '}',
          '',
          "const cta = document.querySelector('#cta')",
          "cta.addEventListener('click', () => {",
          "  cta.textContent = cta.textContent === 'Começar agora' ? 'Tudo pronto.' : 'Começar agora'",
          '})',
          ''
        ].join('\n'),
        'src/styles.css': starterCss(ctx),
        'src-tauri/Cargo.toml': [
          '[package]',
          `name = ${q(ctx.slug)}`,
          'version = "0.1.0"',
          `description = ${q(ctx.description)}`,
          'edition = "2021"',
          '',
          '[lib]',
          'name = "app_lib"',
          'crate-type = ["staticlib", "cdylib", "rlib"]',
          '',
          '[build-dependencies]',
          'tauri-build = { version = "2", features = [] }',
          '',
          '[dependencies]',
          'tauri = { version = "2", features = [] }',
          'serde = { version = "1", features = ["derive"] }',
          'serde_json = "1"',
          ''
        ].join('\n'),
        'src-tauri/build.rs': [
          'fn main() {',
          '    tauri_build::build()',
          '}',
          ''
        ].join('\n'),
        'src-tauri/src/main.rs': [
          '#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]',
          '',
          'fn main() {',
          '    app_lib::run()',
          '}',
          ''
        ].join('\n'),
        'src-tauri/src/lib.rs': [
          '#[cfg_attr(mobile, tauri::mobile_entry_point)]',
          'pub fn run() {',
          '    tauri::Builder::default()',
          '        .run(tauri::generate_context!())',
          '        .expect("error while running tauri application");',
          '}',
          ''
        ].join('\n'),
        'src-tauri/tauri.conf.json': JSON.stringify({
          '$schema': 'https://schema.tauri.app/config/2',
          productName: ctx.name,
          version: '0.1.0',
          identifier: `com.example.${ctx.slug.replace(/-/g, '')}`,
          build: {
            beforeDevCommand: 'npm run dev',
            devUrl: 'http://localhost:1420',
            beforeBuildCommand: 'npm run build',
            frontendDist: '../dist'
          },
          app: {
            windows: [{ title: ctx.name, width: 1100, height: 720 }],
            security: { csp: null }
          },
          bundle: { active: true, targets: 'all' }
        }, null, 2) + '\n'
      }, ctx)
    }
  },
  {
    id: 'express',
    name: 'Express / Node',
    glyph: 'X',
    license: 'MIT',
    lang: 'JavaScript / Node',
    color: '#8bd17c',
    badge: 'API',
    blurb: 'Uma API REST sólida em poucas linhas. Ideal para backend, webhooks e integrações.',
    deploy: 'Render, Railway ou Fly.io',
    types: ['api'],
    commands: ['npm install', 'npm run dev'],
    files(ctx) {
      return withReadme({
        'package.json': makePackage(ctx, {
          type: 'module',
          scripts: { dev: 'node --watch src/server.js', start: 'node src/server.js' },
          dependencies: { express: '^5.1.0' }
        }),
        'src/server.js': [
          "import express from 'express'",
          '',
          `const appName = ${q(ctx.name)}`,
          `const features = ${JSON.stringify(ctx.features.map((feature) => feature.label))}`,
          'const app = express()',
          'const port = Number(process.env.PORT || 3000)',
          '',
          'app.use(express.json())',
          '',
          "app.get('/health', (request, response) => {",
          '  response.json({ ok: true, app: appName })',
          '})',
          '',
          "app.get('/api/features', (request, response) => {",
          '  response.json({ features })',
          '})',
          '',
          'app.listen(port, () => {',
          "  console.log(appName + ' rodando em http://localhost:' + port)",
          '})',
          ''
        ].join('\n'),
        '.env.example': [
          'PORT=3000',
          ''
        ].join('\n')
      }, ctx)
    }
  }
]

const STACK_MAP = Object.fromEntries(STACKS.map((stack) => [stack.id, stack]))

const PRESETS = [
  {
    id: 'landing',
    label: 'Landing express',
    description: 'Página de lançamento com SEO, tema escuro e medição.',
    time: '1 min',
    type: 'web',
    stack: 'astro',
    features: ['seo', 'analytics', 'darkmode'],
    name: 'Lançamento',
    appDescription: 'Landing page para apresentar o produto e capturar leads.'
  },
  {
    id: 'saas',
    label: 'MVP SaaS',
    description: 'Login, banco, cobrança recorrente e dashboard.',
    time: '1 fim de semana',
    type: 'web',
    stack: 'react',
    features: ['auth', 'database', 'payments', 'analytics', 'darkmode'],
    name: 'Meu SaaS',
    appDescription: 'Plataforma por assinatura para resolver um problema específico.'
  },
  {
    id: 'mobile',
    label: 'App mobile',
    description: 'iOS e Android com login, banco local e push.',
    time: '1 semana',
    type: 'mobile',
    stack: 'expo',
    features: ['auth', 'database', 'push', 'offline', 'darkmode'],
    name: 'Meu App',
    appDescription: 'Aplicativo mobile para organizar a rotina sem atrito.'
  },
  {
    id: 'api',
    label: 'API pronta',
    description: 'REST, banco, autenticação e painel administrativo.',
    time: '1 tarde',
    type: 'api',
    stack: 'express',
    features: ['auth', 'database', 'realtime', 'admin'],
    name: 'Minha API',
    appDescription: 'API para alimentar produtos web e mobile com dados em tempo real.'
  }
]

function q(value) {
  return JSON.stringify(String(value))
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]))
}

function escapeAttr(value) {
  return escapeHtml(value)
}

function iconSvg(name) {
  return `<svg viewBox="0 0 18 18" aria-hidden="true">${ICONS[name] || ICONS.grid}</svg>`
}

function slugify(value) {
  const slug = String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 42)
  return slug || 'meu-app'
}

function hexToRgba(hex, alpha) {
  const value = hex.replace('#', '')
  const number = parseInt(value, 16)
  const red = (number >> 16) & 255
  const green = (number >> 8) & 255
  const blue = number & 255
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

function glyphStyle(stack) {
  return `--glyph-bg:${hexToRgba(stack.color, 0.14)};--glyph-fg:${stack.color}`
}

function getStack(id) {
  return STACK_MAP[id] || STACKS[0]
}

function typeLabel(id) {
  return TYPES_MAP[id]?.label || 'Web app'
}

function featureNames(ctx) {
  return ctx.features.length ? ctx.features.map((feature) => feature.label) : ['Estrutura base']
}

function libFor(feature, stack) {
  if (stack.id === 'expo' && feature.lib.expo) return feature.lib.expo
  if (stack.id === 'express' && feature.lib.express) return feature.lib.express
  return feature.lib.default
}

function makePackage(ctx, fields) {
  return JSON.stringify({
    name: ctx.slug,
    private: true,
    version: '0.1.0',
    ...fields
  }, null, 2) + '\n'
}

function htmlShell(ctx, script, mountId = 'root') {
  return [
    '<!doctype html>',
    '<html lang="pt-BR">',
    '  <head>',
    '    <meta charset="UTF-8" />',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `    <title>${escapeHtml(ctx.name)}</title>`,
    `    <meta name="description" content="${escapeAttr(ctx.description)}" />`,
    '  </head>',
    '  <body>',
    `    <div id="${mountId}"></div>`,
    `    <script type="module" src="${script}"></script>`,
    '  </body>',
    '</html>',
    ''
  ].join('\n')
}

function buildPhases(ctx) {
  const databaseLib = libFor(FEATURE_MAP.database, ctx.stack)
  const featureTasks = ctx.features.map((feature) => ({
    id: `feature-${feature.id}`,
    label: feature.task,
    lib: libFor(feature, ctx.stack)
  }))

  return [
    {
      id: 'foundation',
      title: 'Fundação',
      hint: 'base sólida',
      tasks: [
        {
          id: 'setup',
          label: 'Rodar o starter kit e validar o build',
          lib: ctx.stack.commands.join(' · ')
        },
        {
          id: 'identity',
          label: 'Aplicar identidade visual, tipografia e layout base'
        },
        {
          id: 'routes',
          label: 'Definir rotas e estados de navegação'
        },
        {
          id: 'data',
          label: 'Modelar dados principais e estados vazios',
          lib: ctx.features.some((feature) => feature.id === 'database') ? databaseLib : 'Sem dependência extra'
        }
      ]
    },
    {
      id: 'features',
      title: 'Recursos',
      hint: 'o que torna o app único',
      tasks: featureTasks.length ? featureTasks : [
        {
          id: 'feature-core',
          label: 'Definir e construir o primeiro fluxo de valor'
        }
      ]
    },
    {
      id: 'launch',
      title: 'Lançamento',
      hint: 'para colocar no ar',
      tasks: [
        {
          id: 'quality',
          label: 'Revisar acessibilidade, responsividade e performance'
        },
        {
          id: 'errors',
          label: 'Configurar monitoramento de erros (Sentry)'
        },
        {
          id: 'deploy',
          label: `Publicar em ${ctx.stack.deploy}`,
          lib: ctx.stack.deploy
        },
        {
          id: 'docs',
          label: 'Atualizar README e documentar o setup'
        }
      ]
    }
  ]
}

function readmeFile(ctx, paths) {
  const phases = buildPhases(ctx)
  const featureLines = ctx.features.length
    ? ctx.features.map((feature) => `- **${feature.label}** — ${libFor(feature, ctx.stack)}`)
    : ['- Nenhum recurso extra selecionado.']
  const phaseLines = phases.flatMap((phase) => [
    `### ${phase.title}`,
    '',
    ...phase.tasks.map((task) => `- [ ] ${task.label}`),
    ''
  ])

  return [
    `# ${ctx.name}`,
    '',
    ctx.description,
    '',
    '> Starter kit gerado com **pronto** — do zero ao app em minutos.',
    '',
    '## Stack',
    '',
    `- **Framework:** ${ctx.stack.name}`,
    `- **Licença:** ${ctx.stack.license}`,
    `- **Tipo:** ${typeLabel(ctx.type)}`,
    `- **Recursos:** ${featureNames(ctx).join(', ')}`,
    '',
    '## Rodando',
    '',
    '~~~bash',
    ...ctx.stack.commands,
    '~~~',
    '',
    '## Estrutura',
    '',
    '~~~text',
    ...paths,
    '~~~',
    '',
    '## Recursos e sugestões open source',
    '',
    ...featureLines,
    '',
    '## Roadmap',
    '',
    ...phaseLines,
    '## Licença',
    '',
    `Código do starter kit: ${ctx.stack.license}. Dependências mantêm suas próprias licenças.`,
    ''
  ].join('\n')
}

function withReadme(files, ctx) {
  const complete = { ...files }
  if (!complete['.gitignore']) {
    complete['.gitignore'] = [
      'node_modules/',
      'dist/',
      '.env',
      '.DS_Store',
      ''
    ].join('\n')
  }
  const paths = Object.keys(complete).sort((a, b) => a.localeCompare(b))
  return {
    'README.md': readmeFile(ctx, paths),
    ...complete
  }
}

function starterCss(ctx) {
  return [
    ':root {',
    '  --bg: #070b12;',
    '  --panel: #0e1521;',
    '  --line: rgba(255, 255, 255, 0.1);',
    '  --text: #f2f6fb;',
    '  --muted: #94a0b2;',
    `  --accent: ${ctx.stack.color};`,
    '  font-family: Inter, "SF Pro Display", system-ui, -apple-system, sans-serif;',
    '}',
    '',
    '* {',
    '  box-sizing: border-box;',
    '}',
    '',
    'body {',
    '  margin: 0;',
    '  min-height: 100vh;',
    '  background:',
    '    radial-gradient(800px 460px at 82% -10%, rgba(255, 255, 255, 0.07), transparent 65%),',
    '    var(--bg);',
    '  color: var(--text);',
    '}',
    '',
    '.app {',
    '  width: min(920px, calc(100% - 40px));',
    '  margin: 0 auto;',
    '  padding: 30px 0 80px;',
    '}',
    '',
    '.topbar {',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: space-between;',
    '  padding-bottom: 22px;',
    '  border-bottom: 1px solid var(--line);',
    '}',
    '',
    '.brand {',
    '  font-size: 16px;',
    '  font-weight: 700;',
    '  letter-spacing: -0.03em;',
    '}',
    '',
    '.badge {',
    '  padding: 5px 9px;',
    '  border: 1px solid var(--line);',
    '  border-radius: 6px;',
    '  color: var(--accent);',
    '  font-family: ui-monospace, monospace;',
    '  font-size: 10px;',
    '}',
    '',
    '.hero {',
    '  padding-top: clamp(54px, 12vh, 120px);',
    '}',
    '',
    '.eyebrow {',
    '  margin: 0 0 16px;',
    '  color: var(--accent);',
    '  font-family: ui-monospace, monospace;',
    '  font-size: 10px;',
    '  letter-spacing: 0.16em;',
    '  text-transform: uppercase;',
    '}',
    '',
    'h1 {',
    '  margin: 0;',
    '  font-size: clamp(3rem, 9vw, 6.5rem);',
    '  font-weight: 780;',
    '  letter-spacing: -0.065em;',
    '  line-height: 0.95;',
    '}',
    '',
    '.lede {',
    '  max-width: 560px;',
    '  margin: 22px 0 0;',
    '  color: var(--muted);',
    '  font-size: clamp(15px, 2vw, 18px);',
    '  line-height: 1.7;',
    '}',
    '',
    '.features {',
    '  display: flex;',
    '  flex-wrap: wrap;',
    '  gap: 7px;',
    '  margin: 26px 0 0;',
    '}',
    '',
    '.features span {',
    '  padding: 6px 11px;',
    '  border: 1px solid var(--line);',
    '  border-radius: 99px;',
    '  background: rgba(255, 255, 255, 0.03);',
    '  color: #d6e0ea;',
    '  font-size: 11px;',
    '}',
    '',
    '.cta {',
    '  display: inline-flex;',
    '  margin-top: 30px;',
    '  padding: 13px 20px;',
    '  border: 0;',
    '  border-radius: 11px;',
    '  background: var(--accent);',
    '  color: #08110a;',
    '  font: inherit;',
    '  font-size: 13px;',
    '  font-weight: 700;',
    '  cursor: pointer;',
    '  text-decoration: none;',
    '}',
    '',
    '.features-section {',
    '  margin-top: 70px;',
    '  padding-top: 28px;',
    '  border-top: 1px solid var(--line);',
    '}',
    '',
    '.features-section h2 {',
    '  margin: 0 0 14px;',
    '  font-size: 18px;',
    '  letter-spacing: -0.03em;',
    '}',
    '',
    '.features-section ul {',
    '  margin: 0;',
    '  padding-left: 18px;',
    '  color: var(--muted);',
    '  font-size: 13px;',
    '  line-height: 2;',
    '}',
    ''
  ].join('\n')
}

function projectFromState() {
  const name = state.name.trim() || 'Meu App'
  const description = state.description.trim() || 'Um projeto gerado com Pronto, pronto para evoluir.'
  const stack = getStack(state.stack)
  const ctx = {
    name,
    description,
    slug: slugify(name),
    type: state.type,
    stack,
    features: FEATURES.filter((feature) => state.features.has(feature.id))
  }
  const files = stack.files(ctx)
  const phases = buildPhases(ctx)
  const id = state.currentId || makeId()

  return {
    id,
    name,
    description,
    slug: ctx.slug,
    type: ctx.type,
    stack: ctx.stack.id,
    features: ctx.features.map((feature) => feature.id),
    done: { ...state.done },
    createdAt: Date.now(),
    ctx,
    files,
    phases
  }
}

function makeId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID()
  return `p-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function loadProjects() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROJECTS_KEY) || '[]')
    return Array.isArray(stored) ? stored.filter((project) => project && project.id) : []
  } catch {
    return []
  }
}

function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null')
  } catch {
    return null
  }
}

const state = {
  name: '',
  description: '',
  type: 'web',
  stack: 'react',
  features: new Set(['auth', 'database', 'analytics', 'darkmode']),
  done: {},
  currentId: null,
  current: null,
  projects: loadProjects(),
  activeFile: 'README.md',
  activeTab: 'overview'
}

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => Array.from(document.querySelectorAll(selector))

const typeOptions = $('#type-options')
const stackGrid = $('#stack-grid')
const featureGrid = $('#feature-grid')
const presetGrid = $('#preset-grid')
const showcase = $('#stack-showcase')
const previewName = $('#preview-name')
const previewDesc = $('#preview-desc')
const previewStack = $('#preview-stack')
const previewType = $('#preview-type')
const previewFeatures = $('#preview-features')
const previewLicense = $('#preview-license')
const previewLicenseRow = $('#preview-license-row')
const previewFiles = $('#preview-files')
const output = $('#output')
const outputTitle = $('#output-title')
const outputSubtitle = $('#output-subtitle')
const overviewPanel = $('#overview-panel')
const filesPanel = $('#files-panel')
const roadmapPanel = $('#roadmap-panel')
const fileTree = $('#file-tree')
const filePath = $('#file-path')
const fileCode = $('#file-code')
const roadmapList = $('#roadmap-list')
const roadmapProgressBar = $('#roadmap-progress-bar')
const roadmapProgressText = $('#roadmap-progress-text')
const filesCount = $('#files-count')
const savedSection = $('#saved')
const savedGrid = $('#saved-grid')
const toastEl = $('#toast')
const nameInput = $('#app-name')
const descriptionInput = $('#app-description')
const saveButton = $('#save-btn')

let toastTimer = null

function saveDraft() {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify({
      name: state.name,
      description: state.description,
      type: state.type,
      stack: state.stack,
      features: [...state.features],
      done: state.done,
      currentId: state.currentId,
      generated: Boolean(state.current)
    }))
  } catch {
    return
  }
}

function showToast(message) {
  toastEl.textContent = message
  toastEl.classList.add('is-visible')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2400)
}

function ensureStack() {
  const compatible = STACKS.filter((stack) => stack.types.includes(state.type))
  if (!compatible.some((stack) => stack.id === state.stack)) {
    state.stack = compatible[0]?.id || STACKS[0].id
  }
}

function renderTypes() {
  typeOptions.innerHTML = TYPES.map((type) => `
    <button
      class="segment ${type.id === state.type ? 'is-active' : ''}"
      type="button"
      role="radio"
      aria-checked="${type.id === state.type}"
      data-type="${type.id}"
    >${type.label}</button>
  `).join('')
}

function renderStacks() {
  ensureStack()
  const compatible = STACKS.filter((stack) => stack.types.includes(state.type))
  stackGrid.innerHTML = compatible.map((stack) => `
    <button
      class="stack-option ${stack.id === state.stack ? 'is-active' : ''}"
      type="button"
      role="radio"
      aria-checked="${stack.id === state.stack}"
      data-stack="${stack.id}"
    >
      <span class="stack-glyph" style="${glyphStyle(stack)}">${stack.glyph}</span>
      <span class="stack-copy">
        <strong>${stack.name}</strong>
        <small>${stack.license} · ${stack.lang}</small>
      </span>
    </button>
  `).join('')
}

function renderFeatures() {
  featureGrid.innerHTML = FEATURES.map((feature) => {
    const active = state.features.has(feature.id)
    return `
      <button
        class="feature-chip ${active ? 'is-active' : ''}"
        type="button"
        aria-pressed="${active}"
        data-feature="${feature.id}"
      >
        <span class="feature-icon">${iconSvg(feature.icon)}</span>
        ${feature.label}
      </button>
    `
  }).join('')
}

function renderPresets() {
  presetGrid.innerHTML = PRESETS.map((preset, index) => `
    <button class="preset-card" type="button" data-preset="${preset.id}">
      <span class="preset-index">${String(index + 1).padStart(2, '0')} · ${preset.time}</span>
      <strong>${preset.label}</strong>
      <p>${preset.description}</p>
      <span class="preset-meta">
        <span>${getStack(preset.stack).name}</span>
        <span>${preset.features.length} recursos</span>
      </span>
    </button>
  `).join('')
}

function renderShowcase() {
  showcase.innerHTML = STACKS.map((stack) => `
    <div class="showcase-card">
      <div class="showcase-head">
        <span class="stack-glyph" style="${glyphStyle(stack)}">${stack.glyph}</span>
        <div>
          <strong>${stack.name}</strong>
          <small>${stack.license}</small>
        </div>
      </div>
      <p>${stack.blurb}</p>
      <div class="showcase-tags">
        <span>${stack.badge}</span>
        <span>${stack.lang}</span>
        <span>open source</span>
      </div>
    </div>
  `).join('') + `
    <div class="showcase-card showcase-cta">
      <div class="showcase-head">
        <span class="stack-glyph" style="--glyph-bg:rgba(182, 255, 92, 0.14);--glyph-fg:#b6ff5c">+</span>
        <div>
          <strong>Monte a sua</strong>
          <small>sem lock-in</small>
        </div>
      </div>
      <p>Troque de stack quando quiser. O roadmap e os recursos continuam os mesmos.</p>
      <a class="showcase-link" href="#builder">Abrir gerador <span aria-hidden="true">→</span></a>
    </div>
  `
}

function updatePreview() {
  const stack = getStack(state.stack)
  const featureList = FEATURES.filter((feature) => state.features.has(feature.id))
  const ctx = {
    name: state.name.trim() || 'Seu app',
    description: state.description.trim() || 'Descreva sua ideia para começar.',
    slug: slugify(state.name),
    type: state.type,
    stack,
    features: featureList
  }
  const files = stack.files(ctx)

  previewName.textContent = ctx.name
  previewDesc.textContent = ctx.description
  previewStack.textContent = stack.name
  previewType.textContent = typeLabel(state.type)
  previewFeatures.textContent = `${featureList.length} selecionado${featureList.length === 1 ? '' : 's'}`
  previewLicense.textContent = stack.license
  previewLicenseRow.textContent = stack.license

  const paths = Object.keys(files)
  const visible = paths.slice(0, 5)
  const extra = paths.length - visible.length
  previewFiles.innerHTML = [
    ...visible.map((path) => `<li>${escapeHtml(path)}</li>`),
    ...(extra > 0 ? [`<li>+ ${extra} arquivos</li>`] : [])
  ].join('')
}

function renderAll() {
  renderTypes()
  renderStacks()
  renderFeatures()
  updatePreview()
}

function syncInputs() {
  nameInput.value = state.name
  descriptionInput.value = state.description
}

function renderOverview(project) {
  const stack = project.ctx.stack
  const features = project.ctx.features
  const libs = features.map((feature) => ({
    label: feature.label,
    value: libFor(feature, stack)
  }))
  const commands = stack.commands.map((command) => `
    <div class="cmd-row">
      <code>${escapeHtml(command)}</code>
      <button class="mini-btn" type="button" data-copy="${escapeAttr(command)}">copiar</button>
    </div>
  `).join('')

  overviewPanel.innerHTML = `
    <div class="overview-grid">
      <div class="overview-card">
        <span class="kicker">Stack escolhida</span>
        <div class="stack-headline">
          <span class="stack-glyph" style="${glyphStyle(stack)}">${stack.glyph}</span>
          <div>
            <h3>${escapeHtml(stack.name)}</h3>
            <p>${escapeHtml(stack.license)} · ${escapeHtml(stack.lang)}</p>
          </div>
        </div>
        <p>${escapeHtml(stack.blurb)}</p>
        <div class="cmd-list">${commands}</div>
      </div>
      <div class="overview-card">
        <span class="kicker">Recursos ativos</span>
        <ul class="feature-list">
          ${features.length ? features.map((feature) => `
            <li><span class="feature-icon">${iconSvg(feature.icon)}</span>${escapeHtml(feature.label)}</li>
          `).join('') : '<li>Nenhum recurso extra selecionado.</li>'}
        </ul>
      </div>
      <div class="overview-card">
        <span class="kicker">Sugestões open source</span>
        <ul class="lib-list">
          ${libs.length ? libs.map((item) => `
            <li><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></li>
          `).join('') : '<li><span>Comece simples</span><strong>Sem dependências extras</strong></li>'}
        </ul>
      </div>
      <div class="overview-card">
        <span class="kicker">Plano de ataque</span>
        <ul class="phases-mini">
          ${project.phases.map((phase, index) => `
            <li>
              <span class="phase-dot">${String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>${escapeHtml(phase.title)}</strong>
                <small>${phase.tasks.length} tarefas · ${escapeHtml(phase.hint)}</small>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `
}

function fileIcon() {
  return '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 2.5h6l4 4v9H4z"/><path d="M10 2.5v4h4"/></svg>'
}

function showCode(project, path) {
  const content = project.files[path]
  if (content === undefined) return
  state.activeFile = path
  filePath.textContent = path
  const lines = content.replace(/\n$/, '').split('\n')
  fileCode.innerHTML = lines.map((line, index) => `
    <span class="code-line"><span class="line-num">${index + 1}</span>${escapeHtml(line) || ' '}</span>
  `).join('')
  $$('.file-item').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.file === path)
  })
}

function renderFiles(project) {
  const paths = Object.keys(project.files)
  if (!paths.includes(state.activeFile)) state.activeFile = 'README.md'
  fileTree.innerHTML = paths.map((path) => `
    <button class="file-item ${path === state.activeFile ? 'is-active' : ''}" type="button" data-file="${escapeAttr(path)}">
      ${fileIcon()}
      <span>${escapeHtml(path)}</span>
    </button>
  `).join('')
  showCode(project, state.activeFile)
}

function taskCounts(project) {
  const tasks = project.phases.flatMap((phase) => phase.tasks)
  const done = tasks.filter((task) => project.done[task.id]).length
  return { total: tasks.length, done }
}

function updateRoadmapProgress(project) {
  const counts = taskCounts(project)
  const percent = counts.total ? Math.round((counts.done / counts.total) * 100) : 0
  roadmapProgressBar.style.width = `${percent}%`
  roadmapProgressText.textContent = `${counts.done} de ${counts.total} concluídos`
}

function renderRoadmap(project) {
  roadmapList.innerHTML = project.phases.map((phase) => {
    const done = phase.tasks.filter((task) => project.done[task.id]).length
    return `
      <section class="roadmap-group">
        <div class="roadmap-group-head">
          <h3>${escapeHtml(phase.title)}</h3>
          <span>${done}/${phase.tasks.length}</span>
        </div>
        ${phase.tasks.map((task) => `
          <label class="task">
            <input type="checkbox" data-task="${escapeAttr(task.id)}" ${project.done[task.id] ? 'checked' : ''} />
            <span class="task-check">✓</span>
            <span class="task-copy">
              <strong>${escapeHtml(task.label)}</strong>
              ${task.lib ? `<small>${escapeHtml(task.lib)}</small>` : ''}
            </span>
          </label>
        `).join('')}
      </section>
    `
  }).join('')
  updateRoadmapProgress(project)
}

function setTab(tab) {
  state.activeTab = tab
  $$('.tabs button').forEach((button) => {
    button.setAttribute('aria-selected', String(button.dataset.tab === tab))
  })
  overviewPanel.hidden = tab !== 'overview'
  filesPanel.hidden = tab !== 'files'
  roadmapPanel.hidden = tab !== 'roadmap'
}

function isSaved(id) {
  return state.projects.some((project) => project.id === id)
}

function renderOutput(project) {
  output.hidden = false
  state.current = project
  outputTitle.textContent = project.name
  const counts = taskCounts(project)
  const fileTotal = Object.keys(project.files).length
  outputSubtitle.textContent = `${project.ctx.stack.name} · ${project.ctx.stack.license} · ${fileTotal} arquivos · ${counts.total} tarefas`
  filesCount.textContent = fileTotal
  saveButton.textContent = isSaved(project.id) ? 'Atualizar projeto' : 'Salvar projeto'
  renderOverview(project)
  renderFiles(project)
  renderRoadmap(project)
  setTab(state.activeTab || 'overview')
}

function renderSaved() {
  if (!state.projects.length) {
    savedSection.hidden = true
    savedGrid.innerHTML = ''
    return
  }
  savedSection.hidden = false
  savedSection.classList.add('is-in')
  savedGrid.innerHTML = state.projects.map((project) => {
    const stack = getStack(project.stack)
    const date = new Date(project.createdAt || Date.now()).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short'
    })
    return `
      <button class="saved-card" type="button" data-project="${escapeAttr(project.id)}">
        <span class="saved-top">
          <span class="stack-glyph" style="${glyphStyle(stack)}">${stack.glyph}</span>
          <span>${date}</span>
        </span>
        <strong>${escapeHtml(project.name)}</strong>
        <p>${escapeHtml(project.description)}</p>
        <span class="saved-meta">
          <span>${escapeHtml(stack.name)}</span>
          <span>·</span>
          <span>${project.features.length} recursos</span>
        </span>
      </button>
    `
  }).join('')
}

function buildAndShow(options = {}) {
  const project = projectFromState()
  state.currentId = project.id
  state.current = project
  const existing = state.projects.find((item) => item.id === project.id)
  if (existing) {
    project.createdAt = existing.createdAt
    project.done = { ...existing.done, ...state.done }
    state.done = project.done
  }
  renderOutput(project)
  saveDraft()
  if (options.scroll !== false) {
    setTimeout(() => output.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }
}

function applyPreset(id) {
  const preset = PRESETS.find((item) => item.id === id)
  if (!preset) return
  state.name = preset.name
  state.description = preset.appDescription
  state.type = preset.type
  state.stack = preset.stack
  state.features = new Set(preset.features)
  state.done = {}
  state.currentId = null
  state.current = null
  state.activeTab = 'overview'
  state.activeFile = 'README.md'
  syncInputs()
  renderAll()
  buildAndShow()
  showToast(`Preset "${preset.label}" aplicado.`)
}

function saveCurrentProject() {
  const project = state.current || projectFromState()
  const record = {
    id: project.id,
    name: project.name,
    description: project.description,
    type: project.type,
    stack: project.stack,
    features: [...project.features],
    done: { ...project.done },
    createdAt: project.createdAt || Date.now()
  }
  const index = state.projects.findIndex((item) => item.id === record.id)
  if (index >= 0) {
    record.createdAt = state.projects[index].createdAt
    state.projects[index] = record
  } else {
    state.projects.unshift(record)
  }
  state.projects = state.projects.slice(0, 12)
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(state.projects))
  } catch {
    showToast('Não foi possível salvar no navegador.')
    return
  }
  saveButton.textContent = 'Atualizar projeto'
  renderSaved()
  showToast('Projeto salvo no navegador.')
}

function loadProject(id) {
  const project = state.projects.find((item) => item.id === id)
  if (!project) return
  state.name = project.name
  state.description = project.description
  state.type = TYPES_MAP[project.type] ? project.type : 'web'
  state.stack = STACK_MAP[project.stack] ? project.stack : 'react'
  state.features = new Set(project.features.filter((feature) => FEATURE_MAP[feature]))
  state.done = { ...project.done }
  state.currentId = project.id
  state.current = null
  state.activeTab = 'overview'
  state.activeFile = 'README.md'
  ensureStack()
  syncInputs()
  renderAll()
  buildAndShow()
  showToast(`Projeto "${project.name}" carregado.`)
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Copiado para a área de transferência.'))
      .catch(() => showToast('Não foi possível copiar.'))
    return
  }
  const area = document.createElement('textarea')
  area.value = text
  document.body.append(area)
  area.select()
  try {
    document.execCommand('copy')
    showToast('Copiado para a área de transferência.')
  } catch {
    showToast('Não foi possível copiar.')
  }
  area.remove()
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1200)
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256)
  for (let index = 0; index < 256; index += 1) {
    let value = index
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1
    }
    table[index] = value >>> 0
  }
  return table
})()

function crc32(bytes) {
  let value = 0xffffffff
  for (let index = 0; index < bytes.length; index += 1) {
    value = CRC_TABLE[(value ^ bytes[index]) & 0xff] ^ (value >>> 8)
  }
  return (value ^ 0xffffffff) >>> 0
}

function createZip(files) {
  const encoder = new TextEncoder()
  const entries = Object.entries(files)
  const localParts = []
  const centralParts = []
  let offset = 0
  const dosTime = 0
  const dosDate = 0x21

  for (const [path, content] of entries) {
    const nameBytes = encoder.encode(path)
    const data = encoder.encode(content)
    const crc = crc32(data)

    const local = new Uint8Array(30 + nameBytes.length)
    const localView = new DataView(local.buffer)
    localView.setUint32(0, 0x04034b50, true)
    localView.setUint16(4, 20, true)
    localView.setUint16(6, 0x0800, true)
    localView.setUint16(8, 0, true)
    localView.setUint16(10, dosTime, true)
    localView.setUint16(12, dosDate, true)
    localView.setUint32(14, crc, true)
    localView.setUint32(18, data.length, true)
    localView.setUint32(22, data.length, true)
    localView.setUint16(26, nameBytes.length, true)
    localView.setUint16(28, 0, true)
    local.set(nameBytes, 30)
    localParts.push(local, data)

    const central = new Uint8Array(46 + nameBytes.length)
    const centralView = new DataView(central.buffer)
    centralView.setUint32(0, 0x02014b50, true)
    centralView.setUint16(4, 20, true)
    centralView.setUint16(6, 20, true)
    centralView.setUint16(8, 0x0800, true)
    centralView.setUint16(10, 0, true)
    centralView.setUint16(12, dosTime, true)
    centralView.setUint16(14, dosDate, true)
    centralView.setUint32(16, crc, true)
    centralView.setUint32(20, data.length, true)
    centralView.setUint32(24, data.length, true)
    centralView.setUint16(28, nameBytes.length, true)
    centralView.setUint32(42, offset, true)
    central.set(nameBytes, 46)
    centralParts.push(central)

    offset += local.length + data.length
  }

  const centralSize = centralParts.reduce((total, part) => total + part.length, 0)
  const end = new Uint8Array(22)
  const endView = new DataView(end.buffer)
  endView.setUint32(0, 0x06054b50, true)
  endView.setUint16(8, entries.length, true)
  endView.setUint16(10, entries.length, true)
  endView.setUint32(12, centralSize, true)
  endView.setUint32(16, offset, true)

  return new Blob([...localParts, ...centralParts, end], { type: 'application/zip' })
}

function downloadProject() {
  if (!state.current) return
  const blob = createZip(state.current.files)
  triggerDownload(blob, `${state.current.slug || slugify(state.current.name)}.zip`)
  showToast('Download do projeto iniciado.')
}

function downloadFile() {
  if (!state.current) return
  const content = state.current.files[state.activeFile]
  if (content === undefined) return
  const filename = state.activeFile.split('/').pop() || 'arquivo.txt'
  triggerDownload(new Blob([content], { type: 'text/plain;charset=utf-8' }), filename)
  showToast(`Arquivo ${filename} baixado.`)
}

function updateSavedDone(done) {
  if (!state.currentId) return
  const project = state.projects.find((item) => item.id === state.currentId)
  if (!project) return
  project.done = { ...done }
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(state.projects))
  } catch {
    return
  }
}

function newProject() {
  state.name = ''
  state.description = ''
  state.type = 'web'
  state.stack = 'react'
  state.features = new Set(['auth', 'database', 'analytics', 'darkmode'])
  state.done = {}
  state.currentId = null
  state.current = null
  state.activeTab = 'overview'
  state.activeFile = 'README.md'
  output.hidden = true
  syncInputs()
  renderAll()
  saveDraft()
  $('#builder').scrollIntoView({ behavior: 'smooth', block: 'start' })
  showToast('Novo projeto. Escolha os recursos e gere.')
}

function hydrateDraft() {
  const draft = loadDraft()
  if (!draft) {
    syncInputs()
    renderAll()
    return
  }
  state.name = typeof draft.name === 'string' ? draft.name : ''
  state.description = typeof draft.description === 'string' ? draft.description : ''
  state.type = TYPES_MAP[draft.type] ? draft.type : 'web'
  state.stack = STACK_MAP[draft.stack] ? draft.stack : 'react'
  state.features = new Set(
    Array.isArray(draft.features)
      ? draft.features.filter((feature) => FEATURE_MAP[feature])
      : ['auth', 'database', 'analytics', 'darkmode']
  )
  state.done = draft.done && typeof draft.done === 'object' ? draft.done : {}
  state.currentId = typeof draft.currentId === 'string' ? draft.currentId : null
  ensureStack()
  syncInputs()
  renderAll()
  if (draft.generated && state.currentId) {
    buildAndShow({ scroll: false })
  }
}

presetGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-preset]')
  if (button) applyPreset(button.dataset.preset)
})

typeOptions.addEventListener('click', (event) => {
  const button = event.target.closest('[data-type]')
  if (!button) return
  state.type = button.dataset.type
  ensureStack()
  renderAll()
  saveDraft()
})

stackGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-stack]')
  if (!button) return
  state.stack = button.dataset.stack
  renderStacks()
  updatePreview()
  saveDraft()
})

featureGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-feature]')
  if (!button) return
  const id = button.dataset.feature
  if (state.features.has(id)) state.features.delete(id)
  else state.features.add(id)
  renderFeatures()
  updatePreview()
  saveDraft()
})

nameInput.addEventListener('input', (event) => {
  state.name = event.target.value
  updatePreview()
  saveDraft()
})

descriptionInput.addEventListener('input', (event) => {
  state.description = event.target.value
  updatePreview()
  saveDraft()
})

$('#generate-btn').addEventListener('click', () => {
  state.activeTab = 'overview'
  buildAndShow()
  showToast('Projeto gerado. Confira os arquivos e o roadmap.')
})

$('#download-btn').addEventListener('click', downloadProject)
$('#save-btn').addEventListener('click', saveCurrentProject)
$('#new-btn').addEventListener('click', newProject)
$('#copy-file').addEventListener('click', () => {
  if (state.current) copyText(state.current.files[state.activeFile] || '')
})
$('#download-file').addEventListener('click', downloadFile)

$$('.tabs button').forEach((button) => {
  button.addEventListener('click', () => setTab(button.dataset.tab))
})

fileTree.addEventListener('click', (event) => {
  const button = event.target.closest('[data-file]')
  if (!button || !state.current) return
  showCode(state.current, button.dataset.file)
})

overviewPanel.addEventListener('click', (event) => {
  const button = event.target.closest('[data-copy]')
  if (button) copyText(button.dataset.copy)
})

roadmapList.addEventListener('change', (event) => {
  const input = event.target.closest('[data-task]')
  if (!input || !state.current) return
  if (input.checked) state.current.done[input.dataset.task] = true
  else delete state.current.done[input.dataset.task]
  state.done = { ...state.current.done }
  updateRoadmapProgress(state.current)
  updateSavedDone(state.current.done)
  saveDraft()
})

savedGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]')
  if (button) loadProject(button.dataset.project)
})

$('#clear-projects').addEventListener('click', () => {
  state.projects = []
  try {
    localStorage.removeItem(PROJECTS_KEY)
  } catch {
    return
  }
  renderSaved()
  if (state.current) saveButton.textContent = 'Salvar projeto'
  showToast('Histórico de projetos limpo.')
})

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      revealObserver.unobserve(entry.target)
    })
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 })
  $$('.reveal').forEach((element) => revealObserver.observe(element))
} else {
  $$('.reveal').forEach((element) => element.classList.add('is-in'))
}

renderPresets()
renderShowcase()
renderSaved()
hydrateDraft()
saveDraft()
