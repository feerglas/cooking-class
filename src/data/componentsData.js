const categoryDropdown = {
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

const sectionButton = {
  color: 'red',
  iconAfter: 'trash',
  iconBefore: false,
  label: 'Löschen',
  outline: true,
  size: 's',
};

const sectionHeading = {
  editable: true,
  level: '2',
  text: 'Gib dem Gang einen Namen',
  visualLevel: '4',
};

export default {
  menuCourse: {
    button: sectionButton,
    heading: sectionHeading,
    index: '1',
    ingredientsSelector: {
      headingIngredients: 'Deine Zutaten',
      headingIngredientsList: 'Zutaten suchen',
      // ingredients --> set after importing this object
      input: {
        closeButton: true,
        dropdown: {
          ...categoryDropdown,
        },
        id: 'ingredients-input',
        label: false,
        placeholder: 'Zutaten durchsuchen',
      },
      pillsPlaceholder: 'Füge 2 bis 5 Zutaten hinzu.',
    },
  },
};
