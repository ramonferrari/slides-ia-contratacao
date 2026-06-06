---
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "Fórum de Gestão Tecnológica: IA na Gestão de Contratos"
fonts:
  sans: Space Grotesk
  serif: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---

<CoverSlide
  eyebrow="Suporte Operacional: Fórum de Gestão Tecnológica"
  title="Do Dado à Decisão"
  subtitle="Soluções de IA Ajustadas ao <br>Negócio de Contratação"
  presenter="R. M. Ferrari"
  location="Vitória, ES"
  date="Junho de 2026"
/>

---

# Quem sou eu?

<CircularImage 
src="./rf.JPG" 
size="220px"
borderColor="var(--rf-highlight)"
:scale="1.1"
x="100"
y="180"
/>

<div class="prose" style="position: absolute; right: 60px; top: 175px; width: 550px; font-size: 1.1rem; line-height: 1.6;">

- Baiano, 15 anos no RJ, 2 anos em Vitória.
- Atuação por ~15 anos em processamento de dados sísmicos
- Coordenador e Cientista de Dados na Petrobras
- Doutorando em Adm. de Empresas (FGV EAESP)
  - Qualidade de informação em sistemas de LLM
</div>

<!--
[gracinha] Passei 15 anos lendo ondas sísmicas underground pra encontrar petróleo. Hoje vou te ajudar a encontrar o petróleo dentro dos seus contratos. O problema é o mesmo — informação valiosa escondida em formato que ninguém consegue ler direito.

Trabalho com ciência de dados há alguns anos. O que um cientista de dados faz, no fundo, é simples: pega informação bruta, bagunçada, espalhada — e transforma em algo que ajuda alguém a decidir melhor.

Aí eu olhei pra vocês e pensei: é exatamente isso que vocês fazem. Vocês pegam contratos — informação bruta, densa, espalhada em dezenas de documentos — e tentam transformar isso em decisão. Renovar ou não. Rescindir ou não.

Vocês são cientistas de dados de contratos. Só que as ferramentas que vocês usam ainda não acompanharam o que a área tem de melhor.
-->

---

# Roteiro de hoje

<div class="space-y-2.5 -mt-2">

<div class="glass p-3 flex gap-3 items-center" style="border-color: color-mix(in srgb, var(--rf-primary) 45%, transparent);">
  <div style="font-size: 3rem; font-weight: 900; color: var(--rf-primary); flex-shrink: 0; line-height: 0.9; width: 70px; text-align: center;">1</div>
  <div style="min-width: 0;">
    <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.15rem;">O Desafio</div>
    <div style="opacity: 0.75; font-size: 0.9rem;">IA além do hype</div>
  </div>
</div>

<div class="glass p-3 flex gap-3 items-center" style="border-color: color-mix(in srgb, var(--rf-primary) 45%, transparent);">
  <div style="font-size: 3rem; font-weight: 900; color: var(--rf-primary); flex-shrink: 0; line-height: 0.9; width: 70px; text-align: center;">2</div>
  <div style="min-width: 0;">
    <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.15rem;">O Método</div>
    <div style="opacity: 0.75; font-size: 0.9rem;">Do texto ao dado estruturado</div>
  </div>
</div>

<div class="glass p-3 flex gap-3 items-center" style="border-color: color-mix(in srgb, var(--rf-primary) 45%, transparent);">
  <div style="font-size: 3rem; font-weight: 900; color: var(--rf-primary); flex-shrink: 0; line-height: 0.9; width: 70px; text-align: center;">3</div>
  <div style="min-width: 0;">
    <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.15rem;">O Plano</div>
    <div style="opacity: 0.75; font-size: 0.9rem;">Unindo os dois mundos</div>
  </div>
</div>

<div class="glass p-3 flex gap-3 items-center" style="border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);">
  <div style="font-size: 3rem; font-weight: 900; color: var(--rf-highlight); flex-shrink: 0; line-height: 0.9; width: 70px; text-align: center;">4</div>
  <div style="min-width: 0;">
    <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.15rem;">O Resultado</div>
    <div style="opacity: 0.75; font-size: 0.9rem;">FAROL: Decisão baseada em dados</div>
  </div>
</div>

</div>

<!--
"O que vocês vão levar daqui: IA generativa é incrível, mas sozinha não resolve gestão de contratos. O que funciona é estrutura. E é exatamente isso que vamos explorar."
-->

---

<HeroSlide
  eyebrow="01"
  title="O Desafio"
/>

---

# Ciência de Dados

<div
  class="grid gap-0 mt-15 items-center"
  style="grid-template-columns: 1fr 1fr;"
>

<div>

<Venn
  top="Negócio"
  left="Estatística"
  right="Computação"
  center="Ciência de\nDados"
  size="430px"
  :transpLight="0.20"
  :transpDark="0.15"
/>

</div>

<div v-click>

<Venn
  top="Contratos"
  left="Análise e projeção \n de dados"
  right="Algoritmos e IA"
  center="\n🫵"
  centerSize="70"
  size="430px"
  :transpLight="0.20"
  :transpDark="0.15"
/>

</div>

</div>

<!--
À esquerda: ciência de dados tradicional - interseção de negócio, estatística e computação.

À direita (no clique): reframe - vocês estão na interseção de contratos, análise/projeção de dados, e algoritmos/IA. São cientistas de dados também, só que especializados.
-->

---

# Somos todos cientistas

<DataVSContract />

<!--
Um cientista de dados começa sempre com o mesmo problema: os dados são uma bagunça.

