<script setup lang="ts">
import MobileContent from './MobileContent.vue';
import DesktopContent from './DesktopContent.vue';
import type { UserInfo } from '@/utils';

const props = defineProps<{
  user: UserInfo | null;
}>();
</script>

<template>
  <main>
    <component :is="MobileContent" class="lg:hidden" :user="props.user" />
    <component :is="DesktopContent" class="hidden lg:flex" :user="props.user" />
  </main>
</template>
