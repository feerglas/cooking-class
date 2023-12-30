import AutocompleteListComp from './AutocompleteList.jsx';
import * as itemArgs from '../AutocompleteItem/AutocompleteItem.stories.jsx';

export default {
  component: AutocompleteListComp,
};

export const AutocompleteList = {
  args: {
    click: false,
    items: [
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-1',
        id: '1',
        text: 'Orange 1',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-2',
        id: '1',
        text: 'Apfel 2',
      },
      {
        ...itemArgs.With1Pill.args,
        categoryId: 'radio-id-1',
        id: '1',
        text: 'Minze 1',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-2',
        id: '2',
        text: 'Zitrone 2',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-1',
        id: '3',
        text: 'Blumenkohl 1',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-2',
        id: '4',
        text: 'Chicoree 2',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-1',
        id: '5',
        text: 'Spargel 1',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-2',
        id: '6',
        text: 'Kartoffel 2',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-1',
        id: '7',
        text: 'Basilikum 1',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-2',
        id: '8',
        text: 'Federkohl 2',
      },
      {
        ...itemArgs.AutocompleteItem.args,
        categoryId: 'radio-id-1',
        id: '9',
        text: 'Knollensellerie 1',
      },
    ],
  },
};