Faltam campos. Têm inconsistências. Têm duplicatas. Têm informação desatualizada. E o pior — são difíceis de consultar e quase impossíveis de comparar entre si.

Contratos têm exatamente os mesmos problemas. Campo de valor não preenchido. Cláusulas que contradizem o anexo. Três versões do mesmo documento sem saber qual é a final. Aditivo que mudou tudo mas está num PDF separado que ninguém vinculou.

Os problemas são idênticos. O que muda é o nome.
-->

---


# Gestão de Contratos

- Documento → risco silencioso
- 80 páginas → ninguém lê tudo
- O problema já está lá. Esperando.

<Spacer :h="28"/>

<BeforeAfter language="pt">>
<template #before>

Você vai ao contrato quando<br> o problema <HighLight  color="#EC635E"> já aconteceu.</HighLight>

</template>
<template #after>

Com IA: o contrato <br><HighLight color="var(--rf-highlight)"> te avisa antes!</HighLight>

</template>
</BeforeAfter>

<!--
Contratos: não são apenas documentos. São riscos silenciosos espalhados em 80 páginas que você não tem tempo de ler.

Gestão contratual tradicional considera cada contrato um documento, e até um potencial fator de risco. A gente fala em "contrato" no corredor e as pessoas associam com problemas.

A IA transforma contratos em sinais operacionais, informações vivas capazes de te avisarem antes que o problema aconteça.
-->

---

# Luz sobre riscos silenciosos

<AISpotlight />

---

# O que a IA sabe x não sabe

<AIKnowledge />

<!--
A IA generativa foi treinada com uma quantidade absurda de texto da internet. Tudo isso até uma certa data.

É por isso que ela parece tão inteligente: ela leu mais do que qualquer humano conseguiria ler em mil vidas.

Mas ela não sabe nada sobre os seus contratos. Seus documentos nunca estiveram na internet.

Então o que a gente faz? Manda os contratos junto com a pergunta — e torce pra ela ser inteligente o suficiente pra usar bem. E é aí que começa a conversa interessante.
-->

---


# A IA Quer te Agradar

<div class="grid gap-6 mt-8" style="grid-template-columns: 1fr 1fr;">

<div class="glass p-4" style="border-color: color-mix(in srgb, var(--rf-primary) 45%, transparent);">

### O que você pede

"Qual é a multa rescisória?"

A resposta que você **quer ouvir:**  
Um número.

A resposta **honesta**, se não existe:  
"Não está definida."

</div>

<div class="glass p-4" style="border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);">

### O que a IA foi treinada pra fazer

A IA aprende com feedback humano.

→ Usuário gosta de resposta **completa**  
→ Usuário gosta de resposta **confiante**

**O conflito:** "agradar" ≠ "ser preciso"

</div>

</div>

<div class="glass mt-6 p-3" style="border-color: #EC635E; text-align: center;">

**Resultado:** Quando precisa escolher entre te agradar e estar certo — ela te agrada primeiro.

</div>

<!--
Sabe por que a IA alucina com tanta frequência? Porque ela foi treinada pra te agradar. Quando você pergunta 'qual é a multa rescisória?' — a resposta que te agrada é um número. A resposta honesta, se o contrato não define, é: 'não existe.' Mas adivinhem qual ela prefere te dar.

[gracinha] Ela foi treinada por feedback humano. Toda vez que alguém aprovou uma resposta, ela aprendeu: isso agrada. Toda vez que reclamaram, ela ajustou. O resultado é um sistema literalmente incapaz de te dizer 'não sei'. [pausa] Você conhece alguém assim?
-->

---

# A IA não tem memória. Tem mesa de trabalho.

<Contextdesk />

<!--
Imagina que a IA tem uma mesa de trabalho. Tudo que você quer que ela use na análise precisa estar em cima dessa mesa ao mesmo tempo.

Documentos que você mandou: na mesa. Histórico da conversa: na mesa. Sua próxima pergunta: também vai pra mesa.

O que não cabe — ela não vê. E não avisa que não viu.

Isso explica três comportamentos que todo mundo já viveu:
- Ela lembrou do que você disse há 5 mensagens? Ainda estava na mesa.
- Ela esqueceu o começo da conversa? A mesa encheu.
- Nova conversa, zero memória? Mesa limpa. Do zero. Sempre.

A frase que eu quero que vocês levem: a IA não tem memória. Ela tem mesa. E a mesa tem limite.
--> 

---

# Corrida das IAs

<AICompetition />

<!--
Os modelos de IA estão em constante evolução. A corrida entre OpenAI, Google, Anthropic e outros continua acelerada.

O importante não é qual é o melhor modelo agora — é saber que o campo muda rápido. Pra gestão de contratos, o que importa mais é o tamanho do modelo (capacidade de entender contexto longo) e como você estrutura as instruções.

Toda semana tem um novo modelo saindo. Não deixe a ferramenta mudar sua estratégia.
-->

---

# Modelo light X pro

<ModelComparison />

<!--
Quando você escolhe modelo, não está escolhendo por elegância técnica — está escolhendo a mesa de trabalho certa.

Flash é modelo leve, rápido, barato — mesa pequena. Bom pra tarefas diretas, perguntas pontuais, contratos curtos e simples.

Pro é modelo maior, mais caro, mesa maior — consegue segurar mais contexto, perceber condicionais, detectar contradições, avisar o que você nem perguntou.

A escolha certa não é sempre o mais caro. É o suficiente pro problema. Se você tem 200 contratos de 50 páginas cada, pro é quase obrigatório.
-->

---

# Os Dois Conflitos da IA

