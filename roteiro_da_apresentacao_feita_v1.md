# Diagnóstico do Roteiro — v1
*Farol de Contratos — Fórum de Gestão Tecnológica*

---

## TL;DR

A estrutura narrativa é boa: problema → limitações → técnicas → solução. O Farol aparece bem posicionado, depois de construir a necessidade. O risco principal é **o Bloco 2 (técnicas de ML)**, que interrompe o fluxo emocional no pior momento — logo depois que a audiência aprendeu que IA falha. Esse trecho vai sentir como "aula" para quem gerencia contratos.

---

## Mapa do roteiro

| Bloco | Slides (aprox.) | O que acontece |
|---|---|---|
| Abertura | 1–7 | Capa, quem sou, roteiro, enquadramento data science vs contratos |
| Bloco 1 — IA: como funciona | 8–19 | Conhecimento da IA, mesa de trabalho, modelos, 3 limites, chaveiro |
| Bloco 2 — Técnicas de ML | 20–25 | Classificação, Projeção, Agrupamentos, Redes, Temporal, Elo |
| Bloco 3 — Extração | 26–27 | ContractExtraction, caso prático com tabela |
| Encerramento — Farol | 28–37 | Produto, como funciona, campos, cardápio, o que não faz, moral |

---

## O que funciona bem

**Ancoragem emocional no início.**
O slide "Gestão de Contratos" com o before/after ("você vai ao contrato quando o problema já aconteceu") é direto e relevante para a audiência. Toca em algo que eles vivem.

**Analogias no Bloco 1 são fortes.**
Mesa de trabalho (memória), chaveiro (prompts), detetive (rastreabilidade) — essas imagens funcionam para quem não é técnico. Cada uma carrega um conceito complexo sem exigir conhecimento prévio.

**Estrutura problema-solução respeitada.**
O Farol só aparece no slide 28. Isso é disciplina narrativa correta: a audiência chegou lá entendendo por que precisa do produto. Quem apresenta isso como pitch comercial na lâmina 3 perde credibilidade.

**O slide "O Elo que Faltava" é o melhor do deck.**
Fecha o Bloco 2 e abre o Bloco 3 de forma precisa: "todas essas técnicas precisam de dados estruturados — e é isso que a extração faz". Quando funcionar ao vivo, vai gerar o momento de clareza da apresentação.

**O slide "O Detetive" resolve uma objeção antes de ela aparecer.**
Mostrar que a resposta tem citação de fonte (cláusula + página) antecipa a pergunta "mas como sei que é verdade?". Posição correta no deck.

---

## Problemas estruturais

### 1. O Bloco 2 chega na hora errada

O Bloco 1 termina com o slide "O Chaveiro" — a mensagem é: "IA falha quando usada de forma genérica". A audiência está mobilizada, sentindo o problema. Aí vêm 5 slides sobre técnicas de ML: Classificação, Regressão, Agrupamentos, Grafos, Séries Temporais.

O problema não é o conteúdo — é o timing. A audiência vai pensar: "ok, mas o que isso tem a ver com os meus contratos?" A conexão só aparece no slide "O Elo que Faltava", que é o último do bloco. São 5 slides de espera.

Para quem gerencia contratos, essa sequência vai soar como uma demonstração de capacidade técnica do apresentador, não como informação útil para eles.

**O risco concreto:** a audiência desengaja exatamente quando o deck está construindo o argumento mais importante.

### 2. Bloco 1 tem redundância interna

Quatro slides cobrem a mesma família de problemas sem progressão clara:

- "Os Dois Conflitos da IA" (conflito treinamento vs instrução)
- "Os Dois Limites da IA" (diagrama SVG recall + alucinação)
- "Limite 1: Recall" (detalhamento)
- "Limite 2: Alucinação" (detalhamento)
- "Alucinação com Propriedade" (exemplo com LLMChat)
- "A IA Quer te Agradar" (causa raiz da alucinação)

São 6 slides para cobrir 2 conceitos. O diagrama SVG em "Os Dois Limites" já carrega os dois. O slide "A IA Quer te Agradar" explica a causa raiz da alucinação, mas vem depois dos exemplos — seria mais forte se viesse antes.

