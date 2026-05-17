---
theme: seriph
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "IA na Gestão de Contratos"
background: false
fonts:
  sans: Space Grotesk
  serif: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---

# IA na Gestão de Contratos
<div class="glass mt-8">
  Na era da IA Generativa, as LLMs estão remodelando como as decisões são tomadas nas organizações. Como estamos nos preparando?
      <div class="mt-6 flex gap-3">
      <span class="tag">LLMs</span>
      <span class="tag">IA Generativa</span>
      <span class="tag">Contratos</span>
      </div>
  </div>

---
layout: hero
---
# Gestão de Contratos

- Documento → risco silencioso
- 80 páginas → ninguém lê tudo
- O problema já está lá. Esperando.

<Spacer :h="28"/>

<BeforeAfter language="pt">>
<template #before>

Você vai ao contrato quando o problema <HighLight  color="#EC635E"> já aconteceu</HighLight>.

</template>
<template #after>

Com IA: o contrato <HighLight color="#e2f81b"> te avisa antes</HighLight>.

</template>
</BeforeAfter>

::note::
Contratos: não são apenas documentos. São riscos silenciosos espalhados em 80 páginas que você não tem tempo de ler.

Gestão contratual tradicional considera cada contrato um documento, e até um potencial fator de risco. A gente fala em "contrato" no corredor e as pessoas associam com problemas.

A IA transforma contratos em sinais operacionais, informações vivas capazes de te avisarem antes que o problema aconteça.

---

# O contrato como fonte de dados

<div class="mt-10">
<MetricCard
  value="PDF → Dados → Inteligência "
  label="Páginas de textos podem se transformar em conhecimento e acompanhamento."
/>
</div>


::note::
“ Durante o dia de hoje, vocês vão aprender técnicas e 
prompts para fazer as perguntas corretas.
Hoje eu vim mostrar que além de responder perguntas sob demanda,
IA habilita analytics. Vigilância. Antecipação”

---

# Caso 01
## Grupos e Anomalias

<div class="grid gap-12 mt-5"
style="grid-template-columns: 4fr 6fr;"
>

<div>

<div style="font-size: 0.9rem">
<PromptCard title="Extração Dados">
Você é um assessor jurídico especista em digitalização de informações do contrato recebido Extraia:

  - Categoria, entre: engenharia, jurídico, saúde ou secretaria.
  - Número de posições
  - Valor mensal
  - Fornecedor
</PromptCard>
</div>
</div>

<v-click>

<div style="font-size: 0.9rem">
<div>
  <table class="rf-table">
    <thead>
      <tr>
        <th>Categoria</th>
        <th>Posições</th>
        <th>Valor mensal</th>
        <th>Fornecedor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Engenharia</td>
        <td>82</td>
        <td>R$ 1.600.000</td>
        <td>BB Consulting</td>
      </tr>
      <tr>
        <td>Jurídico</td>
        <td>12</td>
        <td>R$ 480.000</td>
        <td>Lex Group</td>
      </tr>
      <tr>
        <td>Secretariado</td>
        <td>24</td>
        <td>R$ 210.000</td>
        <td>Prime Office</td>
      </tr>
      <tr>
        <td>Saúde</td>
        <td>18</td>
        <td>R$ 234.000</td>
        <td>MedCayre</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</v-click>


</div>

---

# Ciência de Dados → Ciência de Dados Contratuais

<div
  class="grid gap-5 mt-15 items-center"
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
  center="Ciência de\nDados"
  size="430px"
  :transpLight="0.20"
  :transpDark="0.15"
/>

</div>

</div>

---

# Moral
<Subtitle> Cade </Subtitle> 

O problema não é a IA.

O problema é confiar em uma resposta não verificável.


---

# Teste de fonte


Será que <Citation id="wang_accuracy_1996" mode="citet" /> propõem uma visão multidimensional da qualidade de dados. Avaliando o que acontece quando a frase fica muito grande e precisa extravazar.

A qualidade da informação possui múltiplas dimensões além de acurácia <Citation id="wang_accuracy_1996" mode="citep" />.

<Citation id="wang_accuracy_1996" mode="citet" /> propõem uma visão multidimensional da qualidade de dados.

A qualidade da informação possui múltiplas dimensões além de acurácia <Citation id="wang_overview_2024" mode="citep" />.

<Citation id="wang_overview_2024" mode="citet" /> propõem uma visão multidimensional da qualidade de dados.

A qualidade da informação possui múltiplas além de acurácia <Citation id="wang_accuracy_1996" mode="citep" />.

<Citation id="wang_accuracy_1996" mode="citep" /> testa parenteses no inicio.

---