<div class="flex items-center gap-4 mt-4" style="font-size: 0.8rem; line-height: 1.4;">

<div class="glass p-3 flex-1" style="border-color: color-mix(in srgb, var(--rf-primary) 45%, transparent); text-align: center;">

<span style="color: var(--rf-primary); font-weight: 700;">🧠 Fiel ao treinamento</span>  
Ser completa. Agradar. Parecer confiante. Nunca deixar uma pergunta sem resposta.

</div>

<div style="font-size: 1rem; font-weight: 700; flex-shrink: 0; text-align: center; opacity: 0.45; letter-spacing: 0.1em;">vs</div>

<div class="glass p-3 flex-1" style="border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent); text-align: center;">

<span style="color: var(--rf-highlight); font-weight: 700;">📋 Seguir suas instruções</span>  
Ser precisa. Dizer N/E. Citar a fonte. Usar só o que está no documento.

</div>

</div>

<div class="grid grid-cols-3 gap-2 mt-3" style="font-size: 0.7rem; line-height: 1.35;">

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Se não encontrar, põe N/E"</span>

Treinamento: resposta vazia não agrada.

→ IA inventa **8%** com total confiança.

</div>

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Extraia só o valor total"</span>

Treinamento: ser completo é ser útil.

→ IA adiciona interpretações e avisos que ninguém pediu.

</div>

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Use só o documento enviado"</span>

Treinamento: multas ficam entre 5–10%.

→ IA "preenche" cláusula vaga com conhecimento geral.

</div>

</div>

<!--
Sabe por que a IA alucina com tanta frequência? Porque ela foi literalmente treinada pra te agradar. Quando você pergunta 'qual é a multa rescisória?' — a resposta que te agrada é um número. A resposta honesta, se o contrato não define, é: 'não existe.'

Antes de falar nos limites técnicos, é importante entender o conflito de objetivos. A IA não falha por acidente — ela falha porque foi treinada para um objetivo (agradar, ser completa) que às vezes entra em rota de colisão com o que você precisa (precisão, rastreabilidade, contenção).
-->

---

# Os Dois Limites da IA

<div class="relative" style="height: 355px; margin-top: 0.5rem;">

