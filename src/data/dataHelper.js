export const ingredientCategories = {
  fruits: 'fruits',
  herbs: 'herbs',
  vegetables: 'vegetables',
};

export const sortArrayOfObjects = (array, sortKey) => {
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

export const filterArrayOfObjects = (array, key, value) => array.filter((item) => item[key] === value);
