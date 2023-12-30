import DropdownListComp from './DropdownList.jsx';
import * as itemArgs from '../DropdownItem/DropdownItem.stories.jsx';

export default {
  component: DropdownListComp,
};

export const DropdownList = {
  args: {
    items: [
      itemArgs.DropdownItem.args.item,
      itemArgs.DropdownItem.args.item,
      itemArgs.DropdownItem.args.item,
      itemArgs.DropdownItem.args.item,
    ],
  },
};

