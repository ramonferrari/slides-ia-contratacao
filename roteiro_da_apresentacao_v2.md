# Roteiro Completo — Palestra de Contratos + IA
**Duração:** 60 minutos  
**Público:** Analistas e gestores de contratos, não-programadores  
**Estrutura:** 3 blocos + encerramento bifurcado (Farol ou Prompt)

---

> **Como ler este roteiro:**
> - Cada slide tem: Objetivo, Visual, Fala Esperada, Notas e Timing
> - Slides marcados com ✂️ podem ser cortados se o tempo apertar
> - Slides marcados com 🔀 têm versão alternativa (Plano A / Plano B)
> - As 3 analogias de extração estão marcadas com 🧩 🗣️ ⛏️

---

## VISÃO GERAL DO ROTEIRO

```
BLOCO 0 — Abertura                        [00:00 → 08:00]  8 min
  Quem sou + Os dados de vocês

BLOCO 1 — IA: O que é, como funciona      [08:00 → 22:00] 14 min
  Treinamento + Mesa + Limites + Virada

BLOCO 2 — Técnicas de ML em Contratos     [22:00 → 42:00] 20 min
  5 técnicas com analogias lúdicas

BLOCO 3 — Do PDF à Base de Dados          [42:00 → 52:00] 10 min
  Extração com IA generativa

ENCERRAMENTO — Prompt ou Farol            [52:00 → 60:00]  8 min
  Bifurcação + Perguntas
```

---

# BLOCO 0 — ABERTURA
*Objetivo: credibilidade + conexão + reframe de identidade da plateia*

---

## Slide 00 — Quem Sou
**Objetivo:** Credibilidade em 3 frases. A estrela é o paralelo com a plateia, não o currículo.

### Visual
```
[Seu nome]
[Foto — opcional]

Cientista de Dados
[X anos] transformando dados em decisões
```

### Fala esperada
> "Trabalho com ciência de dados há X anos. O que um cientista de dados faz, no fundo, é simples: pega informação bruta, bagunçada, espalhada — e transforma em algo que ajuda alguém a decidir melhor.
>
> *(pausa)*
>
> Aí eu olhei pra vocês e pensei: é exatamente isso que vocês fazem.
>
> Vocês pegam contratos — informação bruta, densa, espalhada em dezenas de documentos — e tentam transformar isso em decisão. Renovar ou não. Rescindir ou não. Negociar ou não.
>
> Vocês são cientistas de dados de contratos. Só que as ferramentas que vocês usam ainda não acompanharam o que a área tem de melhor.
>
> É isso que eu quero compartilhar hoje."

### Notas
- "Vocês são cientistas de dados de contratos" precisa de pausa depois. É o presente que você dá logo no início.
- Não detalhe o currículo. 3 frases e vai pro próximo slide.

### Timing
`00:00 → 02:00`

---

## Slide 01 — Os Dados de Vocês
**Objetivo:** Fazer a plateia ver contratos como dados — com todos os problemas clássicos de dados.

### Visual
Duas colunas:

```
CIENTISTA DE DADOS        VOCÊS

Dataset bruto             Contratos

Dados faltantes           Campos não preenchidos

Dados inconsistentes      Cláusulas contraditórias

Dados duplicados          Versões do mesmo contrato

Dados desatualizados      Aditivos não incorporados

Difícil de consultar      PDF de 80 páginas

Difícil de comparar       Cada contrato é diferente
```

### Fala esperada
> "Um cientista de dados começa sempre com o mesmo problema: os dados são uma bagunça.
>
> Faltam campos. Têm inconsistências. Têm duplicatas. Têm informação desatualizada. E o pior — são difíceis de consultar e quase impossíveis de comparar entre si.
>
> *(aponta pra coluna da direita)*
>
> Reconhecem?
>
> Contratos têm exatamente os mesmos problemas. Campo de valor não preenchido. Cláusulas que contradizem o anexo. Três versões do mesmo documento sem saber qual é o final. Aditivo que mudou tudo mas está num PDF separado que ninguém vinculou.
>
> Os problemas são idênticos. O que muda é o nome."

### Notas
- "Reconhecem?" é a pergunta mais importante do slide. Pausa real depois dela.
- Se alguém der exemplo próprio — deixa falar. É ouro.

### Timing
`02:00 → 05:00`

---

## Slide 02 — Risco Silencioso
**Objetivo:** Nomear o problema central antes de apresentar qualquer solução.

### Visual
Dois bullets que aparecem em sequência:

```
Contratos: não são apenas documentos.

São riscos silenciosos espalhados
em 80 páginas que ninguém
tem tempo de ler.
```

