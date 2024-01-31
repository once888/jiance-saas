import { OTHER_TAB_NAME } from '~/utils/const';
import { getCurrentScroll } from '~/utils/tools';
import { TabCheck } from '~/utils/eventbus';

export default function(val: TabCheck, width: number) {
  const router = useRouter();
  if (val === 'doc') {
    window.open('https://help.zjbdgs.com/');
    return;
  }
  if (OTHER_TAB_NAME.includes(val)) {
    router.push(`/${val}`);
    return;
  }
  const route = useRoute();
  const scrollPage = () => {
    window.scrollTo({
      top: getCurrentScroll(width, val),
      behavior: 'smooth'
    });
  };
  if (route.name !== 'index') {
    router.push('/');
    setTimeout(() => {
      scrollPage();
    }, 500);
    return;
  }
  scrollPage();
}
