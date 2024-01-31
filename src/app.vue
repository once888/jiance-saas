<template>
  <div>
    <NuxtLayout v-if="visibleLayout">
      <v-app>
        <NuxtPage></NuxtPage>
        <menu-drawer @onChangeMenu="handleAnchor" />
      </v-app>
    </NuxtLayout>
    <v-app v-else>
      <NuxtPage></NuxtPage>
    </v-app>
    <message ref="_messageRef" />
  </div>
</template>

<script setup lang="ts">
import { useOptionsStore } from '~/store';
import { emitterHeader, TabCheck } from '~/utils/eventbus';

const HID_LAYOUT_PATH = ['/nuxtLogin', '/nuxtLogin/', '/manage', '/manage/'];
const router = useRouter();
const store = useOptionsStore();
const { width } = useWindowSize();
const _messageRef = ref();
const visibleLayout = ref(true);
store.options.messageRef = _messageRef;

useServerSeoMeta({
  title: '混凝土检测报告 | 专业混凝土质量检测服务 - 快速出具检测报告',
  ogTitle: '混凝土检测报告 | 专业混凝土质量检测服务 - 快速出具检测报告',
  description: '获取可靠的混凝土检测报告,包括混凝土配合比、强度、试块、防冻剂、抗压强度、抗渗、回弹法等检测结果。欢迎咨询我们的混凝土检测服务,为您的工程质量保驾护航。',
  ogDescription: '获取可靠的混凝土检测报告,包括混凝土配合比、强度、试块、防冻剂、抗压强度、抗渗、回弹法等检测结果。欢迎咨询我们的混凝土检测服务,为您的工程质量保驾护航。',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
});

const handleAnchor = (val: TabCheck) => {
  useTabEvent(val, width.value);
};

emitterHeader.on('click-tab', val => {
  handleAnchor(val());
});

watch(() => router.currentRoute.value.path, val => {
  visibleLayout.value = !HID_LAYOUT_PATH.includes(val);
}, { immediate: true });

onUnmounted(() => {
  emitterHeader.off('click-tab');
});
</script>
