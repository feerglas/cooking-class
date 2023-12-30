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
        'gray',
      ],
    },
    iconAfter: {
      control: {
        type: 'select',
      },
      options: [
        'close',
        'arrowDown',
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
    click: false,
    color: 'primary',
    iconAfter: false,
    iconBefore: false,
    label: 'Button',
    size: 's',
  },
};

export const IconBefore = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: false,
    iconBefore: 'en',
    label: 'Button',
    size: 's',
  },
};

export const IconAfter = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: 'arrowDown',
    iconBefore: false,
    label: 'Button',
    size: 's',
  },
};

export const BothIcons = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: 'arrowDown',
    iconBefore: 'en',
    label: 'Button',
    size: 's',
  },
};

export const IconOnly = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: false,
    iconBefore: 'en',
    label: false,
    size: 's',
  },
};

export const NoRightBorderRadius = {
  args: {
    click: false,
    color: 'primary',
    iconAfter: false,
    iconBefore: false,
    label: 'Button',
    noRightBorderRadius: true,
    size: 's',
  },
};

