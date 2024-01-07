const ingredientsAutocompleteInputDropdown = {
  button: {
    click: false,
    color: 'gray',
    iconAfter: 'arrowDown',
    iconBefore: false,
    label: 'Alle',
    noRightBorderRadius: true,
    size: 'l',
  },
  items: [
    {
      radio: {
        checked: true,
        id: 'ingrdients-selector-all',
        label: 'Alle',
        name: 'ingrdients-selector',
        value: 'all',
      },
    },
    {
      radio: {
        checked: false,
        id: 'ingrdients-selector-vegetables',
        label: 'Vegetables',
        name: 'ingrdients-selector',
        value: 'vegetables',
      },
    },
    {
      radio: {
        checked: false,
        id: 'ingrdients-selector-fruits',
        label: 'Fruits',
        name: 'ingrdients-selector',
        value: 'fruits',
      },
    },
    {
      radio: {
        checked: false,
        id: 'ingrdients-selector-herbs',
        label: 'Herbs',
        name: 'ingrdients-selector',
        value: 'herbs',
      },
    },
  ],
  radios: true,
};

export default {
  menuCourse: {
    button: {
      color: 'red',
      iconAfter: 'trash',
      iconBefore: false,
      label: 'Löschen',
      outline: true,
      size: 's',
    },
    heading: {
      editable: true,
      level: '2',
      text: 'Apéro',
      visualLevel: '4',
    },
    index: '1',
    ingredientsSelector: {
      headingIngredients: 'Deine Zutaten',
      headingIngredientsList: 'Zutaten suchen',
      // ingredients,
      input: {
        closeButton: true,
        dropdown: {
          ...ingredientsAutocompleteInputDropdown,
        },
        id: 'ingredients-input',
        label: false,
        placeholder: 'Zutaten durchsuchen',
      },
      pillsPlaceholder: 'Füge 2 bis 5 Zutaten hinzu.',
    },
  },
};
