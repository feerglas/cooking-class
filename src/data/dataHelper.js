export const ingredientCategories = {
  vegetables: 'vegetables',
  fruits: 'fruits',
  herbs: 'herbs',
};

export const sortArrayOfObjects = (array, sortKey) => {
  const sortedData = array.sort(function(a,b){
    let x = a[sortKey].toLowerCase();
    let y = b[sortKey].toLowerCase();

    if (x>y) {
      return 1;
    }

    if (x<y) {
      return -1;
    }

    return 0;
  });

  return sortedData;
};

export const filterArrayOfObjects = (array, key, value) => {
  return array.filter((item) => {
    return item[key] === value;
  });
};