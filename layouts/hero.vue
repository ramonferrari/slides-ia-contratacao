<script setup lang="ts">
import BottomBar from "../components/BottomBar.vue"
const props = defineProps({
  title: {
    type: String,
    default: "AI SYSTEMS"
  }
})
</script>
<template>
  <div class="slidev-layout hero relative h-full">
    <slot />
    <BottomBar :title="props.title" />
  </div>
</template>