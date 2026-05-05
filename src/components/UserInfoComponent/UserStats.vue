<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  repos: number;
  followers: number;
  following: number;
}>();

const contentList = computed(() => [
  { key: 'repos', title: 'Repos', value: props.repos },
  { key: 'followers', title: 'Followers', value: props.followers },
  { key: 'following', title: 'Following', value: props.following },
]);
</script>

<template>
  <div
    class="flex lg:grid flex-col lg:grid-cols-3 gap-200 py-200 px-250 lg:px-400 rounded-10 bg-neutral-100 dark:bg-neutral-900">
    <div class="grid gap-1" v-for="value in contentList" :key="value.key">
      <h3 class="text-preset-7 text-neutral-500 dark:text-neutral-0">{{ value.title }}</h3>
      <span class="text-preset-2 text-neutral-700 dark:text-neutral-0">{{ value.value }}</span>
    </div>
  </div>
</template>
