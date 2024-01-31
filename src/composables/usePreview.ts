import { preview } from 'v-preview-image';

export default (current: string | number) => {
  const verticalScrollPosition = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.left = '0';
  document.body.style.top = '0';
  preview(current);
  let targetPreview: Element | undefined;
  let timer = setInterval(() => {
    targetPreview = document.getElementsByClassName('preview-wrap')[0];
    if (!targetPreview) {
      clearInterval(timer);
      document.body.style.position = 'static';
      window.scrollTo({
        top: verticalScrollPosition
      });
    }
  }, 100);
};