Depois, separador, e embaixo:

```
Antes: você vai ao contrato
       quando o problema já aconteceu.

Com IA: o contrato te avisa antes.
```

### Fala esperada
> "Contratos não são apenas documentos. São riscos silenciosos espalhados em 80 páginas que ninguém tem tempo de ler.
>
> O contrato que vence semana que vem. A multa que ninguém calculou. A renovação automática que ninguém cancelou.
>
> Antes disso era inevitável — não havia como ler tudo com atenção suficiente.
>
> Com IA, a equação muda. O contrato passa a te avisar antes — não você vai ao contrato quando o estrago já está feito."

### Timing
`05:00 → 08:00`

---

# BLOCO 1 — IA: O QUE É, COMO FUNCIONA
*Objetivo: educar sem condescendência. Plateia sai sabendo avaliar IA com senso crítico.*

---

## Slide 03 — O que a IA Sabe (e de Onde Veio)
**Objetivo:** Explicar treinamento sem jargão. Base para tudo que vem depois.

### Visual
```
O QUE A IA SABE                  O QUE A IA NÃO SABE

Tudo que estava                  Seus contratos.
na internet até
uma certa data.                  Sua empresa.

Livros, artigos,                 Sua negociação
leis, fóruns,                    de ontem.
notícias, código...
                                 Nada disso estava
É muito.                         na internet.
É impressionante.                Nunca esteve.
```

### Fala esperada
> "A IA generativa foi treinada com uma quantidade absurda de texto da internet. Tudo isso até uma certa data.
>
> É por isso que ela parece tão inteligente: ela leu mais do que qualquer humano conseguiria ler em mil vidas.
>
> Mas ela não sabe nada sobre os seus contratos. Seus documentos nunca estiveram na internet.
>
> Então o que a gente faz? Manda os contratos junto com a pergunta — e torce pra ela ser inteligente o suficiente pra usar bem.
>
> *(pausa)*
>
> E é aí que começa a conversa interessante."

### Timing
`08:00 → 10:00`

---

## Slide 04 — 🗣️ ANALOGIA: O Tradutor de Idiomas
**Objetivo:** Primeiro uso da analogia de extração — introduzir que IA faz ponte entre linguagens.

### Visual
Frase à esquerda:
```
Contrato foi escrito
em juridiquês.

Base de dados
fala matemático.

A IA é o tradutor
simultâneo.
```

À direita: **imagem cômica de tradutor simultâneo exausto com fones de ouvido**

### Fala esperada
> "Tem uma imagem que eu gosto muito pra explicar o que a IA faz com contratos.
>
> Contrato foi escrito em juridiquês — pra advogado ler, pra juiz interpretar. Base de dados fala matemático — números, datas, categorias, sim ou não.
>
> A IA generativa é o tradutor simultâneo entre esses dois idiomas. Ela lê juridiquês e escreve matemático.
>
> E como todo bom tradutor — ela às vezes hesita, às vezes interpreta demais, às vezes perde a nuance. Vou mostrar isso em detalhe agora."

### Notas
- Essa analogia volta no Bloco 3 quando você mostra a extração na prática.
- Plante a semente aqui, colha lá.

### Timing
`10:00 → 11:30`

---

## Slide 05 — A Mesa de Trabalho
**Objetivo:** Explicar janela de contexto, memória e limite com uma única metáfora.

### Visual — Parte 1
```
┌──────────────────────────────────────────────────┐
│              A MESA DE TRABALHO                  │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌────────────────┐ │
│  │Contrato  │  │Contrato  │  │ HISTÓRICO DA   │ │
│  │    1     │  │    2     │  │ CONVERSA       │ │
│  └──────────┘  └──────────┘  │                │ │
│                              │ Você: "analise"│ │
│                              │ IA: "encontrei"│ │
│                              │ ...            │ │
│                              └────────────────┘ │
│                                                  │
│      A IA só vê o que está em cima da mesa.      │
│      O que não cabe — não existe pra ela.        │
└──────────────────────────────────────────────────┘
```

### Fala esperada
> "Imagina que a IA tem uma mesa de trabalho. Tudo que você quer que ela use na análise precisa estar em cima dessa mesa ao mesmo tempo.
>
> Documentos que você mandou: na mesa. Histórico da conversa: na mesa. Sua próxima pergunta: também vai pra mesa.
>
> O que não cabe — ela não vê. E não avisa que não viu.
>
> *(pausa)*
>
> Isso explica três comportamentos que todo mundo já viveu:
>
> Ela lembrou do que você disse há 5 mensagens? Ainda estava na mesa.
> Ela esqueceu o começo da conversa? A mesa encheu.
> Nova conversa, zero memória? Mesa limpa. Do zero. Sempre.
>
> A frase que eu quero que vocês levem: a IA não tem memória. Ela tem mesa. E a mesa tem limite."

