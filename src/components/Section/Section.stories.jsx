import SectionComp from './Section.jsx';

export default {
  argTypes: {
    index: {
      control: {
        max: 6,
        min: 1,
        step: 1,
        type: 'number',
      },
    },
  },
  component: SectionComp,
};

export const Section = {
  args: {
    button: {
      click: false,
      color: 'red',
      icon: 'de',
      label: 'Delete',
      size: 's',
    },
    heading: {
      level: '1',
      text: 'Heading Text',
      visualLevel: '6',
    },
    index: 1,
  },
  render: (args) => <SectionComp {...args}>
    <p>some children components here...</p>
  </SectionComp>,
};
