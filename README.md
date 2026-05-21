# Motiva Verde - Mobile App 🌿🛣️

## 1. Definição da Solução

**Qual problema escolhemos resolver?**
A falta de controle em tempo real e o registro ineficiente do estado da vegetação nos trechos das rodovias. Isso gera roçadas desnecessárias (desperdício de Opex) e risco de autuação pela ARTESP (vegetação acima de 30 cm).

**Quem é o usuário do app?**
- Operador de Campo (Inspetor de Trecho)
- Supervisor de Manutenção (visualização e gestão)

**Qual é a principal ação do app?**
Registrar ocorrências de vegetação alta com foto e geolocalização, permitindo a classificação do risco de autuação para priorizar as equipes de roçada.

---

## 2. Funcionalidades do App (MVP)

Focando no essencial para validação do problema, o MVP conta com:
* **Nova Ocorrência:** Formulário para registrar o trecho (km), foto da vegetação e altura estimada.
* **Listagem de Ocorrências:** Feed com o histórico de registros feitos em campo, ordenados por urgência.
* **Detalhe da Ocorrência:** Tela com as informações completas do registro (foto, data, local, responsável).
* **Classificação de Risco:** Sistema visual de prioridade:
    * 🟢 **Baixo:** Vegetação < 15 cm.
    * 🟡 **Médio (Atenção):** Vegetação entre 15 cm e 24 cm.
    * 🔴 **Alto (Crítico):** Vegetação >= 25 cm (limite de alerta para evitar os 30 cm da ARTESP).

---

## 3. Estrutura Técnica do Projeto

O projeto mobile foi estruturado visando escalabilidade e tipagem estática, preparando o terreno para a Sprint 2.

**Stack Tecnológica:**
* React Native com Expo
* TypeScript

**Arquitetura de Pastas Inicial:**
```text
src/
  ├── components/  # Componentes reutilizáveis (Botões, Cards de ocorrência, Headers)
  ├── screens/     # Telas do aplicativo (List, NewOccurrence, Details)
  └── types/       # Definições de interfaces e tipos do TypeScript