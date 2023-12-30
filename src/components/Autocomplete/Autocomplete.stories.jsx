import AutocompleteComp from './Autocomplete.jsx';
import * as listArgs from '../AutocompleteList/AutocompleteList.stories.jsx';

export default {
  component: AutocompleteComp,
};

export const Autocomplete = {
  args: {
    list: listArgs.AutocompleteList.args,
  },
};