### Visual — Parte 2 (segundo clique)
```
MODELO LEVE          MODELO TOPO
(mais barato)        (mais caro)

Mesa pequena         Mesa grande
Estagiário           Sênior com 20 anos

Rápido, barato,      Percebe condicionais,
tarefas diretas      detecta contradições,
                     avisa o que não perguntou
```

### Fala esperada — Parte 2
> "E o tamanho da mesa varia por modelo. Modelo mais barato, mesa menor — e um estagiário bem treinado sentado atrás dela. Modelo mais caro, mesa maior — e um sênior com 20 anos de experiência.
>
> A escolha certa não é sempre o mais caro. É o suficiente pro problema."

### Timing
`11:30 → 15:00`

---

## Slide 06 — Os Dois Limites que Mais Importam
**Objetivo:** Recall e alucinação com o diagrama duplo.

### Visual
Diagrama com três regiões:

```
┌─────────────────────────────────────────────┐
│         O que estava no contrato            │
│                                             │
│    ┌────────────────┐                       │
│    │ O que a IA     │  ← o que ela PERDEU   │
│    │ achou certo ░░░│░░░░░░░                 │
│    └──────────░░░░░░┘      ░                │
│               ░ o que ela  ░                │
└───────────────░────────────░────────────────┘
                ░ INVENTOU   ░
                ░░░░░░░░░░░░░░
                (fora do doc)

     Dois problemas opostos. Ao mesmo tempo.
```

### Fala esperada
> "Dois limites que vocês precisam conhecer — e que acontecem ao mesmo tempo.
>
> Primeiro: ela não cobriu tudo. Parte do contrato ela não encontrou, não processou, não mencionou. Em silêncio. Você não sabe o que ela perdeu.
>
> Segundo: parte do que ela respondeu não estava no documento. Ela foi além — porque você perguntou e ela quis responder. É como perguntar pro GPS uma rua que não existe..."

*(avança para o próximo slide)*

### Timing
`15:00 → 16:30`

---

## Slide 07 — O GPS no Lago ✂️
**Objetivo:** Humor visual para fixar alucinação.

### Visual
À esquerda:
```
"É como perguntar pro GPS
uma rua que não existe..."
```
À direita: **foto de carro na beira do lago**

Legenda:
```
Confiante. Errado. Sem avisar.
```

### Fala esperada
> *(ri com a plateia)*
>
> "Confiante. Errado. Sem avisar.
>
> O antídoto é simples: sempre peça a fonte. 'De onde veio essa informação? Cite o trecho.' Se ela não consegue citar — trate como suspeito até confirmar."

### Timing
`16:30 → 17:30`

---

## Slide 08 — A IA Quer te Agradar
**Objetivo:** Explicar RLHF sem o termo. Ponte para o Bloco 2.

### Visual
```
"A IA também vive
conflitos como a gente.

Ela quer te agradar.
Mas precisa ser honesta."
```

À direita: **imagem humorística de robô se recusando a fazer algo errado**

### Fala esperada
> "Por que ela alucina com tanta frequência? Porque ela foi literalmente treinada pra te agradar. Quando a resposta agrada, ela reforça aquilo.
>
> O problema é que 'agradar' e 'ser preciso' às vezes são objetivos opostos.
>
> Quando você pergunta 'qual é a multa rescisória?' e o contrato não tem multa definida — a resposta honesta é 'não existe.' Mas a resposta que te agrada é um número.
>
> *(pausa)*
>
> Sabendo disso — vamos ver o que dá pra fazer com IA em contratos de verdade."

### Timing
`17:30 → 19:00`

---

## Slide 09 — Virada: De IA para Vocês

### Visual
Aparece em duas partes:

```
Até aqui: IA no geral.
```

*(pausa — depois aparece grande:)*

```
Você não gerencia contratos.

Você gerencia risco silencioso
espalhado em centenas de PDFs
que ninguém tem tempo de ler.
```

### Fala esperada
> "Até aqui eu falei de IA no geral. Modelos, mesas, estagiários, GPS no lago.
>
> A partir de agora eu falo de vocês.
>
> *(avança)*
>
> Vocês não gerenciam contratos. Gerenciam risco silencioso espalhado em PDFs que ninguém tem tempo de ler.
>
> *(pausa de 3 segundos)*
>
> Esse é o problema que a IA finalmente consegue ajudar a resolver — se você souber como pedir."

