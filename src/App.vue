<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import SearchInput from './components/SearchInput.vue';
import UserInfoComponent from './components/UserInfoComponent/UserInfoComponent.vue';
import { fetchUserInfo, type UserInfo } from './utils';

const userInfo = ref<UserInfo | null>(null);

const handleSearch = async (query: string) => {
  const result = await fetchUserInfo(query);

  userInfo.value = result || null;
};

</script>

<template>
  <div class="w-dvw h-dvh flex items-start justify-center py-8 lg:py-32.5 bg-neutral-100 dark:bg-neutral-900">
    <div class="w-full max-w-85.75 lg:max-w-182.5 grid gap-400">
      <HeaderComponent />
      <SearchInput @search="handleSearch" />
      <UserInfoComponent :user="userInfo" v-if="userInfo !== null" />
    </div>
  </div>
</template>
