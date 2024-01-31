<template>
  <div class="box">
    <div ref="contentRef" :class="['content', scroll && 'scroll-animation']">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const scroll = ref(false);
const contentRef = ref();
const { width } = useElementSize(contentRef);

onMounted(() => {
  const contentEl: HTMLElement | null = document.querySelector('.content');
  const speed = 110;
  if (contentEl) contentEl.style.animationDuration = contentEl.clientWidth / speed + 's';
});

watch(() => width.value, val => {
  const contentEl: HTMLElement | null = document.querySelector('.content');
  if (contentEl) {
    const childWidth = contentEl.firstElementChild?.clientWidth;
    scroll.value = val > (childWidth as number);
  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  color: #fff;
  overflow: hidden;
}
.content {
  white-space: nowrap;
  width: max-content;
}
.scroll-animation {
  animation: roll 10s infinite linear;
}

@keyframes roll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
