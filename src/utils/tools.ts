import {
  POSITION_CONTACT,
  POSITION_PRICE,
  WIDTH_MOBILE,
  WIDTH_PAD
} from '~/utils/const';
import { TabCheck } from '~/utils/eventbus';

export const getCurrentDevice = (width: number) => width <= WIDTH_MOBILE ? 'mobile' : width <= WIDTH_PAD ? 'pad' : 'screen';

export const getCurrentScroll = (width: number, type: TabCheck | 'contact') => {
  const device = getCurrentDevice(width);
  switch (type) {
    case 'price':
      return POSITION_PRICE[device];
    case 'product':
      return 0;
    case 'contact':
      return POSITION_CONTACT[device];
    default:
      return 0;
  }
};

export const listDelLast = (list: any[], page: number) => {
  if (list.length === 1 && page > 1) page--;
};
