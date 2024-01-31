import { defineStore } from 'pinia';

const OPTIONS = {
  messageRef: ref(),
  showTopMsg: true // 置顶消息
};

export const useOptionsStore = defineStore('options', () => {
  const options = reactive(OPTIONS);

  return {
    options
  };
});
