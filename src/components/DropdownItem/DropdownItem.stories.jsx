import DropdownItemComp from './DropdownItem.jsx';
import * as radiosArgs from '../Radio/Radio.stories.jsx';

export default {
  component: DropdownItemComp,
};

export const Link = {
  args: {
    icon: 'de',
    label: 'Deutsch',
    link: '/de',
  },
};

export const Radio = {
  args: {
    radio: radiosArgs.Radio.args,
  },
};

