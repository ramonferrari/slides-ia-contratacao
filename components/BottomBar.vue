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
/* ════════════════════════════════════════════
   BOTTOM BAR
════════════════════════════════════════════ */
.rf-bottom-bar {
  position: absolute;
  left: 48px;
  right: 48px;
  bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top:
    1px solid var(--rf-bottom-border);
  font-size:
    0.72rem;
  letter-spacing:
    0.12em;
  font-family:
    "JetBrains Mono",
    monospace;
}
/* LEFT TEXT */
.rf-bottom-left {
  color:
    var(--rf-bottom-text);
  opacity:
    1;
}
/* RIGHT LINK */
.rf-bottom-right {
  color:
    var(--rf-link);
  font-weight:
    600;
  letter-spacing:
    0.16em;
}
.rf-bottom-right:hover {
  color:
    var(--rf-link-hover);
}
</style>