import DropdownComp from './Dropdown.jsx';
import * as dropdownItems from '../DropdownList/DropdownList.stories.jsx';
import * as buttonArgs from '../Button/Button.stories.jsx';

export default {
  component: DropdownComp,
};

export const Links = {
  args: {
    button: buttonArgs.IconAfter.args,
    items: dropdownItems.Links.args.items,
  },
};

export const Radios = {
  args: {
    button: buttonArgs.IconAfter.args,
    items: dropdownItems.Radios.args.items,
  },
};
