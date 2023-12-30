import LangSwitchComp from './LangSwitch.jsx';
import * as dropdownItems from '../DropdownList/DropdownList.stories.jsx';

export default {
  argTypes: {
    lang: {
      control: {
        type: 'select',
      },
      options: [
        'de',
        'fr',
        'it',
        'en',
      ],
    },
  },
  component: LangSwitchComp,
};

export const LangSwitch = {
  args: {
    items: dropdownItems.DropdownList.args.items,
    lang: 'de',
  },
};