Isso não vai quebrar a apresentação, mas o apresentador precisará de ritmo rápido aqui para não perder a audiência antes do Bloco 2.

### 3. A abertura começa pelo ponto de vista do apresentador, não da audiência

A sequência inicial é: capa → quem sou → roteiro → Venn de Ciência de Dados → DataVSContract → problema de contratos.

O problema de contratos aparece no slide 6. Para uma audiência que gerencia contratos, a apresentação só se torna relevante para eles na metade do ato de abertura.

O risco aumenta porque o slide "Ciência de Dados" mostra dois Venns (data science → contratos). Para alguém que passou 15 anos em sísmica, esse enquadramento é natural. Para quem está na audiência, pode soar como "deixa eu te explicar o que você faz com minha linguagem".

O slide "Somos todos cientistas" (DataVSContract) compensa isso — mas só se a nota do palestrante for executada com o tom certo.

### 4. O "Então o Que Fazer?" (mencionado no CLAUDE.md) não aparece no deck

O CLAUDE.md lista esse slide como problema — mas ele não está no slides.md atual. Parece que foi removido. Confirmar se é isso ou se está em outro arquivo.

---

## Riscos de execução

**Bloco 2 sem notas do palestrante.**
Os slides de ML (Classificação, Projeção, Agrupamentos, Redes, TimeSeries) estão sem `<!-- notas -->`. São os slides de maior risco de soar técnico demais — e são os que mais precisam de script de âncora para a audiência de contratos. Falta isso antes do ensaio.

**O componente `<AICompetition>` ("Corrida das IAs").**
A nota do palestrante diz "o importante não é qual é o melhor modelo agora". Se isso é verdade, questiona-se a necessidade do slide no deck. Ele pode desviar atenção e provocar perguntas sobre "qual devo usar?" que fogem do objetivo.

**Slide "Demonstração" sem conteúdo.**
Se o sistema não for ao vivo, o slide precisa de um fallback preparado (vídeo gravado). Isso não é polimento — é risco de apresentação.

---

## Fluxo emocional da audiência (como deve ser sentido)

```
ABERTURA        → Reconhecimento ("é isso que eu faço todo dia")
BLOCO 1         → Consciência do risco ("não sabia que IA fazia isso")
BLOCO 2         → ⚠️  Risco de desconexão ("onde isso entra no meu trabalho?")
O Elo que Falta → Momento de clareza ("ah — preciso de dado estruturado")
BLOCO 3         → Prova ("funciona, olha a tabela saindo")
ENCERRAMENTO    → Desejo ("quero isso")
```

O gap está no Bloco 2. O apresentador precisará fazer a conexão explicitamente em cada slide de ML, não deixar o componente falar sozinho.

---

## Sugestões de ajuste (sem alterar estrutura)

Estes não são mudanças no deck — são orientações de fala para compensar os riscos identificados.

1. **Em cada slide de ML**, abrir com "Em contratos, isso significa..." antes de explicar a técnica. Classificação → triagem de contratos por risco. Projeção → comparar proposta com portfólio histórico. Agrupamento → detectar cláusula fora do padrão.

2. **Antes do Bloco 2**, sinalizar a transição: "Agora vou mostrar 5 ferramentas. Cada uma precisa de dados estruturados — e é exatamente aí que vamos chegar."

3. **Em "Quem sou eu"**, a conexão com a audiência está na última linha da nota do palestrante: "vocês são cientistas de dados de contratos". Essa frase precisa aparecer no slide de abertura pessoal, não só na nota.

4. **"A IA Quer te Agradar"** seria mais forte como o primeiro slide do Bloco 1 (antes dos limites), não o último. Seria a causa explicando os efeitos.

---

## Resumo do diagnóstico

| Dimensão | Avaliação |
|---|---|
| Estrutura narrativa geral | Sólida |
| Ancoragem na audiência de contratos | Boa no início e no fechamento, fraca no Bloco 2 |
| Risco de soar técnico demais | Alto no Bloco 2, controlável nos demais |
| Posicionamento do produto | Correto — aparece na hora certa |
| Preparação para ensaio | Notas do Bloco 2 precisam ser escritas antes |
| Risco maior | Desengajamento no Bloco 2 antes do Elo que Faltava |

---

*Gerado em 2026-06-02 com base na leitura de slides.md*
