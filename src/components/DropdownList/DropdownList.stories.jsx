import DropdownListComp from './DropdownList.jsx';
import * as itemArgs from '../DropdownItem/DropdownItem.stories.jsx';

export default {
  component: DropdownListComp,
};

export const Links = {
  args: {
    items: [
      itemArgs.Link.args,
      itemArgs.Link.args,
      itemArgs.Link.args,
      itemArgs.Link.args,
    ],
  },
};

export const Radios = {
  args: {
    items: [
      {
        radio: {
          ...itemArgs.Radio.args.radio,
          checked: false,
          id: 'radio-id-1',
        },
      },
      {
        radio: {
          ...itemArgs.Radio.args.radio,
          checked: false,
          id: 'radio-id-2',
        },
      },
    ],
  },
};

