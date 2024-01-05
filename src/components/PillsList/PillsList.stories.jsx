import PillsListComp from './PillsList.jsx';
import * as pillArgs from '../Pill/Pill.stories.jsx';

export default {
  component: PillsListComp,
};

export const PillsList = {
  args: {
    pills: [
      {
        ...pillArgs.Ingredient.args,
        id: '1',
        label: 'Some ingredient 1',
      },
      {
        ...pillArgs.Ingredient.args,
        id: '2',
        label: 'Some ingredient 2',
      },
      {
        ...pillArgs.Ingredient.args,
        id: '3',
        label: 'Some ingredient 3',
      },
      {
        ...pillArgs.Ingredient.args,
        id: '4',
        label: 'Some ingredient 4',
      },
      {
        ...pillArgs.Ingredient.args,
        id: '5',
        label: 'Some ingredient 5',
      },
    ],
  },
};
