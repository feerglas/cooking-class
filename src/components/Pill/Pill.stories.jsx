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
    color: 'primary',
    label: 'Pill',
    size: 'l',
  },
};

