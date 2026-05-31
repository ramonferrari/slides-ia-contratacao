# CLAUDE.md — slides-IA-contratacao

Apresentação Slidev para o Fórum de Gestão Tecnológica.
Tema: IA aplicada à gestão de contratos. Produto: Farol de Contratos.

## Stack

- **Slidev** com tema customizado em `styles/theme.css`
- Fontes locais: Space Grotesk, JetBrains Mono, TeX Gyre Pagella
- Componentes Vue em `components/`
- Arquivo principal: `slides.md`
- Referência de componentes disponíveis: `slides-model.md`

## Estética

- Fundo: `#131414` com glow verde radial (`rgba(12,99,85,0.28)`)
- Verde primário: `#63d3a1` — `var(--rf-primary)`
- Amarelo destaque: `#e2f81b` — `var(--rf-highlight)`
- Vermelho alerta: `#EC635E`
- Glassmorphism: classe `.glass` (já inclui blur, border, shadow)
- Títulos h1: TeX Gyre Pagella, uppercase, com underline amarelo via `::after`
- Nunca usar `ImagePanel` com URLs placeholder — preferir componentes Vue nativos do tema

## Estrutura da apresentação (slides.md)

```
ABERTURA
  Capa → Somos todos cientistas → Gestão de Contratos → Luz sobre riscos

BLOCO 1 — IA: como funciona
  O que a IA sabe → Mesa de trabalho → Modelos → Limite 1 (Recall)
  → Limite 2 (Alucinação) → GPS no Lago → A IA quer agradar
  → Limite 3 (Variabilidade) → O Chaveiro

BLOCO 2 — Técnicas de ML
  Venn Ciência de Dados → Classificação → Projeção → Agrupamentos
  → Redes → Temporal → O Elo que Faltava (transição)

BLOCO 3 — Extração
  ContractExtraction → Caso 01 (Extração na Prática)

ENCERRAMENTO — Farol
  Então o Que Fazer? → Farol → Como Funciona → Lista de Mercado
  → O Detetive → Demo → O que extrai → Cardápio → O que falta?
  → O que não faz → Moral → Perguntas
```

## Prioridades abertas

### 🟡 Importante

**1. Slide de abertura pessoal**
Não existe slide "Quem sou". O roteiro v2 previa 2 min de contexto antes de DataVSContract.
Opções: criar slide simples com 2-3 linhas, ou confirmar que será feito verbalmente sem slide.

**2. Título "Tanto faz o modelo?" — revisar**
Único título com tom informal + interrogação no meio da frase.
Sugestão: "Flash vs. Pro — qual modelo usar?"

**3. "Então o Que Fazer?" — checar posição no ensaio**
Vem logo após Caso 01 (extração funcionando). Pode soar estranho mostrar
extração funcionando e depois perguntar "o que fazer?". Revisar em ensaio ao vivo.

### 🟢 Polimento

**4. Notas do palestrante (::note::) incompletas**
Slides sem nota: O Elo que Faltava, todos os slides de ML
(Classificação, Projeção, Agrupamentos, Redes, TimeSeries), O Chaveiro (nova versão),
Lista de Mercado (nova versão), Cardápio (nova versão).
Adicionar antes do ensaio final.

**5. Títulos dos slides de ML — conferir com componentes**
Classificação, Projeção, Agrupamentos, Redes, TimeSeries têm `<h1>` do Slidev
visível acima do componente. Confirmar se o componente já tem título interno —
se sim, remover o `# Título` do slide ou ajustar para subtítulo.

**6. "Caso 01 — Extração na Prática" — conteúdo do PromptCard**
O texto do prompt tem um erro de digitação: "especista" → "especialista".
Corrigir antes da apresentação.

**7. Slide de Demonstração — conteúdo vazio**
O slide DEMONSTRAÇÃO tem só "Carregando contratos reais..." como texto.
Se o sistema não estiver ao vivo no dia, preparar vídeo gravado como fallback.

## Resolvido

- ~~ImagePanel com URLs placeholder~~ → substituídos por LLMChat, TerminalBlock, BeforeAfter e glass cards
- ~~"Caso 01 — Grupos e Anomalias" título errado~~ → renomeado para "Extração na Prática"
- ~~Limite 1 ausente~~ → criado com grid 2 colunas verde/vermelho
- ~~Slides de ML órfãos após Perguntas~~ → reordenados no Bloco 2
- ~~3 slides de rascunho no meio~~ → removidos
- ~~Slide diagrama dos limites~~ → criado em SVG inline com estética do tema (Os Dois Limites da IA)

## Componentes disponíveis (ver slides-model.md)

`<BeforeAfter>`, `<RiskCard>`, `<MetricCard>`, `<ArchitectureFlow>`,
`<ImagePanel>`, `<ProgressiveReveal>`, `<DecisionFlow>`, `<Callout>`,
`<StreamingLLM>`, `<LLMChat>`, `<GlassCard>`, `<BrowserWindow>`,
`<TerminalBlock>`, `<Spacer>`, `<HighLight>`, `<PromptCard>`, `<Venn>`,
`<CoverSlide>`, `<HeroSlide>`, `<DataVSContract>`, `<AISpotlight>`,
`<AIKnowledge>`, `<Contextdesk>`, `<ModelComparison>`, `<ContractExtraction>`,
`<Regression>`, `<Classification>`, `<Clustering>`, `<GraphNetwork>`, `<TimeSeries>`

Classes utilitárias: `.glass`, `.rf-table`, `.rf-hero`, `.rf-eyebrow`,
`.rf-reveal`, `.rf-reveal-2`, `.rf-reveal-3`, `.rf-metrics-2/3/4`, `.tag`
