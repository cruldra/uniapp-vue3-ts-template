<template>
  <view> 111 </view>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import BasicButton from '@/components/BasicButton/index.vue';
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import FontAwesomeIcon from '@/components/FontAwesomeIcon/index.vue';
  import { useRouter } from '@/hooks/router';
  import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
  import { judgePlatform } from '@/utils/platform';

  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  console.log(t('home.homeTitle'));

  const title = ref('uni-app vue3 ts --Vite');

  const platform = CURRENT_PLATFORM;

  const isVue3 = judgePlatform(PLATFORMS.VUE3);

  const router = useRouter();
  const handleGetStarted = () => {
    router.pushTab('/pages/demo/index');
  };
</script>
<style lang="scss"></style>
