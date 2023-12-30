import AutocompleteItemComp from './AutocompleteItem.jsx';
import * as pillArgs from '../Pill/Pill.stories.jsx';

export default {
  component: AutocompleteItemComp,
};

export const AutocompleteItem = {
  args: {
    categoryId: 'radio-id-1',
    click: false,
    id: '1',
    text: 'Some autocomplete text',
  },
};

export const HighlightBefore = {
  args: {
    categoryId: 'radio-id-1',
    click: false,
    id: '2',
    text: '<b>Som</b>e autocomplete text',
  },
};

export const HighlightMiddle = {
  args: {
    categoryId: 'radio-id-1',
    click: false,
    id: '3',
    text: 'Some aut<b>ocom</b>plete text',
  },
};

export const HighlightAfter = {
  args: {
    categoryId: 'radio-id-1',
    click: false,
    id: '4',
    text: 'Some autocomplete t<b>ext</b>',
  },
};

export const With1Pill = {
  args: {
    categoryId: 'radio-id-1',
    click: false,
    id: '5',
    pills: [
      {
        ...pillArgs.Pill.args,
        color: 'green',
        label: 'Saison',
      },
    ],
    text: 'Some autocomplete text',
  },
};

export const With3Pills = {
  args: {
    categoryId: 'radio-id-1',
    click: false,
    id: '5',
    pills: [
      pillArgs.Pill.args,
      pillArgs.Pill.args,
      pillArgs.Pill.args,
    ],
    text: 'Some pretty long text to see text flow if there is not enough space for all the text in one line',
  },
};
