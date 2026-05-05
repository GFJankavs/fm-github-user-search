<script lang="ts" setup>
import LocationIcon from '../icons/LocationIcon.vue';
import WebsiteIcon from '../icons/WebsiteIcon.vue';
import TwitterIcon from '../icons/TwitterIcon.vue';
import CompanyIcon from '../icons/CompanyIcon.vue';
import { computed } from 'vue';

const props = defineProps<{
  location: string | null;
  twitter: string | null;
  github: string | null;
  organization: string | null;
}>();

const content = computed(() => [
  { key: 'location', title: 'Location', value: props.location, icon: LocationIcon },
  { key: 'twitter', title: 'Twitter', value: props.twitter, icon: TwitterIcon },
  { key: 'website', title: 'Website', value: props.github, icon: WebsiteIcon },
  { key: 'organization', title: 'Organization', value: props.organization, icon: CompanyIcon },
]);

</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-200">
    <div v-for="link in content" :key="link.key" class="flex items-center gap-200">
      <component :is="link.icon"
        :class="`${!link.value ? 'text-neutral-200' : 'text-neutral-900'} ${!link.value ? 'dark:text-neutral-200' : 'dark:text-neutral-0'} w-5 h-5`" />
      <span
        :class="`${!link.value ? 'text-neutral-200' : 'text-neutral-500'} ${!link.value ? 'dark:text-neutral-200' : 'dark:text-neutral-0'} text-preset-6`">
        {{ link.value || 'Not available' }}
      </span>
    </div>
  </div>
</template>
