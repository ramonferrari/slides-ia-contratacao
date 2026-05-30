<template>
  <div class="scene-wrap">
    <svg class="scene" viewBox="0 0 960 460" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="asp-laser-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="var(--rf-primary)" stop-opacity="0"/>
          <stop offset="30%"  stop-color="var(--rf-primary)" stop-opacity=".7"/>
          <stop offset="70%"  stop-color="#a8f0d4"           stop-opacity=".9"/>
          <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity=".3"/>
        </linearGradient>
        <radialGradient id="asp-torch-rad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="var(--rf-primary)" stop-opacity=".6"/>
          <stop offset="60%"  stop-color="var(--rf-primary)" stop-opacity=".15"/>
          <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="asp-doc-surf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="rgba(99,211,161,.12)"/>
          <stop offset="100%" stop-color="rgba(99,211,161,.03)"/>
        </linearGradient>
        <radialGradient id="asp-badge-rad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="var(--rf-highlight)" stop-opacity=".3"/>
          <stop offset="100%" stop-color="var(--rf-highlight)" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="asp-beam-hit" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stop-color="rgba(99,211,161,.18)"/>
          <stop offset="100%" stop-color="rgba(99,211,161,0)"/>
        </radialGradient>
        <filter id="asp-blur6"><feGaussianBlur stdDeviation="6"/></filter>
        <filter id="asp-blur3"><feGaussianBlur stdDeviation="3"/></filter>
        <filter id="asp-blur1"><feGaussianBlur stdDeviation="1.2"/></filter>
      </defs>

      <!-- Ambient glow left -->
      <ellipse cx="200" cy="240" rx="220" ry="220" fill="rgba(12,40,28,.35)" :filter="'url(#asp-blur6)'"/>

      <!-- ══ DOC GRID 4×3 ══ -->
      <!-- ROW 0 — y=20 -->
      <g class="r1">
        <!-- [0,0] -->
        <g transform="translate(14,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.6)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="78" y2="34" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="48" x2="65" y2="48" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="62" x2="80" y2="62" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="76" x2="70" y2="76" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="90" x2="90" y2="90" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <line x1="8" y1="97" x2="75" y2="97" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
        <!-- [1,0] -->
        <g transform="translate(126,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.6)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="70" y2="34" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="65" y2="69" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="97" x2="72" y2="97" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
        <!-- [2,0] ⚠ -->
        <g transform="translate(238,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.6)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="90" y2="34" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="75" y2="41" stroke="rgba(226,248,27,.35)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="68" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <g class="warn w2" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="rgba(226,248,27,.9)" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="rgba(226,248,27,.9)" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="rgba(226,248,27,.9)"/>
          </g>
        </g>
        <!-- [3,0] -->
        <g transform="translate(350,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.6)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.15)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="82" y2="34" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.09)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="78" y2="69" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>

        <!-- ROW 1 — y=142 -->
        <!-- [0,1] ⚠ -->
        <g transform="translate(14,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.5)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.12)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="72" y2="34" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="80" y2="55" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="65" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <g class="warn w3" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="rgba(226,248,27,.85)" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="rgba(226,248,27,.85)" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="rgba(226,248,27,.85)"/>
          </g>
        </g>
        <!-- [1,1] -->
        <g transform="translate(126,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.5)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.12)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="90" y2="34" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="48" x2="68" y2="48" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="62" x2="90" y2="62" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="76" x2="76" y2="76" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="90" x2="90" y2="90" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
        <!-- [2,1] -->
        <g transform="translate(238,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.5)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.12)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="80" y2="34" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="48" x2="62" y2="48" stroke="rgba(226,248,27,.3)" stroke-width=".8"/>
          <line x1="8" y1="62" x2="90" y2="62" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="76" x2="80" y2="76" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
        <!-- [3,1] ⚠ -->
        <g transform="translate(350,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.5)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.12)" stroke-width=".8"/>
          <line x1="8" y1="34" x2="74" y2="34" stroke="rgba(255,255,255,.08)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="68" y2="55" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="78" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <g class="warn w4" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="rgba(226,248,27,.8)" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="rgba(226,248,27,.8)" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="rgba(226,248,27,.8)"/>
          </g>
        </g>

        <!-- ROW 2 — y=264 -->
        <!-- [0,2] -->
        <g transform="translate(14,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.4)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.10)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="70" y2="55" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="82" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
        <!-- [1,2] -->
        <g transform="translate(126,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.4)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.10)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="66" y2="41" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="74" y2="69" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
        <!-- [2,2] ⚠ -->
        <g transform="translate(238,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.4)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.10)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="72" y2="69" stroke="rgba(226,248,27,.28)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <g class="warn" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="rgba(226,248,27,.75)" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="rgba(226,248,27,.75)" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="rgba(226,248,27,.75)"/>
          </g>
        </g>
        <!-- [3,2] -->
        <g transform="translate(350,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.4)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0d1a12" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="rgba(255,255,255,.10)" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="rgba(255,255,255,.07)" stroke-width=".8"/>
          <line x1="8" y1="55" x2="82" y2="55" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
          <line x1="8" y1="83" x2="66" y2="83" stroke="rgba(255,255,255,.05)" stroke-width=".8"/>
        </g>
      </g><!-- /r1 grid -->

      <!-- ══ AI TORCH ══ -->
      <g class="r1">
        <rect x="820" y="4" width="78" height="88" rx="22"
          fill="rgba(16,26,20,0.96)" stroke="rgba(99,211,161,0.45)" stroke-width="1.5"/>
        <line x1="836" y1="18" x2="882" y2="18" stroke="rgba(99,211,161,.12)" stroke-width="1"/>
        <line x1="836" y1="25" x2="882" y2="25" stroke="rgba(99,211,161,.10)" stroke-width="1"/>
        <line x1="836" y1="32" x2="882" y2="32" stroke="rgba(99,211,161,.08)" stroke-width="1"/>
        <circle cx="859" cy="66" r="30" fill="url(#asp-torch-rad)" :filter="'url(#asp-blur3)'"/>
        <circle cx="859" cy="66" r="24" fill="rgba(8,18,12,0.9)" stroke="rgba(99,211,161,.55)" stroke-width="2"/>
        <circle cx="859" cy="66" r="17" fill="rgba(99,211,161,.10)" stroke="rgba(99,211,161,.30)" stroke-width="1"/>
        <text x="859" y="72" font-family="Space Grotesk,sans-serif" font-size="14" font-weight="800"
          fill="rgba(99,211,161,.95)" text-anchor="middle" letter-spacing=".5">AI</text>
      </g>

      <!-- ══ LASER BEAM ══ -->
      <g class="laser r2">
        <line x1="859" y1="94" x2="686" y2="270"
          stroke="rgba(99,211,161,.12)" stroke-width="22" stroke-linecap="round" :filter="'url(#asp-blur6)'"/>
        <line x1="859" y1="94" x2="686" y2="270"
          stroke="rgba(99,211,161,.22)" stroke-width="8" stroke-linecap="round" :filter="'url(#asp-blur3)'"/>
        <line x1="859" y1="94" x2="686" y2="270"
          stroke="rgba(160,240,200,.35)" stroke-width="3" stroke-linecap="round" :filter="'url(#asp-blur1)'"/>
        <line x1="859" y1="94" x2="686" y2="270"
          stroke="rgba(200,255,230,.85)" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="859" cy="94" r="5" fill="rgba(255,255,255,.6)" :filter="'url(#asp-blur1)'"/>
        <circle cx="859" cy="94" r="2.5" fill="rgba(255,255,255,.9)"/>
      </g>

      <!-- Particles -->
      <g class="r2">
        <circle class="p1" cx="820" cy="122" r="1.5" fill="rgba(99,211,161,.8)"/>
        <circle class="p2" cx="790" cy="148" r="1.2" fill="rgba(99,211,161,.7)"/>
        <circle class="p3" cx="758" cy="174" r="1.5" fill="rgba(160,240,200,.8)"/>
        <circle class="p4" cx="742" cy="196" r="1"   fill="rgba(99,211,161,.6)"/>
        <circle class="p5" cx="720" cy="224" r="1.5" fill="rgba(99,211,161,.75)"/>
        <circle class="p6" cx="704" cy="248" r="1.2" fill="rgba(160,240,200,.7)"/>
      </g>

      <!-- ══ OPEN DOCUMENT ══ -->
      <g class="doc-float r3">
        <ellipse cx="686" cy="446" rx="115" ry="7" fill="rgba(0,0,0,.45)" :filter="'url(#asp-blur3)'"/>
        <rect x="572" y="60" width="228" height="376" rx="6"
          fill="url(#asp-beam-hit)" :filter="'url(#asp-blur6)'"/>
        <rect x="572" y="60" width="228" height="376" rx="6"
          fill="url(#asp-doc-surf)" stroke="rgba(99,211,161,.30)" stroke-width="1.2"/>
        <line x1="572" y1="62" x2="800" y2="62" stroke="rgba(99,211,161,.15)" stroke-width=".8"/>
        <!-- PDF badge -->
        <rect x="584" y="70" width="28" height="12" rx="3" fill="rgba(99,211,161,.75)"/>
        <text x="598" y="79" font-family="JetBrains Mono,monospace" font-size="6" font-weight="700"
          fill="#0a1a10" text-anchor="middle">PDF</text>
        <!-- Scan brackets -->
        <path d="M 600,90 L 578,90 L 578,110" fill="none" stroke="rgba(99,211,161,.8)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 772,90 L 794,90 L 794,110" fill="none" stroke="rgba(99,211,161,.8)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 592,426 L 578,426 L 578,406" fill="none" stroke="rgba(99,211,161,.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 780,426 L 794,426 L 794,406" fill="none" stroke="rgba(99,211,161,.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Content lines -->
        <line x1="590" y1="104" x2="786" y2="104" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
        <line x1="590" y1="114" x2="760" y2="114" stroke="rgba(255,255,255,.11)" stroke-width="1"/>
        <line x1="590" y1="124" x2="786" y2="124" stroke="rgba(255,255,255,.11)" stroke-width="1"/>
        <line x1="590" y1="134" x2="740" y2="134" stroke="rgba(255,255,255,.09)" stroke-width="1"/>
        <line x1="590" y1="144" x2="786" y2="144" stroke="rgba(255,255,255,.09)" stroke-width="1"/>
        <line x1="590" y1="154" x2="750" y2="154" stroke="rgba(255,255,255,.08)" stroke-width="1"/>
        <line x1="590" y1="164" x2="786" y2="164" stroke="rgba(255,255,255,.08)" stroke-width="1"/>
        <line x1="590" y1="174" x2="730" y2="174" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
        <line x1="590" y1="184" x2="786" y2="184" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
        <line x1="590" y1="194" x2="760" y2="194" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
        <line x1="590" y1="360" x2="786" y2="360" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
        <line x1="590" y1="370" x2="756" y2="370" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <line x1="590" y1="380" x2="786" y2="380" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <line x1="590" y1="390" x2="720" y2="390" stroke="rgba(255,255,255,.05)" stroke-width="1"/>
        <!-- Signature -->
        <text x="640" y="428" font-family="Space Grotesk,sans-serif" font-size="7" font-style="italic" font-weight="300"
          fill="rgba(255,255,255,.18)" letter-spacing=".3">Assinado em 15/03/2025</text>

        <!-- RISK BADGE -->
        <g class="badge-g">
          <ellipse cx="686" cy="290" rx="105" ry="50" fill="url(#asp-badge-rad)" :filter="'url(#asp-blur6)'"/>
          <rect x="584" y="218" width="204" height="76" rx="6"
            fill="rgba(226,248,27,.09)" stroke="rgba(226,248,27,.65)" stroke-width="1.5"/>
          <rect x="585" y="219" width="202" height="74" rx="5" fill="rgba(226,248,27,.05)"/>
          <g transform="translate(596,232)">
            <polygon points="11,1 21,18 1,18" fill="rgba(226,248,27,.12)"
              stroke="rgba(226,248,27,.95)" stroke-width="1.4" stroke-linejoin="round"/>
            <line x1="11" y1="7" x2="11" y2="12" stroke="rgba(226,248,27,.95)" stroke-width="1.4" stroke-linecap="round"/>
            <circle cx="11" cy="15.5" r=".9" fill="rgba(226,248,27,.95)"/>
          </g>
          <text x="622" y="246" font-family="JetBrains Mono,monospace" font-size="8.5" font-weight="700"
            fill="rgba(226,248,27,.95)" letter-spacing=".1em">CLÁUSULA DE RISCO</text>
          <line x1="590" y1="253" x2="782" y2="253" stroke="rgba(226,248,27,.22)" stroke-width=".8"/>
          <text x="596" y="267" font-family="Space Grotesk,sans-serif" font-size="9" font-weight="600"
            fill="rgba(255,255,255,.88)">Multa de 30% sobre o valor total</text>
          <text x="596" y="281" font-family="Space Grotesk,sans-serif" font-size="9" font-weight="600"
            fill="rgba(255,255,255,.88)">em caso de rescisão antecipada.</text>
        </g>
      </g>

      <!-- TAGLINE -->
      <g class="r4">
        <text x="14" y="448" font-family="Space Grotesk,sans-serif" font-size="17" font-weight="800"
          fill="rgba(255,255,255,.88)" letter-spacing="-.03em">
          O Farol ilumina o que está escondido na página 42.
          <tspan fill="#63d3a1"> Sem você ler.</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
