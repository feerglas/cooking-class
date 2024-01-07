import HeadingComp from './Heading.jsx';

export default {
  argTypes: {
    level: {
      control: {
        max: 6,
        min: 1,
        step: 1,
        type: 'number',
      },
    },
    visualLevel: {
      control: {
        max: 6,
        min: 1,
        step: 1,
        type: 'number',
      },
    },
  },
  component: HeadingComp,
};

export const Heading = {
  args: {
    editable: false,
    level: 1,
    text: 'Heading text',
    visualLevel: false,
  },
};

export const HeadingEditable = {
  args: {
    editable: true,
    level: 1,
    text: 'Heading text',
    visualLevel: false,
  },
};

