<script setup lang="ts">
import useDarkTheme from '@/composables/useDarkTheme';

const { isDark, toggleTheme } = useDarkTheme();

</script>

<template>
  <header class="flex items-center justify-between w-full px-4">
    <h1 class="text-preset-1 text-neutral-900 dark:text-neutral-0">devfinder</h1>
    <button class="flex items-center gap-3 cursor-pointer" @click="toggleTheme">
      <span class="text-preset-8 text-neutral-500">{{ isDark ? 'LIGHT' : 'DARK' }}</span>
      <img :src="isDark ? '/icon-sun.svg' : '/icon-moon.svg'" alt="Theme Icon" class="w-5 h-5">
    </button>
  </header>
</template>
