<script setup lang="ts">
import BottomBar from "../components/BottomBar.vue"

const props = defineProps({
  title: {
    type: String,
  }
})
</script>

<template>
  <div class="slidev-layout default relative h-full">
    <slot />

    <BottomBar :title="props.title" />
  </div>
</template>