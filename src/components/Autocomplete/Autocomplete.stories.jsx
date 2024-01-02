import AutocompleteComp from './Autocomplete.jsx';
import * as listArgs from '../AutocompleteList/AutocompleteList.stories.jsx';
import * as inputArgs from '../Input/Input.stories.jsx';

export default {
  component: AutocompleteComp,
};

export const Autocomplete = {
  args: {
    input: inputArgs.WithFilter.args,
    items: listArgs.AutocompleteList.args.items,
    radios: true,
  },
};

