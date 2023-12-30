import AutocompleteListComp from './AutocompleteList.jsx';
import * as itemArgs from '../AutocompleteItem/AutocompleteItem.stories.jsx';

export default {
  component: AutocompleteListComp,
};

export const AutocompleteList = {
  args: {
    click: false,
    items: [
      itemArgs.AutocompleteItem.args,
      itemArgs.HighlightBefore.args,
      itemArgs.HighlightMiddle.args,
      itemArgs.HighlightAfter.args,
      itemArgs.With1Pill.args,
      itemArgs.With3Pills.args,
    ],
  },
};

