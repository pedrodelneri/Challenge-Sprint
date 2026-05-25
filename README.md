# 🌿 Motiva - Gestão Inteligente de Áreas Verdes Rodoviárias

Este aplicativo faz parte da entrega da **Sprint 2**. O objetivo do projeto é substituir as inspeções manuais de vegetação por um mapeamento digital inteligente que auxilia a concessionária **Motiva** a identificar pontos críticos (como mato alto e árvores caídas), priorizar podas e otimizar as operações.

## 🚀 Funcionalidades (Fluxo do MVP)
- **Lista de Ocorrências**: Exibe todos os pontos críticos de vegetação identificados por sensoriamento ou relatos de campo, classificados por nível de risco.
- **Cadastro de Ocorrência**: Permite adicionar uma nova área identificada, especificando a rodovia, o km, o diagnóstico da vegetação e o nível de urgência.
- **Detalhes da Ocorrência**: Exibe informações aprofundadas sobre o local selecionado para direcionar a equipe de capina/poda.

## 🛠️ Tecnologias Utilizadas
- **React Native** (via Expo Go)
- **TypeScript** (Tipagem forte e prevenção de erros em tempo de desenvolvimento)
- **React Hooks (`useState`)** para gerenciamento de estado dinâmico e controle de navegação.

## 📂 Dados Mockados
Os dados simulam cenários reais encontrados em concessões de rodovias (ex: sinalização encoberta, canteiro central necessitando de roçada). Estão localizados em `src/data/mockData.ts` e alimentam dinamicamente a aplicação.

## 💻 Como Rodar o Projeto

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados em sua máquina.
2. Clone o repositório:
   ```bash
   git clone <https://github.com/pedrodelneri/Challenge-Sprint.git>