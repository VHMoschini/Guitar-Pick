# 🎸 Roadmap MVP – Plataforma de Desafios Musicais

> **Objetivo:** Validar se guitarristas curtem desafios tocáveis com feedback em tempo real, sem login nem complexidade, com uma UI leve e gamificada.

## 🗓️ Duração total: 6 semanas
- Tempo semanal planejado: **4h**
- Margem de segurança: ~20%
- Entrega semanal avaliada e ajustada conforme andamento real

---

## 📦 Semana 1 – Setup + Desafio básico
**Objetivo:** Rodar o projeto local com uma página funcional e capturar áudio via navegador.

### Tarefas:
- [x] Setup do projeto (React + Vite + Tailwind) – **0.5h** -> 1:00
- [x] Estrutura básica de layout – **0.5h** -> 0:55:46
- [ ] Componente `DesafioPage` com desafio hardcoded – **0.5h**
- [ ] Componente `Gravador` com Web Audio API – **1h**
- [ ] Visualização simples de pitch (nota detectada) – **0.5h**

**Estimado:** 3h  
**Tempo real gasto:** `___`

## @log

```
[19-04-2025 13:22] Estrutura básica de layout -> Fiz um layout no PS para guiar a construção do primeiro visual hardcoded para termos base do que devemos construir.
```

```
[19-04-2025 1:28] Setup do projeto (React + Vite + Tailwind) -> Inicio Real do projeto com o setup da stack, fiz varios testes com o NeoVim mas senti que não seria uma boa ideia para o projeto então mantive o visual studio code que já estou familiarizado. Acabei usando até mais de uma hora nos testes mas para manter realista vou deixar logado apenas o utilizado para o setup da ferramenta final mesmo.
```


---

## 🎯 Semana 2 – Comparação e resultado
**Objetivo:** Comparar execução com as notas esperadas e exibir resultado para o usuário.

### Tarefas:
- [ ] Estrutura dos dados dos desafios (`id`, `notasEsperadas`, `backingUrl`) – **0.5h**
- [ ] Lógica de comparação entre notas tocadas e notas alvo – **1h**
- [ ] Componente `Resultado` com feedback textual e pontuação – **1h**
- [ ] UX: repetir desafio / tentar de novo – **0.5h**

**Estimado:** 3h  
**Tempo real gasto:** `___`

---

## 🧪 Semana 3 – Identificação + leaderboard com seed
**Objetivo:** Associar resultados a um identificador local e mostrar um ranking com dados fakes.

### Tarefas:
- [ ] Hook `useUserId()` – **0.5h**
- [ ] Criar seed com 5+ usuários fake – **0.5h**
- [ ] Mostrar leaderboard por desafio – **1h**
- [ ] Misturar dados fakes com reais – **0.5h**
- [ ] Mensagens tipo “Você está em 4º lugar” – **0.5h**

**Estimado:** 3h  
**Tempo real gasto:** `___`

---

## 🎨 Semana 4 – Polimento visual
**Objetivo:** Dar identidade visual e refinar a usabilidade.

### Tarefas:
- [ ] Estilização com Tailwind – **1h**
- [ ] Feedback visual do pitch detectado – **0.5h**
- [ ] Loading / estados de erro / botão “voltar” – **0.5h**
- [ ] Animações suaves e transições – **1h**

**Estimado:** 3h  
**Tempo real gasto:** `___`

---

## ☁️ Semana 5 – Armazenamento de resultados (opcional)
**Objetivo:** Salvar resultados no Supabase ou localmente.

### Tarefas:
- [ ] Setup do Supabase – **0.5h**
- [ ] Tabela `resultados` – **0.5h**
- [ ] Função `submitResultado()` – **1h**
- [ ] Leaderboard real misturado ao seed – **1h**

**Estimado:** 3h  
**Tempo real gasto:** `___`

---

## 🚀 Semana 6 – Deploy + Teste externo
**Objetivo:** Publicar versão de testes e colher feedback real.

### Tarefas:
- [ ] Deploy no Vercel/Netlify – **0.5h**
- [ ] Formulário de feedback (Typeform, Google Forms) – **0.5h**
- [ ] Testar em navegadores e mobile – **1h**
- [ ] Convidar 3+ guitarristas para testar – **1h**

**Estimado:** 3h  
**Tempo real gasto:** `___`

---

## @log (progresso semanal)
```
- [ ] [yyyy-mm-dd] Semana 1 iniciada
- [ ] [yyyy-mm-dd] Setup finalizado, tempo gasto: ___
- [ ] [yyyy-mm-dd] Pitch detection funcionando, tempo gasto: ___
- [ ] [yyyy-mm-dd] Semana 1 concluída – tempo total: ___
```

---

## @ref (links úteis)
- [Pitchy (detecção de pitch)](https://github.com/insin/pitchy)
- [Tone.js (manipulação de áudio)](https://tonejs.github.io/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)