import IconComp from './Icon.jsx';

export default {
  argTypes: {
    name: {
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
  component: IconComp,
};

export const Icon = {
  args: {
    name: 'de',
  },
};

