import {
  supabase,
  tableNames,
} from "../lib/supabase";

// - set specific id on each item
// - add type property to each item
const transformIngredientsForType = (ingredients, type) => {
  return ingredients.map((item) => {
    const { id } = item;

    item.id = `${type}-${id}`;
    item.type = type;

    return item;
  })
};

const getIngredientFromTableWithName = async (name, singularName) => {
  const { data, error } = await supabase
    .from(name)
    .select();

  if (error) {
    console.warn('error fetching ingredient table', name);
    console.log(error);

    return [];
  }

  return transformIngredientsForType(data, singularName);
}

export const getIngredients = async () => {
  const returnObj = {};

  returnObj[tableNames.fruits] = await getIngredientFromTableWithName(tableNames.fruits, 'fruit');

  returnObj[tableNames.vegetables] = await getIngredientFromTableWithName(tableNames.vegetables, 'vegetable');

  returnObj[tableNames.spices] = await getIngredientFromTableWithName(tableNames.spices, 'spice');

  return returnObj;
};
