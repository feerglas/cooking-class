import DropdownComp from './Dropdown.jsx';
import * as dropdownItems from '../DropdownList/DropdownList.stories.jsx';
import * as buttonArgs from '../Button/Button.stories.jsx';

export default {
  component: DropdownComp,
};

export const Dropdown = {
  args: {
    button: buttonArgs.IconAfter.args,
    items: dropdownItems.DropdownList.args.items,
  },
};

