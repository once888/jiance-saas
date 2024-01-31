import mitt from 'mitt';

type HeaderEvent = {
  'click-tab': () => TabCheck;
  'click-menu': () => HeaderTabs[];
};

export type TabCheck = 'product' | 'price' | 'deploy' | 'doc' | 'solution';

export interface HeaderTabs {
  value: string;
  title: string;
}

export const emitterHeader = mitt<HeaderEvent>();
