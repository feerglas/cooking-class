import InputComp from './Input.jsx';
import * as dropdownArgs from '../Dropdown/Dropdown.stories.jsx';

export default {
  component: InputComp,
};

const dropdown = JSON.parse(JSON.stringify(dropdownArgs.Radios.args));

dropdown.button.size = 'l';
dropdown.button.noRightBorderRadius = true;
dropdown.button.color = 'gray';
dropdown.button.label = 'Alle';

export const Input = {
  args: {
    closeButton: true,
    id: 'input-id',
    label: false,
    placeholder: 'Zutaten durchsuchen',
  },
};

export const WithFilter = {
  args: {
    closeButton: true,
    dropdown,
    id: 'input-id',
    label: false,
    placeholder: 'Zutaten durchsuchen',
  },
};
