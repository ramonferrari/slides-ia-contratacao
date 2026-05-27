<script setup lang="ts">
import { useNav, configs } from '@slidev/client'

defineProps<{ title?: string }>()

const { currentPage, total } = useNav()
</script>
<template>
  <footer class="rf-bottom-bar">
    <div class="rf-bottom-left">
      {{ title || configs.themeConfig?.shortTitle || 'AI SYSTEMS' }}
    </div>
    <div class="rf-bottom-right">
      <a href="https://ramonferrari.dev" target="_blank">ramonferrari.dev</a>
      <span class="rf-bottom-page">{{ currentPage }} de {{ total }}</span>
    </div>
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
/* RIGHT */
.rf-bottom-right {
  display: flex;
  align-items: center;
  gap: 1.2em;
}

.rf-bottom-right a {
  color: var(--rf-link);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-decoration: none !important;
}

.rf-bottom-right a:hover {
  color: var(--rf-link-hover);
}

.rf-bottom-page {
  color: var(--rf-bottom-text);
  letter-spacing: 0.12em;
}
</style>