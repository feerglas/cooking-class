import SectionComp from './Section.jsx';
import * as buttonArgs from '../Button/Button.stories.jsx';

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
    button: buttonArgs.IconButton.args,
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
