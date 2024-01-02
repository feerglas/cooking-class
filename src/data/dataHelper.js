export const ingredientCategories = {
  fruits: 'fruits',
  herbs: 'herbs',
  vegetables: 'vegetables',
};

const sortArrayOfObjects = (array, sortKey) => {
  const sortedData = array.sort((a, b) => {
    const x = a[sortKey].toLowerCase();
    const y = b[sortKey].toLowerCase();

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    return 0;
  });

  return sortedData;
};

export const prepareIngredientsForAutocomplete = (items, lang) => {
  const sorted = sortArrayOfObjects(items, lang);

  const values = sorted.map((item) => ({
    categoryId: item.category,
    id: item.id,
    pills: [
      {
        color: 'primary',
        label: item.category,
        size: 's',
      },
    ],
    text: item[lang],
  }));

  console.log(values);

  return values;
};