// No props — standalone visual slide component
</script>

<style scoped>
/* ─── Wrapper: fills content area below h1 ─────────── */
.scene-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.scene {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* ─── Animations ────────────────────────────────────── */
@keyframes pulse-warn {
  0%,100% { opacity:.7; transform:scale(1); }
  50%      { opacity:1;  transform:scale(1.2); }
}
@keyframes pulse-badge {
  0%,100% { filter:drop-shadow(0 0 5px rgba(226,248,27,.35)); }
  50%      { filter:drop-shadow(0 0 18px rgba(226,248,27,.8)); }
}
@keyframes laser-pulse {
  0%,100% { opacity:.55; }
  50%      { opacity:.85; }
}
@keyframes float-doc {
  0%,100% { transform:translateY(0); }
  50%      { transform:translateY(-4px); }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(16px); filter:blur(4px); }
  to   { opacity:1; transform:translateY(0);    filter:blur(0); }
}
@keyframes particle {
  0%   { opacity:0; transform:translate(0,0); }
  30%  { opacity:.6; }
  100% { opacity:0; transform:translate(var(--dx),var(--dy)); }
}

.warn   { animation: pulse-warn  2s   ease-in-out infinite; }
.w2     { animation-delay: .5s; }
.w3     { animation-delay: 1s; }
.w4     { animation-delay: 1.5s; }
.badge-g { animation: pulse-badge 2.5s ease-in-out infinite; }
.laser  { animation: laser-pulse 3s   ease-in-out infinite; }
.doc-float { animation: float-doc 4s  ease-in-out infinite; }

.r1 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .10s forwards; }
.r2 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .35s forwards; }
.r3 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .60s forwards; }
.r4 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .85s forwards; }

.p1 { --dx:-8px;  --dy:12px; animation: particle 2.2s ease-out .3s  infinite; }
.p2 { --dx:6px;   --dy:18px; animation: particle 2.8s ease-out .7s  infinite; }
.p3 { --dx:-12px; --dy:8px;  animation: particle 2.5s ease-out 1.1s infinite; }
.p4 { --dx:10px;  --dy:14px; animation: particle 3s   ease-out .5s  infinite; }
.p5 { --dx:-6px;  --dy:20px; animation: particle 2.3s ease-out 1.4s infinite; }
.p6 { --dx:8px;   --dy:10px; animation: particle 2.7s ease-out .2s  infinite; }
</style>