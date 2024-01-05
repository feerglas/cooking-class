import PillComp from './Pill.jsx';

export default {
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'gray',
        'red',
        'yellow',
        'green',
        'indigo',
        'purple',
        'pink',
      ],
    },
    iconAfter: {
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
    iconBefore: {
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
    size: {
      control: {
        type: 'select',
      },
      options: [
        's',
        'l',
      ],
    },
  },
  component: PillComp,
};

export const Pill = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: false,
    iconBefore: false,
    id: '1',
    label: 'Pill',
    size: 'l',
  },
};

export const Ingredient = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: 'close',
    iconBefore: false,
    id: '1',
    label: 'Some ingredient',
    size: 'l',
  },
};

