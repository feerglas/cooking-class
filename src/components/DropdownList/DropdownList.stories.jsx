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
          id: 'radio-id-0',
          label: 'radio cat all',
          value: 'radio-id-0',
        },
      },
      {
        radio: {
          ...itemArgs.Radio.args.radio,
          checked: false,
          id: 'radio-id-1',
          label: 'radio cat 1',
          value: 'radio-id-1',
        },
      },
      {
        radio: {
          ...itemArgs.Radio.args.radio,
          checked: false,
          id: 'radio-id-2',
          label: 'radio cat 2',
          value: 'radio-id-2',
        },
      },
    ],
  },
};

