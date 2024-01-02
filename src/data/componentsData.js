export default {
  ingredientsAutocompleteInputDropdown: {
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
  },
};
