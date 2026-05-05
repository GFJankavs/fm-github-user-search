<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);

const handleSubmit = (event: Event) => {
  event.preventDefault();
  emit('search', searchQuery.value);
  searchQuery.value = '';
};
</script>

<template>
  <form @submit="handleSubmit"
    class="flex items-center justify-between shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] py-100 px-150 rounded-16 bg-neutral-0 dark:bg-neutral-800">
    <div class="flex items-center gap-2 w-full">
      <img src="/icon-search.svg" alt="Search Icon" class="w-5 h-5">
      <input v-model="searchQuery" type="text" placeholder="Search Github username..."
        class="w-full text-preset-3--mobile focus:outline-none placeholder:text-neutral-500 text-neutral-900 dark:placeholder:text-neutral-0 dark:text-neutral-0" />
    </div>
    <button
      class="px-250 py-150 bg-blue-500 text-neutral-0 rounded-10 cursor-pointer focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
      type="submit">
      Search
    </button>
  </form>
</template>
