<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
<template>
  <footer class="rf-bottom-bar">
    <div class="rf-bottom-left">
      {{ title || $slidev.configs.themeConfig?.shortTitle || 'AI SYSTEMS' }}
    </div>
    <a
      class="rf-bottom-right"
      href="https://ramonferrari.dev"
      target="_blank"
    >
      ramonferrari.dev
    </a>
  </footer>
</template>
<style scoped>
.rf-bottom-bar {
  position: absolute;
  left: 48px;
  right: 48px;
  bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.42);
  font-family: "JetBrains Mono", monospace;
}

/* Light Mode Overrides */
html.light .rf-bottom-bar {
  border-top-color: rgba(15, 23, 42, 0.39);
  color: rgba(17, 24, 39, 0.72);
}

.rf-bottom-left {
  opacity: 0.72;
}

.rf-bottom-right {
  color: #35996e;
  font-weight: 600;
  letter-spacing: 0.16em;
}

html.light .rf-bottom-right {
  color: #2f8d65;
}
</style>
