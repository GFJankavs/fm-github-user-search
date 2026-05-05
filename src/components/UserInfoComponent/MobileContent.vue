<script setup lang="ts">
import type { UserInfo } from '@/api/github';
import UserLinks from './UserLinks.vue';
import UserStats from './UserStats.vue';

const props = defineProps<{
  user: UserInfo | null;
}>();

</script>

<template>
  <div
    class="grid gap-300 rounded-16 bg-neutral-0 dark:bg-neutral-800 py-400 px-300 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)]">
    <div class="flex gap-5">
      <img :src="$props.user?.avatar_url || ''" alt="User image" class="rounded-full w-17.5 h-17.5">
      <div>
        <h2 class="text-preset-1 text-neutral-700 dark:text-neutral-0">{{ props.user?.login }}</h2>
        <a :href="props.user?.html_url || '#'" class="text-preset-4 text-blue-500">@{{ props.user?.login }}</a>
        <p class="text-preset-6 text-neutral-500 dark:text-neutral-0">{{ `Joined ${props.user?.created_at}` }}</p>
      </div>
    </div>
    <div class="grid gap-300">
      <p class="text-preset-6 text-neutral-500 dark:text-neutral-200">{{ props.user?.bio || 'This profile has no bio' }}
      </p>
      <UserStats :repos="props.user?.public_repos || 0" :followers="props.user?.followers || 0"
        :following="props.user?.following || 0" />
      <UserLinks :location="props.user?.location || 'San Francisco'" :twitter="props.user?.twitter_username || null"
        :github="props.user?.html_url || 'https://github.blog'" :organization="props.user?.company ?? null" />
    </div>
  </div>
</template>
