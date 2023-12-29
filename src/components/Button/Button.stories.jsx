import ButtonComp from './Button.jsx';

export default {
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'red',
        'green',
        'black',
      ],
    },
    icon: {
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
        'xs',
        's',
        'l',
        'xl',
      ],
    },
  },
  component: ButtonComp,
};

export const Button = {
  args: {
    color: 'primary',
    icon: false,
    label: 'Button',
    size: 's',
  },
};