### Notas
- Nada mais no slide. O vazio é intencional.
- Se a plateia reagir — não preencha o silêncio. Espere.

### Timing
`19:00 → 22:00`

---

# BLOCO 2 — TÉCNICAS DE ML EM CONTRATOS
*Objetivo: mostrar que contratos são dados — e dados têm técnicas. Tom: revelação, não aula.*

---

## Slide 10 — O Convite
**Objetivo:** Enquadrar o bloco. Você está convidando, não ensinando.

### Visual
```
E se vocês pudessem usar
as mesmas técnicas que
Netflix, Spotify e bancos usam
nos dados de vocês?

Os contratos.
```

### Fala esperada
> "Vou mostrar agora cinco técnicas que cientistas de dados usam o tempo todo. Cada uma com uma analogia do cotidiano — e o paralelo direto com contratos.
>
> Não precisam entender a matemática. Precisam reconhecer o problema que cada uma resolve."

### Timing
`22:00 → 23:00`

---

## Slide 11 — Classificação: A Triagem
**Objetivo:** Classificação como triagem de risco. Analogia do pronto-socorro.

### Visual
À esquerda, analogia:
```
PRONTO-SOCORRO

Dor no peito →
pulseira vermelha,
atendimento imediato.

Torção no tornozelo →
pulseira verde,
pode esperar.

Triagem não lê todo
prontuário com a
mesma atenção.
Prioriza o risco.
```

À direita, paralelo:
```
SEUS CONTRATOS

Alto valor + prazo curto
+ sem SLA →
🔴 CRÍTICO

Valor médio + prazo longo
+ fornecedor histórico →
🟢 BAIXO RISCO

IA não lê tudo com
a mesma atenção.
Prioriza o risco.
```

### Fala esperada
> "Classificação é o filtro de spam do Gmail — só que pra contratos.
>
> O Gmail nunca te pergunta se aquela mensagem do príncipe nigeriano é spam. Ele já sabe. Aprendeu com milhões de e-mails marcados antes.
>
> Mas eu prefiro a analogia do pronto-socorro. Quando você chega com dor no peito: pulseira vermelha, atendimento imediato. Torção no tornozelo: pulseira verde, pode esperar.
>
> A triagem não lê o prontuário de cada paciente com a mesma atenção. Ela prioriza pelo risco.
>
> Com contratos: o modelo aprende com seu histórico — quais deram problema, quais não deram. E quando chega um contrato novo, ele classifica: risco baixo, médio, alto, crítico.
>
> Você e o jurídico focam energia onde realmente importa."

### Visual (segundo clique) — Gráfico de exemplo
```
Gráfico 2D:
Eixo X = valor do contrato (R$)
Eixo Y = prazo em meses

Pontos verdes (sem problema histórico)
Pontos vermelhos (deram problema)
Linha de decisão separando as regiões
Novo contrato plotado na zona vermelha → ⚠️
```

### Timing
`23:00 → 26:00`

---

## Slide 12 — Regressão: O Corretor
**Objetivo:** Regressão como precificação inteligente de contratos.

### Visual
À esquerda:
```
CORRETOR DE IMÓVEIS

Chega num bairro novo.
Sem pesquisa, sem calculadora.

"Esse aqui vale
uns R$ 800k."

Como ele sabe?
Tudo que já vendeu antes.
```

À direita:
```
SEUS CONTRATOS

Contrato de limpeza.
Metragem: 2.000m²
Frequência: diária
Cidade: São Paulo

Valor justo: R$ 47k/mês

Fornecedor pediu: R$ 71k/mês

Argumento de negociação:
baseado em dados,
não em feeling.
```

### Fala esperada
> "Regressão é o corretor de imóveis que olha pra um apartamento e diz o preço sem precisar pesquisar. Ele não calcula — ele sente, baseado em tudo que já vendeu.
>
> Regressão faz a mesma coisa, mas sem feeling. Ela olha os 50 contratos de limpeza que você assinou nos últimos 5 anos: metragem, frequência, localidade, valor pago. E encontra o padrão real.
>
> Aí chega uma proposta nova. O modelo diz: R$ 47k por mês é o valor justo pra esse perfil. O fornecedor está pedindo R$ 71k.
>
> Você não precisa aceitar nem recusar na hora. Você tem um argumento baseado em dados — não em feeling."

### Visual (segundo clique) — Gráfico
```
Gráfico de dispersão:
Eixo X = metragem do local
Eixo Y = valor mensal do contrato
Reta de regressão cortando os pontos
Ponto destacado ACIMA da reta → "esse está caro"
Ponto destacado NA reta → "esse está justo"
```

