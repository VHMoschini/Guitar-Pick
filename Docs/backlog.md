# 🎸 Backlog – Plataforma de Desafios Musicais

> Modelo leve de Product Backlog Building (PBB), com foco em clareza, evolução contínua e priorização simples para MVP e além.

---

## ✅ Em andamento
- [ ] Criar estrutura de dados do desafio (`id`, `notasEsperadas`, `backingUrl`) – `P1`
- [ ] Implementar pitch detection com Pitchy – `P1`

---

## 🧠 P1 – Core do MVP
### 🎯 História 1: Tocar um desafio e receber feedback técnico
Como guitarrista,  
Quero tocar um desafio,  
Para receber um feedback sobre minha execução.

**Critérios de aceitação:**
- [ ] O sistema detecta as notas tocadas
- [ ] Compara com as notas esperadas
- [ ] Mostra visualmente o resultado (acerto/erro)

**Tarefas:**
- [ ] Criar componente `DesafioPage`
- [ ] Criar componente `Gravador`
- [ ] Criar estrutura visual do resultado
- [ ] Comparação entre notas detectadas e esperadas
- [ ] Pontuação baseada em acertos

---

### 🎯 História 2: Ver meu desempenho e me comparar com outros
Como guitarrista,  
Quero ver como me saí comparado a outros,  
Para ter motivação para melhorar.

**Critérios de aceitação:**
- [ ] Mostrar leaderboard por desafio
- [ ] Incluir dados de usuários fakes para parecer ativo
- [ ] Mostrar posição do usuário na tabela

**Tarefas:**
- [ ] Criar hook `useUserId()`
- [ ] Gerar seed de usuários fakes
- [ ] Componente `Leaderboard`
- [ ] Misturar seed com dados reais

---

## ✨ P2 – Extras possíveis
- [ ] Animação visual estilo Guitar Hero no fundo
- [ ] Feedback dinâmico durante execução (tipo: "Boa! Acertou um C")
- [ ] Botão “Tentar novamente” com reload do desafio
- [ ] Histórico local de execuções (últimos 3 desafios)

---

## 🌱 P3 – Ideias futuras
- [ ] Detecção de ritmo/tempo
- [ ] Gravação em vídeo sincronizado com o desafio
- [ ] Compartilhamento de performance (link público)
- [ ] Modo desafio cronometrado
- [ ] Editor de desafios personalizados

---

## 🔄 Iterações ou ajustes
- [ ] Refinar visual do leaderboard após feedback
- [ ] Adicionar sons de feedback (ex: nota correta = “pling”)
- [ ] Refatorar lógica de comparação para permitir variações harmônicas

---

## 🗂️ Histórico concluído
*(Mover para cá quando finalizar tarefas e releases)*

---

## 🧭 Notas
- `P1`: Essencial para MVP
- `P2`: Agrega valor extra ao MVP
- `P3`: Visão de evolução futura