<svg viewBox="0 0 900 355" xmlns="http://www.w3.org/2000/svg" style="position: absolute; inset: 0; width: 100%; height: 100%;">
  <defs>
    <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--rf-primary)" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity="0.03"/>
    </radialGradient>
    <radialGradient id="inventouGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--rf-highlight)" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="var(--rf-highlight)" stop-opacity="0.02"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .svg-label { font-size: 13px; font-weight: 400; letter-spacing: 0.03em; font-family: 'Space Grotesk', sans-serif; }
      .svg-label-bold { font-size: 13px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
      .svg-badge { font-size: 11px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
    </style>
  </defs>

  <!-- CLIQUE 0: sempre visível — contrato -->
  <circle cx="450" cy="183" r="145"
    fill="color-mix(in srgb, var(--rf-primary) 3%, transparent)"
    stroke="#2cc9ec"
    stroke-width="1.5"
    stroke-dasharray="9 6"
    opacity="0.85"/>
  <text x="450" y="27" text-anchor="middle"
    class="svg-label"
    style="font-size:13px; font-weight:500; letter-spacing:0.03em; font-family:'Space Grotesk',sans-serif;"
    fill="#2cc9ec">O que estava no contrato</text>

  <!-- CLIQUE 1: o que a IA achou -->
  <g v-click>
    <circle cx="468" cy="177" r="110"
      fill="url(#innerGrad)"
      stroke="var(--rf-primary)"
      stroke-width="1.5"
      filter="url(#softGlow)"/>
    <circle cx="412" cy="138" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="138" x2="542" y2="138" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <circle cx="412" cy="157" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="157" x2="524" y2="157" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    <circle cx="412" cy="176" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="176" x2="538" y2="176" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <circle cx="412" cy="195" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="195" x2="514" y2="195" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    <circle cx="412" cy="214" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="214" x2="528" y2="214" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <text x="468" y="308" text-anchor="middle"
      class="svg-label-bold"
      style="font-size:13px; font-weight:600; letter-spacing:0; font-family:'Space Grotesk',sans-serif;"
      fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)">O que a IA achou</text>
  </g>

  <!-- CLIQUE 2: perdeu (vermelho) -->
  <g v-click>
    <circle cx="323" cy="153" r="3.5" fill="#EC635E" opacity="0.55"/>
    <circle cx="312" cy="183" r="3"   fill="#EC635E" opacity="0.45"/>
    <circle cx="319" cy="213" r="3.5" fill="#EC635E" opacity="0.55"/>
    <circle cx="336" cy="137" r="2.5" fill="#EC635E" opacity="0.35"/>
    <circle cx="341" cy="167" r="3"   fill="#EC635E" opacity="0.45"/>
    <circle cx="331" cy="198" r="2.5" fill="#EC635E" opacity="0.4"/>
    <circle cx="349" cy="145" r="2.5" fill="#EC635E" opacity="0.3"/>
    <circle cx="346" cy="222" r="2.5" fill="#EC635E" opacity="0.35"/>
    <circle cx="321" cy="173" r="2"   fill="#EC635E" opacity="0.3"/>
    <rect x="240" y="108" width="72" height="22" rx="5"
      fill="rgba(236,99,94,0.12)" stroke="#EC635E" stroke-width="1" opacity="0.9"/>
    <text x="276" y="123" text-anchor="middle"
      class="svg-badge"
      style="font-size:11px; font-weight:600; font-family:'Space Grotesk',sans-serif;"
      fill="#EC635E">perdeu</text>
  </g>

  <!-- CLIQUE 3: inventou (verde-limão) -->
  <g v-click>
    <circle cx="636" cy="250" r="58"
      fill="url(#inventouGrad)"
      stroke="var(--rf-highlight)"
      stroke-width="1.5"
      stroke-dasharray="7 5"
      opacity="0.85"/>
    <line x1="582" y1="237" x2="688" y2="237" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="580" y1="251" x2="690" y2="251" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="584" y1="265" x2="684" y2="265" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <rect x="598" y="310" width="80" height="22" rx="5"
      fill="color-mix(in srgb, var(--rf-highlight) 10%, transparent)" stroke="var(--rf-highlight)" stroke-width="1" opacity="0.9"/>
    <text x="638" y="325" text-anchor="middle"
      class="svg-badge"
      style="font-size:11px; font-weight:600; font-family:'Space Grotesk',sans-serif;"
      fill="var(--rf-highlight)">inventou</text>
  </g>

</svg>

<!-- Left card: aparece no clique 2 (junto com os pontos vermelhos) -->
<div v-click="2" class="glass p-4" style="position: absolute; left: 0; top: 55px; width: 190px; border-color: rgba(236,99,94,0.45);">
  <div style="color: #EC635E; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode perder informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo estava no contrato, mas não apareceu na resposta.</p>
</div>

<!-- Right card: aparece no clique 3 (junto com o círculo amarelo) -->
<div v-click="3" class="glass p-4" style="position: absolute; right: 0; top: 55px; width: 190px; border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);">
  <div style="color: var(--rf-highlight); font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode inventar informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo apareceu na resposta, mas não estava no contrato.</p>
</div>

</div>

<!--
Dois problemas opostos — ao mesmo tempo. Recall: ela não cobre tudo e não avisa o que perdeu. Alucinação: ela vai além do que estava no documento sem avisar. Os próximos dois slides detalham cada um.
-->

---

# Limite 1: Recall

<div class="grid grid-cols-2 gap-8 mt-12">

<div class="glass p-6">

### O que estava no contrato

<div class="mt-4" style="line-height: 2.2">

✓ Renovação automática  
✓ Prazo de aviso: 90 dias  
✓ Multa — Anexo D  
✓ Foro de eleição  
✓ Cláusula de exclusividade  

</div>

</div>

<div class="glass p-6">

### O que a IA devolveu

<div class="mt-4" style="line-height: 2.2">

<span style="color: var(--rf-primary)">✓ Renovação automática</span>  
<span style="color: var(--rf-primary)">✓ Prazo de aviso: 90 dias</span>  
<span style="color: #EC635E">✗ Multa — Anexo D</span>  
<span style="color: #EC635E">✗ Foro de eleição</span>  
<span style="color: #EC635E">✗ Cláusula de exclusividade</span>  

</div>

<div class="mt-6 opacity-70 text-sm">

Sem avisar que perdeu.

</div>

</div>

</div>

<!--
O estagiário pelo menos diria 'esse aqui eu não entendi bem.' A IA devolve a lista com a mesma confiança — tenha encontrado tudo ou não.
-->

---

# Limite 2: Alucinação

<Spacer :h="20"/>


<div class="grid gap-8 mt-6" style="grid-template-columns: 1fr 1fr;">

<div>

### IA sem validação

A IA não avisa quando erra. Em contratos, um número inventado numa cláusula pode custar muito caro.

<div class="glass p-4 mt-8" style="border-color: #EC635E;">

**Confiante. Errado. Sem avisar.**

</div>

</div>

<LLMChat prompt="Qual é a multa rescisória deste contrato?" model="GPT-4" provider="OpenAI" version="2024-01">

A multa rescisória é de **8% do valor total**, conforme estabelecido na Cláusula 12.3.

</LLMChat>

</div>

<!--
O segundo limite se chama alucinação. É quando a IA não encontra a informação — mas em vez de dizer 'não sei', ela cria uma resposta que parece plausível. Testei isso: peguei um contrato que não tinha multa rescisória definida. Perguntei: 'qual é o valor da multa?' Ela respondeu: 8%. Com total confiança. De onde veio esse 8%? Ela também não sabe.

[gracinha] Parecia um advogado sênior. O problema: a cláusula não existe. A multa nunca foi definida. E ela também não sabe de onde veio o 8%. Basicamente o estagiário no primeiro dia de estágio — só que o estagiário pelo menos ficaria com vergonha.
-->

---


# Limite 3: O Usuário

<div class="grid grid-cols-3 gap-4 mt-8" style="font-size: 0.85rem;">

<div class="glass p-4">

### Contrato A — 2015

<Spacer :h="15"/>

```
Multa rescisória:
5% do valor total
```

✓ Simples. IA acha fácil.

</div>

<div class="glass p-4">

### Contrato B — 2019

<Spacer :h="15"/>

```
Penalidade conforme
tabela do Anexo D
```

⚠️ Anexo D não está
no PDF.

</div>

<div class="glass p-4">

### Contrato C — 2023

<Spacer :h="15"/>
```
Indenização pelos
custos operacionais
até a data...
```

✗ Quanto é isso?
Depende de variáveis
externas.

</div>

</div>


<div class="glass mt-6 p-4 text-center" style="font-size: 0.95rem;">

A solução não é ter mais força, é ter a chave certa para cada fechadura.

</div>

<!--
Terceiro limite — esse não é culpa da IA. É culpa dos próprios contratos. Três formas diferentes de dizer — ou não dizer — a mesma coisa. Multiplicado por 80 contratos, isso vira um problema operacional.

Usar o mesmo prompt pra contratos diferentes é como tentar abrir todas as fechaduras com a mesma chave.

Cada contrato é uma fechadura diferente. Alguns são simples, diretos, funcionam com prompt genérico. Outros têm variabilidade que o prompt genérico não consegue seguir.

A solução não é ter mais força bruta de modelo. É ter a chave certa — prompt especializado, regras claras, validações estruturadas.
-->


---

<HeroSlide
  eyebrow="02"
  title="O Método"
  subtitle="Do texto ao dado estruturado"
/>

---


# Classificação

<Classification />

<!--
[gracinha — transição pro bloco de técnicas] Agora vem a parte em que eu sou pago pra ser entediante. Vou mostrar 5 técnicas. Vou tentar ser rápido.

Classificação é triagem — como no pronto-socorro. Quando você chega com dor no peito: pulseira vermelha, atendimento imediato. Torção no tornozelo: pulseira verde, pode esperar.

Com contratos: o modelo aprende com seu histórico — quais deram problema, quais não deram. Quando chega um contrato novo, ele classifica automaticamente: risco baixo, médio, alto, crítico.

Você e o jurídico focam energia onde realmente importa.
-->

---

# Projeção

<Regression />

<!--
Projeção é como o corretor de imóveis que olha pra um apartamento e diz o preço sem pesquisar — ele sente, baseado em tudo que já vendeu.

Com contratos: você tem 50 contratos de limpeza. Metragem, frequência, localidade, valor pago em cada um. O modelo encontra o padrão real.

Chega uma proposta nova. O modelo diz: R$ 47k por mês é o valor justo. O fornecedor quer R$ 71k.

Você não precisa aceitar nem recusar na hora. Você tem um argumento baseado em dados — não em feeling.
-->

---

# Agrupamentos

<Clustering />

<!--
Agrupamento é encontrar padrões que você não viu. Todos os seus contratos de segurança têm multa entre 3% e 7%. Um tem 25%. 

Anomalia não significa necessariamente problema. Significa: alguém precisa olhar pra esse.

O banco bloqueia sua compra em Dubai às 3h da manhã — não porque sabe que é fraude, mas porque é fora do padrão. Com contratos, anomalia pode ser oportunidade de negociação ou aviso de cláusula estranha.
-->

---

# Redes

<GraphNetwork />

<!--
LinkedIn recomenda conexão porque vocês têm 12 contatos em comum. Ele mapeia relacionamentos — não atributos isolados, mas conexões entre pessoas.

Com fornecedores: Fornecedor A tem contrato com sua empresa. Fornecedor A tem sociedade com Fornecedor B. Fornecedor B tem pendência judicial com sua empresa.

Sem grafo: você assina com A sem saber da relação com B.
Com grafo: o sistema avisa — 'atenção, conexão de risco detectada.'

Vocês gerenciam fornecedores, não só contratos. E fornecedores têm relacionamentos que os contratos não mostram.
-->

---

# Acompanhamento temporal

<TimeSeries />

<!--
Series temporal mostra padrões ao longo do tempo. Seus custos contratuais cresceram 8% ao ano? Algum fornecedor virou outlier? Tem sazonalidade que você não tinha percebido?

Com histórico estruturado de todos os contratos, você identifica tendências que não aparecem em PDFs isolados.

Por exemplo: o reajuste médio da carteira estava em 5% — mas nos últimos 3 anos pulou pra 8%. Isso merecia atenção. É oportunidade de renegociar ou sinal de que o mercado mudou.
-->

---

<HeroSlide
  eyebrow="03"
  title="O Plano"
  subtitle="Unindo os dois mundos"
/>

---

# O Elo que Faltava

<div class="grid gap-8 mt-12" style="grid-template-columns: 1fr 1fr; align-items: center;">

<div class="glass p-8">

### Todas essas técnicas

**Classificação, Projeção, Agrupamentos, Redes, Temporal...**

Todas funcionam. Todas escalam. Todas revelam padrões.

<div class="glass p-4 mt-6" style="border-color: var(--rf-primary); background: transparent;">

**Pré-requisito:** Dados estruturados.

</div>

</div>

<div v-click class="glass p-8" style="border-color: var(--rf-highlight); text-align: center;">

### O Elo que Faltava

**PDF** → Caótico, denso, não-estruturado

<div style="font-size: 2rem; text-align: center; margin: 0.8rem 0; background: linear-gradient(to bottom, var(--rf-primary), var(--rf-highlight)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">↓</div>

**Transformação com IA**

<div style="font-size: 2rem; text-align: center; margin: 0.8rem 0; background: linear-gradient(to bottom, var(--rf-primary), var(--rf-highlight)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">↓</div>

**Dados** → Tabelas, campos, comparáveis

</div>

</div>

<!--
Técnicas incríveis. Todas funcionam. Mas todas têm um pré-requisito que ninguém menciona: elas precisam de dados estruturados.

Não PDFs de 80 páginas. Dados estruturados — tabelas, campos, números comparáveis.

E é exatamente aí que a maioria das empresas trava. Porque os contratos estão em PDF — não em base de dados.

O elo que falta é transformar PDF em dado. E é isso que vou mostrar agora.
-->
---

# Extração de Dados

<ContractExtraction />

<!--
Imagina que cada contrato já tem um formulário escondido dentro dele. Data de vencimento, valor total, multa rescisória, índice de reajuste — tudo lá.

Só que misturado com 79 páginas de 'considerando que', 'doravante denominado' e 'nos termos da cláusula 7.2.1 do Anexo D'.

Extração com IA é encontrar esse formulário invisível — e preenchê-lo automaticamente.

Juridiquês entra. Matemático sai.
-->

---

# Caso de Extração na Prática

<div class="grid gap-12 mt-5"
style="grid-template-columns: 4fr 6fr;"
>

<div>

<div style="font-size: 0.9rem">
<PromptCard title="Extração Dados">
Você é um assessor jurídico especialista em digitalização de informações do contrato recebido. Extraia:

  - Categoria, entre: engenharia, jurídico, saúde ou secretaria.
  - Número de posições
  - Valor mensal
  - Fornecedor
</PromptCard>
</div>
</div>

<v-click>

<div style="font-size: 0.9rem">
<ExtractionTable :colWidths="['25%', '15%', '35%', '25%']">

| Categoria | Posições | Valor mensal | Fornecedor |
|-----------|----------|--------------|------------|
| Engenharia| 82       | R$ 1.600.000 | BB Consulting |
| Jurídico  | 12       | R$ 480.000   | Lex Group     |
| Secretariado| 24     | R$ 210.000   | Prime Office  |
| Saúde     | 18       | R$ 234.000   | MedCayre      |

</ExtractionTable>
</div>
</v-click>


</div>

::note::
À esquerda: um prompt bem estruturado que pede extração específica com regras claras.

À direita (no clique): a tabela que sai automaticamente. Quatro linhas de dados estruturados — cada uma corresponde a um contrato, cada coluna a um campo que importa.

Agora você pode comparar. Qual categoria tira mais custo? Qual fornecedor tem melhor valor por posição? Essas perguntas só aparecem quando os dados estão estruturados.


---

<HeroSlide
  eyebrow="04"
  title="O Resultado"
  subtitle="FAROL: Decisão baseada em dados"
/>

---

# 🔦 FAROL DE CONTRATOS

<div class="rf-orb" style="width: 600px; height: 400px; background: radial-gradient(ellipse at center, color-mix(in srgb, var(--rf-primary) 12%, transparent) 0%, transparent 70%); filter: blur(60px); top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>

<div style="position: relative; max-width: 800px; margin: 0 auto;">

<div style="margin-bottom: 2rem;">
<span style="font-size: 0.9rem; color: var(--rf-primary); font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.8;">Solução inteligente</span>
<div style="font-size: 1.6rem; font-weight: 700; margin-top: 0.8rem; background: linear-gradient(to right, var(--rf-primary), var(--rf-highlight)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Inteligência aplicada à gestão de contratos</div>
</div>

<div v-click style="margin-top: 2.5rem; padding: 1.5rem; border: 1px solid color-mix(in srgb, var(--rf-primary) 30%, transparent); border-radius: 12px; background: color-mix(in srgb, var(--rf-primary) 5%, transparent);"> Você carrega seus PDFs do jeito que estão. O sistema lê, extrai os dados críticos, organiza as informações e avisa quando algo precisa de atenção.

<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid color-mix(in srgb, var(--rf-primary) 20%, transparent); color: var(--rf-highlight); font-weight: 500; font-size: 1.1rem;">
→ Não substitui o advogado <br> → Substitui ler 50 páginas pra descobrir uma data
</div>

</div>

</div>

::note::
O Farol de Contratos é uma solução que resolve exatamente o que mostrei. Primeira aparição do nome e conceito.

---

# Apresentamos o FAROL

<ImagePanel
  src="./farol.jpeg"
  alt="Farol de Contratos"
  position="center"
  width="800px"
/>

<!--
FAROL: solução de extração de texto a partir de documentos, e consulta posterior usando IA Generativa.

Qualquer campo que faz sentido pra vocês — o Farol pode extrair. Porque o que muda é só o que você pede pra ele procurar.
-->

---

# Como Funciona

<div style="display: flex; align-items: center; justify-content: center;">

```mermaid
%%{init: {'flowchart': {'curve': 'linear', 'htmlLabels': true}, 'theme': 'dark', 'themeVariables': {'primaryColor': '#131414', 'primaryBorderColor': 'var(--rf-primary)', 'secondBkgColor': '#1a1b1b', 'tertiaryColor': '#1a1b1b', 'fontFamily': 'Space Grotesk'}}}%%
graph LR
  A["<br/><b>Seus PDFs</b><br/>Caótico, denso<br/>não-estruturado"]
  B["<br/><b>Leitura Inteligente</b><br/>Layout, tabelas,<br/>anexos, assinaturas"]
  C["<br/><b>Extração Estruturada</b><br/>Cláusulas em campos<br/>fixos e validados"]
  D["<br/><b>Painel + Alertas</b><br/>Dados prontos<br/>pra decisão"]
  
  A -->|transformação| B
  B -->|estruturação| C
  C -->|visualização| D
  
  classDef step1 stroke:#63d3a1,stroke-width:2px,color:#fff,fill:#0a4d3e,text-align:center
  classDef step2 stroke:#63d3a1,stroke-width:2px,color:#fff,fill:#0a4d3e,text-align:center
  classDef step3 stroke:#e2f81b,stroke-width:2px,color:#fff,fill:#131414,text-align:center
  classDef step4 stroke:#e2f81b,stroke-width:2px,color:#fff,fill:#131414,text-align:center
  
  class A step1
  class B step2
  class C step3
  class D step4
```

</div>

<!--
O processo tem três etapas.

Primeiro: leitura inteligente do PDF — não só o texto, mas o layout. Tabelas, anexos, cabeçalhos. Porque é nesses lugares que ficam as informações importantes.

Segundo: a IA extrai com regras claras. 'Se não encontrar, escreva N/E — não invente.' 'Para cada campo preenchido, cite de onde veio.' Essas regras são o antídoto contra alucinação.

Terceiro: tudo aparece num painel. Com alertas, scores de risco e histórico.
-->

---

# O Que o Farol Extrai (Padrão)

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">

<div style="padding: 1rem; border: 1px solid color-mix(in srgb, var(--rf-highlight) 30%, transparent); border-radius: 8px; background: color-mix(in srgb, var(--rf-highlight) 5%, transparent);">
<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Número do contrato</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Quem contrata / contratado</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Valor total</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Data de assinatura</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Data de vencimento</div>
</div>
</div>
</div>

<div style="padding: 1rem; border: 1px solid color-mix(in srgb, var(--rf-highlight) 30%, transparent); border-radius: 8px; background: color-mix(in srgb, var(--rf-highlight) 5%, transparent);">

<Spacer :h="13"/>

<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Score de risco (0-100)</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Criticidade</div>
<div style="font-size: 0.8rem; opacity: 0.8;">Baixo / Médio / Alto / Crítico</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem; margin-bottom: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Resumo do escopo</div>
</div>
</div>
<div style="display: flex; gap: 0.8rem;">
<span style="color: var(--rf-highlight); font-size: 1.2rem;">✓</span>
<div>
<div style="font-weight: 600; color: var(--rf-primary);">Resumo dos riscos</div>
</div>
</div>
</div>

</div>

<div style="margin-top: 2.5rem; font-size: 0.9rem; opacity: 0.75; text-align: center;">
<span style="color: var(--rf-highlight); font-weight: 600; font-size: 1.4rem ">Cada negócio tem o que importa pra ele.</span>
</div>

<!--
Esses são os campos que o Farol extrai por padrão. É um bom começo pra qualquer empresa. Mas é só o começo.
-->

---

# Farol: o assistente do detetive
<Spacer :h="3"/>

<div class="grid gap-8 mt-6" style="grid-template-columns: 1fr 1fr;">

<div>

### Você não precisa confiar — você pode verificar
<Spacer :h="8"/>

- IA crua diz "5%". Você torce pra estar certo.
- O Farol diz "5%" — e te mostra de onde veio.

<div class="glass p-4 mt-6" style="font-size: 0.9rem; border-color: var(--rf-primary);">

Você pode abrir o PDF e conferir.  
Sempre.

</div>

</div>

<div v-click style="display: flex; flex-direction: column; gap: 0.8rem;">

<div style="padding: 1rem; border-left: 3px solid var(--rf-primary); background: color-mix(in srgb, var(--rf-primary) 8%, transparent); border-radius: 4px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 1rem;">
<div>
<div style="font-weight: 600; color: var(--rf-primary); font-size: 0.85rem;">Multa rescisória</div>
<div style="font-size: 1.2rem; font-weight: 700; margin-top: 0.3rem;">5%</div>
</div>
<div style="font-size: 0.75rem; color: var(--rf-highlight); text-align: right;">📄 Cláusula 8.2<br>página 12</div>
</div>

<div style="padding: 1rem; border-left: 3px solid var(--rf-primary); background: color-mix(in srgb, var(--rf-primary) 8%, transparent); border-radius: 4px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 1rem;">
<div>
<div style="font-weight: 600; color: var(--rf-primary); font-size: 0.85rem;">Renovação automática</div>
<div style="font-size: 1.2rem; font-weight: 700; margin-top: 0.3rem;">Sim</div>
</div>
<div style="font-size: 0.75rem; color: var(--rf-highlight); text-align: right;">📄 Cláusula 14.1<br>página 18</div>
</div>

<div style="padding: 1rem; border-left: 3px solid #EC635E; background: rgba(236,99,94,0.08); border-radius: 4px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 1rem;">
<div>
<div style="font-weight: 600; color: #EC635E; font-size: 0.85rem;">Foro de eleição</div>
<div style="font-size: 1.2rem; font-weight: 700; margin-top: 0.3rem;">N/E</div>
</div>
<div style="font-size: 0.75rem; color: #EC635E; text-align: right;">⚠ Campo não<br>encontrado</div>
</div>

</div>

</div>

<!--
O que mais me incomoda na IA crua é que você não sabe de onde veio a resposta. Ela diz '5%' e você torce pra estar certo.

O Farol funciona diferente. Quando extrai uma informação, ele cita a fonte. 'Multa rescisória: 5%. Fonte: Cláusula 8.2, página 12.'

Você pode abrir o PDF e conferir. Você não precisa confiar no sistema — você pode verificar. E isso é tudo que importa pra gestão de risco.
-->

---

# O Que Está Faltando?

<div class="rf-orb" style="width: 600px; height: 400px; background: radial-gradient(ellipse at center, color-mix(in srgb, var(--rf-highlight) 12%, transparent) 0%, transparent 70%); filter: blur(60px); top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>

<div style="text-align: center; position: relative;">

<div style="font-size: 2.2rem; font-weight: 900; line-height: 1.3; margin-bottom: 3rem; background: linear-gradient(to bottom, var(--rf-highlight), var(--rf-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
Farol de Contratos: personalizado para vocês
</div>

<div v-click style="max-width: 700px; margin: 0 auto; padding: 2rem; border-left: 4px solid var(--rf-primary); text-align: left;">


**Quem aqui já teve um problema que poderia ter sido evitado se soubesse antes que um contrato estava vencendo?**

<div style="margin-top: 1rem; color: var(--rf-highlight); font-weight: 500;">→ Qual informação o Farol deveria extrair para você?</div>

</div>

</div>

<!--
"Quem aqui já teve um problema que poderia ter sido evitado se soubesse antes que um contrato estava vencendo? [pausa] Qual informação você queria ter tido?"
-->

---

# O Que o Farol NÃO Faz

<div class="grid grid-cols-2 gap-8 mt-10">

<div style="padding: 1rem; border: 1px solid color-mix(in srgb, var(--rf-highlight) 30%, transparent); border-radius: 32px; background: color-mix(in srgb, var(--rf-highlight) 5%, transparent);">

### O Farol FAZ

<span style="color: var(--rf-highlight);">✓</span> Extrai dados estruturados  
<span style="color: var(--rf-highlight);">✓</span> Identifica padrões  
<span style="color: var(--rf-highlight);">✓</span> Alerta sobre anomalias  
<span style="color: var(--rf-highlight);">✓</span> Escala para centenas  
<span style="color: var(--rf-highlight);">✓</span> Rastreia a fonte  
<span style="color: var(--rf-highlight);">✓</span> Marca incertezas  

</div>

<div style="padding: 1rem; border: 1px solid rgba(248, 27, 27, 0.3); border-radius: 32px; background: rgba(248, 86, 27, 0.05);">

### O Farol NÃO FAZ

<span style="color: #EC635E;">✗ </span> Julga se o contrato é bom ou ruim  
<span style="color: #EC635E;">✗</span> Interpreta lei  
<span style="color: #EC635E;">✗</span> Resolve anexos faltantes  
<span style="color: #EC635E;">✗</span> Substitui advogado em casos complexos  

</div>

</div>

<!--
A divisão de trabalho é clara: Farol faz o trabalho sujo de leitura. Você e seu time fazem o trabalho que exige julgamento.

Ele extrai e organiza — mas não julga estratégia. Se a multa de 5% é boa ou ruim pra vocês, depende do mercado, do fornecedor, da negociação — isso é decisão humana.

Ele avisa sobre cláusulas — mas não interpreta legislação. Isso ainda é com o jurídico.

E se o contrato referencia um anexo que não está no PDF — ele vai avisar que o anexo está faltando. Mas não vai inventar o que está nele.
-->

---

# Moral

<div class="rf-center" style="display: flex; flex-direction: column; align-items: center; text-align: left;">


<div style="width: 560px; max-width: 90%;">
<Terminal
  :conversation="[{ user: 'E aí, qual a moral da história?', response: 'Ah! Informação escondida num PDF não serve pra ninguém\nO farol ilumina o que está lá.\nPara você decidir com dados, não com sorte!' }]"
  modelName="Claude Opus 4.8"
  :loop="false"
/>
</div>
</div>

<!--
Vocês começaram o dia ouvindo sobre tudo que IA pode fazer. Eu vim mostrar onde ela tropeça — e como a gente construiu estrutura em volta dela pra que funcione de verdade.

O Farol não existe porque IA é incrível. Existe porque informação escondida num PDF de 80 páginas não serve pra ninguém.

O risco silencioso ainda está lá. Mas agora vocês têm ferramentas pra iluminar o que estava escondido.
-->

---

# Perguntas?

<script setup>
import farolSvg from '/public/farol.svg?url'
</script>

<div style="position: relative; height: 350px; display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; align-items: center;">

<div class="rf-orb" style="width: 500px; height: 300px; background: radial-gradient(ellipse at center, color-mix(in srgb, var(--rf-primary) 15%, transparent) 0%, transparent 70%); filter: blur(40px); left: 50%; top: 50%; transform: translate(-50%, -50%);"></div>

<!-- Coluna esquerda: SVG -->
<div style="position: relative; z-index: 1; display: flex; justify-content: flex-end; align-items: center;">
<img :src="farolSvg" alt="Farol" style="width: 300px; height: 300px; filter: drop-shadow(0 0 30px color-mix(in srgb, var(--rf-primary) 40%, transparent));" />
</div>

<!-- Coluna direita: Texto e links -->
<div style="position: relative; z-index: 1; text-align: left;">

<div style="font-size: 2.8rem; font-weight: 900; letter-spacing: 0.03em; margin-bottom: 1.5rem; line-height: 1.3;">
<span style="color: var(--rf-highlight);">FAROL</span> DE<br><span style="color: var(--rf-primary);">CONTRATOS</span>
</div>

<div style="height: 2px; width: 100px; background: linear-gradient(to right, var(--rf-primary), transparent); margin-bottom: 2.5rem;"></div>

<div style="line-height: 2.2;">
<div style="font-size: 1.1rem; font-weight: 600; letter-spacing: 0.02em; margin-bottom: 1.2rem;">
<span style="color: var(--rf-highlight);">▶</span> <a href="https://esdigital.petrobras.com.br" style="color: var(--rf-primary); text-decoration: none; cursor: pointer;" target="_blank">esdigital.petrobras.com.br</a>
</div>
<div style="font-size: 1.1rem; font-weight: 600; letter-spacing: 0.02em;">
<span style="color: var(--rf-highlight);">▶</span> <a href="https://hubES.petrobras.com.br" style="color: var(--rf-primary); text-decoration: none; cursor: pointer;" target="_blank">hubES.petrobras.com.br</a> → <span style="color: var(--rf-highlight);">Farol</span>
</div>
</div>

</div>

</div>