### Timing
`26:00 → 29:00`

---

## Slide 13 — Anomalia: O Onde Está o Wally
**Objetivo:** Detecção de anomalia como encontrar o que não deveria estar ali.

### Visual
À esquerda:
```
"Anomalia é encontrar
o Wally.

Ele está na página.
Você só precisa de um
sistema que saiba o que
é 'não-Wally'
pra encontrá-lo rápido."
```

À direita: **imagem do Onde Está o Wally**

### Fala esperada
> "O banco bloqueia sua compra em Dubai às 3h da manhã — não porque sabe que é fraude, mas porque é fora do padrão. Você compra café todo dia em Pinheiros. Dubai às 3h é Wally.
>
> Com contratos: todos os seus contratos de segurança têm multa entre 3% e 7%. Um tem 25%. Todos têm prazo de 12 a 24 meses. Um tem 60 meses. Todos têm foro em São Paulo. Um tem foro numa comarca do interior que você nunca ouviu falar.
>
> Anomalia não significa necessariamente problema. Significa: alguém precisa olhar pra esse.
>
> *(avança pro gráfico)*
>
> Olha esse box plot de valores de multa. Todos os pontos agrupados entre 3 e 7%. Esse aqui em 25% — você sabia?"

### Visual (segundo clique) — Gráfico
```
Box plot de valores de multa rescisória:
Caixa central entre 3-7%
Um ponto isolado em 25% com círculo vermelho
Legenda: "esse você sabia?"
```

### Timing
`29:00 → 32:00`

---

## Slide 14 — Grafos: Quem Conhece Quem
**Objetivo:** Mostrar risco de relacionamento entre fornecedores.

### Visual
Rede de nós:
```
         [Sua empresa]
        /      |       \
      [A]     [B]      [C]
       |
      [D] ←→ [Risco judicial
              com sua empresa]
```
Linha vermelha entre A e D.
Legenda: *"Você sabia que A tem sociedade com D?"*

### Fala esperada
> "LinkedIn recomenda conexão porque vocês têm 12 contatos em comum. Ele mapeia relacionamentos — não atributos isolados, mas conexões entre pessoas.
>
> Com fornecedores: Fornecedor A tem contrato com sua empresa. Fornecedor A tem sociedade com Fornecedor B. Fornecedor B tem pendência judicial com sua empresa.
>
> Sem grafo: você assina com A sem saber da relação com B.
>
> Com grafo: o sistema avisa — 'atenção, conexão de risco detectada.'
>
> Vocês gerenciam fornecedores, não só contratos. E fornecedores têm relacionamentos que os contratos não mostram."

### Timing
`32:00 → 35:00`

---

## Slide 15 — Monte Carlo: E Se?
**Objetivo:** Simulação de cenários para planejamento contratual.

### Visual
À esquerda:
```
"Piloto de avião treina
em simulador antes
de voar de verdade.

Enfrenta tempestade,
falha de motor,
pista molhada —
sem risco real."
```

À direita:
```
SEUS CONTRATOS

IPCA: 4%, 6% ou 9%?
Fornecedor renova ou não?
Obra atrasa 2 ou 6 meses?

Simulação de 1.000 cenários:

70% dos casos →
custo abaixo de R$ 8M

15% dos casos →
estoura R$ 12M

Você para de fingir
que a incerteza
não existe.
```

### Fala esperada
> "Monte Carlo simula mil cenários possíveis e mostra a distribuição de resultados.
>
> IPCA pode fechar o ano em 4%, 6% ou 9%. Seu maior fornecedor pode ou não renovar. A obra pode atrasar 2 ou 6 meses. Cada combinação é um cenário diferente.
>
> O modelo roda mil combinações e responde: em 70% dos casos seu custo contratual fica abaixo de R$ 8M. Em 15% dos casos estoura R$ 12M.
>
> Você não elimina a incerteza. Você para de fingir que ela não existe.
>
> E quando o CFO perguntar 'qual é nossa exposição contratual?' — você responde com distribuição de probabilidade, não com um chute."

### Timing
`35:00 → 38:00`

---

## Slide 16 — Teoria dos Jogos: O Pôquer da Negociação ✂️
**Objetivo:** Negociar com dados sobre o comportamento histórico do outro lado.

### Visual
À esquerda:
```
"No pôquer você aposta
baseado não só
nas suas cartas —
mas no comportamento
do adversário."
```

