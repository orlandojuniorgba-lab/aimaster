# AiMaster PWA — Guia de Instalação

## Estrutura de arquivos
```
aimaster-pwa/
├── index.html       ← App completo (HTML + CSS + JS tudo junto)
├── manifest.json    ← Config do PWA
├── sw.js            ← Service Worker (offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## 🚀 Subir no GitHub Pages (5 minutos)

1. Acesse **github.com** e faça login
2. Clique em **"New repository"**
3. Nome: `aimaster` — marque **Public** — clique **Create repository**
4. Na página do repositório, clique em **"uploading an existing file"**
5. Arraste TODOS os arquivos (index.html, manifest.json, sw.js, e a pasta icons/)
6. Clique **Commit changes**
7. Vá em **Settings → Pages → Branch: main → Save**
8. Aguarde ~2 minutos
9. Acesse: `https://SEU-USUARIO.github.io/aimaster/`

---

## 📱 Instalar no celular como app

### Android (Chrome):
1. Abra o link no Chrome
2. Toque no menu (⋮) → **"Adicionar à tela inicial"**
3. Confirme → ícone aparece na home

### iPhone (Safari):
1. Abra o link no Safari
2. Toque em **Compartilhar** (□↑) → **"Adicionar à Tela de Início"**
3. Confirme → ícone aparece na home

---

## 🔑 Configurar o Mestre IA

1. Acesse **console.anthropic.com**
2. Crie uma conta (gratuito, US$5 de crédito inicial)
3. Vá em **API Keys → Create Key**
4. Copie a chave (começa com `sk-ant-...`)
5. No app, toque em **⚙ → Chave de API** e cole

---

## 💰 Custo estimado

| Uso | Custo |
|-----|-------|
| Testes pessoais | ~R$ 0,05/sessão |
| 100 jogadores/dia | ~R$ 5,00/dia |
| Crédito inicial gratuito | ~500 sessões de teste |

---

## 🔄 Atualizar o app

Quando quiser mudar algo:
1. Edite o `index.html` (ou peça ao Claude)
2. No GitHub, abra o arquivo → clique no lápis ✏️ → cole o novo código → **Commit**
3. Aguarde 1-2 minutos → recarregue no celular

---

Projeto desenvolvido com Claude (Anthropic) — AiMaster MVP v0.6
