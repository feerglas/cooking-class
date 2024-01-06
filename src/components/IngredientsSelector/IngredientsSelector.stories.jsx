import IngredientsSelectorComp from './IngredientsSelector.jsx';
import componentsData from '../../data/componentsData';
import ingredients from '../../data/ingredientsMock.js';

export default {
  component: IngredientsSelectorComp,
};

export const IngredientsSelector = {
  args: {
    headingIngredients: 'Deine Zutaten',
    headingIngredientsList: 'Zutaten suchen',
    ingredients,
    input: {
      closeButton: true,
      dropdown: {
        ...componentsData.ingredientsAutocompleteInputDropdown,
      },
      id: 'ingredients-input',
      label: false,
      placeholder: 'Zutaten durchsuchen',
    },
    pillsPlaceholder: 'Füge 2 bis 5 Zutaten hinzu.',
  },
};