À direita:
```
SEUS CONTRATOS

Histórico de negociações:
→ Fornecedor X nunca cede
  em prazo, mas flexibiliza
  em valor
→ Fornecedor Y aceita
  reajuste menor se você
  garantir 3 anos

Você entra na sala
sabendo mais
do que parece.
```

### Fala esperada
> "Teoria dos jogos mapeia as opções do outro lado — o que ele perde se não fechar, qual é o ponto de equilíbrio onde os dois aceitam.
>
> Com histórico de negociações anteriores: padrão de concessões, tempo até fechar, o que nunca cede. Você entra na sala de negociação sabendo mais do que parece.
>
> Não é vantagem desleal. É fazer o dever de casa com seus próprios dados."

### Timing
`38:00 → 40:00`

---

## Slide 17 — O que Todas Têm em Comum
**Objetivo:** Fechar o bloco com a moral central antes do Bloco 3.

### Visual
```
Classificação. Regressão. Anomalia.
Grafos. Monte Carlo. Teoria dos Jogos.

Todas precisam da mesma coisa:

DADOS ESTRUTURADOS.

Não PDFs.
Dados.
```

### Fala esperada
> "Técnicas incríveis. Todas funcionam. Mas todas têm um pré-requisito que ninguém menciona:
>
> Elas precisam de dados estruturados. Tabelas. Campos. Números comparáveis.
>
> Não PDFs de 80 páginas.
>
> E é exatamente aí que a maioria das empresas trava. Porque os contratos estão em PDF — não em base de dados.
>
> O elo que falta é transformar PDF em dado. E é isso que vou mostrar agora."

### Timing
`40:00 → 42:00`

---

# BLOCO 3 — DO PDF À BASE DE DADOS
*Objetivo: mostrar como IA generativa resolve o elo que falta. Camada 1: extração.*

---

## Slide 18 — 🧩 ANALOGIA: O Formulário Invisível
**Objetivo:** Primeira analogia de extração. O conceito antes da técnica.

### Visual
À esquerda:
```
"Cada contrato já tem
um formulário
escondido dentro dele.

Data de vencimento.
Valor. Multa. Reajuste.

Tudo lá — misturado
com 79 páginas de
linguagem jurídica."
```

À direita: **imagem de documento denso com campos destacados em amarelo emergindo do texto**

### Fala esperada
> "Imagina que cada contrato já tem um formulário escondido dentro dele. Data de vencimento, valor total, multa rescisória, índice de reajuste — tudo lá.
>
> Só que misturado com 79 páginas de 'considerando que', 'doravante denominado' e 'nos termos da cláusula 7.2.1 do Anexo D'.
>
> Extração com IA é encontrar esse formulário invisível — e preenchê-lo automaticamente.
>
> Lembram do tradutor de idiomas que eu mencionei? É exatamente isso. Juridiquês entra. Matemático sai."

### Timing
`42:00 → 44:00`

---

## Slide 19 — Como Funciona: Do PDF ao Campo
**Objetivo:** Mostrar o processo de extração sem jargão técnico.

### Visual
Diagrama de fluxo simples:

```
[📄 PDF do contrato]
          ↓
   [Leitura inteligente]
   Entende layout,
   tabelas, anexos
          ↓
   [IA lê e extrai]
   Juridiquês → Matemático
   Com regras claras:
   "Se não achar → N/E"
   "Cite a fonte"
          ↓
   [Campo estruturado]
   Data: 31/12/2025
   Multa: 5% (Cláusula 8.2)
   Reajuste: IPCA anual
   Renovação: Sim ⚠️
          ↓
   [Base de dados]
   Uma linha por contrato.
   200 contratos = 200 linhas.
   Comparável. Consultável.
```

### Fala esperada
> "O processo tem três etapas.
>
> Primeiro: leitura inteligente do PDF — não só o texto, mas o layout. Tabelas, anexos, cabeçalhos. Porque é nesses lugares que ficam as informações importantes.
>
> Segundo: a IA extrai com regras claras. 'Se não encontrar, escreva N/E — não invente.' 'Para cada campo preenchido, cite de onde veio.' Essas regras são o antídoto contra alucinação.
>
> Terceiro: o resultado vira uma linha numa tabela. 200 contratos, 200 linhas. Agora você pode comparar, filtrar, ordenar por risco — tudo que você não conseguia fazer com PDFs."

### Timing
`44:00 → 47:00`

---

## Slide 20 — O que Você Pode Extrair
**Objetivo:** Mostrar campos concretos — o cardápio padrão e o convite à personalização.

### Visual
```
CAMPOS PADRÃO:

✓ Número do contrato
✓ Contratante / Contratado
✓ Valor total
✓ Data de assinatura
✓ Data de vencimento
✓ Índice de reajuste
✓ Multa rescisória
✓ Renovação automática (Sim/Não)
✓ Score de risco

─────────────────────────────

O que você adicionaria
pra o seu negócio?
```

