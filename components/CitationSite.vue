<script setup lang="ts">
import references
  from "../data/references.json"

const props = defineProps<{
  keyId: string
}>()

const ref =
  references[
    props.keyId as keyof typeof references
  ]
</script>

<template>

  <a
    v-if="ref?.url"
    :href="ref.url"
    target="_blank"
    class="rf-citation"
    :title="[
      ref.title,
      ref.venue
    ]
      .filter(Boolean)
      .join(' · ')"
  >
    {{ ref.author }}
  </a>

  <span
    v-else
    class="rf-citation"
  >
    {{ ref.author }}
  </span>

</template>

<style scoped>
.rf-citation {
  color: #63d3a1;
  text-decoration: none;
}

.rf-citation:hover {
  color: #8af0c1;
}
</style>