### Fala esperada
> "Esses são os campos que fazem sentido pra maioria das empresas.
>
> Mas cada negócio tem o que importa pra ele. Empresa de logística quer SLA de entrega garantido contratualmente. Empresa pública quer número da licitação. Empresa de serviços recorrentes quer cláusula de exclusividade.
>
> Qualquer campo que faz sentido pra vocês — você pede pra IA extrair. Porque o que muda é só o que você pede pra ela procurar.
>
> *(pausa)*
>
> Vou mostrar isso funcionando agora."

### Timing
`47:00 → 49:00`

---

## Slide 21 — ⛏️ ANALOGIA: Garimpo vs. Mineradora
**Objetivo:** Terceira analogia de extração — argumento de escala. Ponte para o encerramento.

### Visual
Dois lados contrastantes:

```
GARIMPO                    MINERADORA

Contrato por contrato.     Mesmo processo
Manualmente.               pra todos.

Você encontra pepitas.     Entra PDF.
Mas e os outros 199?       Sai dado estruturado.

Escala: 1 pessoa,          Escala: 1 pessoa,
  1 contrato,                200 contratos,
  1 semana.                  2 horas.
```

### Fala esperada
> "Tem uma diferença fundamental entre garimpar e minerar.
>
> Garimpo é o que vocês fazem hoje: contrato por contrato, manualmente, procurando as pepitas de informação que importam. Você encontra. Mas e os outros 199?
>
> Mineradora é o que IA generativa permite: você monta o processo uma vez — o que extrair, como formatar, o que fazer quando não encontrar. E aí roda pra todos.
>
> Entra PDF. Sai dado estruturado. Sempre o mesmo processo. Sempre o mesmo formato.
>
> Essa é a diferença entre usar IA no chat e usar IA como pipeline."

### Timing
`49:00 → 51:00`

---

## Slide 22 — O Limite do Chat
**Objetivo:** Mostrar onde o uso manual de chatbot para de funcionar — e por que.

### Visual
```
Chat funciona bem para:

✓ 1 contrato por vez
✓ Pergunta pontual
✓ Análise exploratória

Começa a travar quando:

✗ São 50, 100, 200 contratos
✗ Você precisa comparar todos
✗ Precisa repetir todo mês
✗ A equipe muda e o processo some
✗ Auditoria exige rastreabilidade
```

### Fala esperada
> "Chat é garimpo. É ótimo pra explorar, pra entender um contrato específico, pra uma pergunta pontual.
>
> Mas quando o volume cresce — quando são 200 contratos, quando você precisa repetir o processo todo mês, quando a equipe muda e o processo some com ela — o chat começa a mostrar suas costuras.
>
> É aí que a diferença entre prompt manual e pipeline estruturado aparece de verdade."

### Timing
`51:00 → 52:00`

---

# ENCERRAMENTO — BIFURCAÇÃO
*Você decide na hora qual caminho seguir dependendo da plateia e do Farol.*

---

## 🔀 PLANO A — Farol ao Vivo

### Slide 23A — Reveal do Farol
**Objetivo:** Apresentar a solução como consequência natural do problema.

### Visual
```
🔦

FAROL DE CONTRATOS

A mineradora pronta.
Você traz os PDFs.
```

### Fala esperada
> "Ao longo dos últimos meses eu construí exatamente isso — uma mineradora de contratos.
>
> O Farol de Contratos faz o que acabei de descrever: você carrega seus PDFs, ele lê, extrai os campos críticos, organiza num painel e avisa quando algo precisa de atenção.
>
> Vou mostrar funcionando agora."

*(Segue para demo ao vivo — ver roteiro de demo no arquivo farol_palestra_roteiro.md, Slide 20)*

### Timing
`52:00 → 60:00`

---

## 🔀 PLANO B — Prompt para Levar pra Casa

### Slide 23B — O Prompt de Extração
**Objetivo:** Entregar ferramenta concreta que eles usam amanhã.

### Visual
```
[ O PROMPT QUE VOCÊS LEVAM HOJE ]
```

*(Mostra o prompt na tela — ver texto completo abaixo)*

### O Prompt
```
Você é um analista especializado em gestão de contratos.

Analise o contrato anexo e extraia APENAS as informações
abaixo, usando exatamente este formato:

- Número do contrato: [valor ou N/E]
- Contratante: [nome ou N/E]
- Contratado: [nome ou N/E]
- Valor total: [valor numérico ou N/E]
- Data de assinatura: [DD/MM/AAAA ou N/E]
- Data de vencimento: [DD/MM/AAAA ou N/E]
- Índice de reajuste: [IPCA / IGP-M / Fixo / Outro / N/E]
- Multa rescisória: [percentual ou descrição ou N/E]
- Renovação automática: [Sim / Não / N/E]
- Foro de eleição: [cidade ou N/E]

REGRAS OBRIGATÓRIAS:
1. Use N/E se a informação não estiver explícita no texto.
2. Não interprete nem estime — só extraia o que está escrito.
3. Para cada campo preenchido, cite entre parênteses
   de onde veio. Ex: (Cláusula 8.2, página 12)
4. Se encontrar ambiguidade ou contradição, sinalize com ⚠️
```

### Fala esperada
> "Esse prompt vocês podem usar hoje. No ChatGPT, no Claude, no Copilot — qualquer um.
>
> Três coisas que ele faz diferente de um prompt genérico:
>
> Um: ele pede N/E quando não encontrar — não um número inventado.
> Dois: ele pede a fonte de cada informação — você pode checar.
> Três: ele sinaliza ambiguidade com ⚠️ — você sabe onde revisar manualmente.
>
> Copiem, adaptem os campos pro negócio de vocês, e testem num contrato real esta semana."

### Timing
`52:00 → 57:00`

---

## Slide 24 — Encerramento (ambos os planos)
**Objetivo:** Fechar com a tese central. Memorável e acionável.

### Visual
```
Vocês são cientistas de dados.

Os dados de vocês são contratos.

As técnicas existem.
A IA existe.
O elo que faltava
era transformar PDF em dado.

Agora vocês sabem como.
```

### Fala esperada
> "Começamos com uma provocação: vocês são cientistas de dados. Os dados de vocês são contratos.
>
> Mostrei as técnicas que cientistas de dados usam — e como cada uma se aplica ao portfólio de contratos de vocês.
>
> Mostrei os limites da IA — porque quem usa bem é quem sabe quando desconfiar.
>
> E mostrei o elo que faltava: como transformar PDF em dado estruturado, que alimenta todas essas técnicas.
>
> O risco silencioso ainda está lá. Mas agora vocês têm ferramentas pra iluminar o que estava escondido.
>
> Obrigado. Vamos às perguntas."

### Timing
`57:00 → 60:00`

---

## Slide 25 — Perguntas (slide de fundo)

### Visual
```
🔦 [ou seu nome/logo]

[Seu contato]
```

---

# GUIA DE CORTE POR TEMPO

```
60 minutos:  Roteiro completo
50 minutos:  Corta Slide 07 (GPS) e Slide 16 (Teoria dos Jogos)
40 minutos:  Corta também Slide 14 (Grafos) e Slide 15 (Monte Carlo)
```

---

# AS 3 ANALOGIAS DE EXTRAÇÃO — ONDE APARECEM

```
🗣️ Tradutor de Idiomas    → Slide 04  (Bloco 1)
   "Juridiquês → Matemático"
   Planta a semente cedo

🧩 Formulário Invisível   → Slide 18  (Bloco 3, abertura)
   "O formulário já está lá"
   Introduz o conceito de extração

⛏️ Garimpo vs. Mineradora → Slide 21  (Bloco 3, fechamento)
   "Entra PDF, sai dado"
   Argumento de escala → ponte pro Farol ou Prompt
```

---

# PERGUNTAS PROVÁVEIS — RESPOSTAS PRONTAS

**"E a segurança dos dados?"**
> "O processo pode rodar localmente, sem enviar nada pra nuvem pública. É decisão de infraestrutura, não limitação da técnica."

**"Qual IA é melhor — GPT, Claude ou Gemini?"**
> "Pra extração de contratos, os três funcionam. O que importa mais é o tamanho do modelo — lembram do estagiário vs. sênior? Dominem o prompt antes de trocar de ferramenta."

**"E se o contrato for muito longo?"**
> "Modelo maior, mesa maior. Contratos de 200 páginas existem exatamente pra isso."

**"Quanto tempo leva pra implementar?"**
> "O prompt: você usa hoje. Um pipeline estruturado pra 200 contratos: algumas semanas de trabalho de engenharia."

**"Funciona com contratos em papel?"**
> "Se tiver foto ou scan, sim. PDF digital funciona melhor — mas scan funciona. A qualidade do scan afeta a qualidade da leitura."

---

*Roteiro completo — versão unificada.*
*Plano A (Farol) e Plano B (Prompt) integrados com bifurcação clara.*
*Versão 2.0*
