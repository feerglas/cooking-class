import {
  createEffect,
  createSignal,
} from 'solid-js';
import Autocomplete from '../Autocomplete/Autocomplete';
import PillsList from '../PillsList/PillsList';
import Heading from '../Heading/Heading';
import styles from './IngredientsSelector.module.scss';

export default function IngredientsSelector(props) {
  const [
    pills,
    setPills,
  ] = createSignal([]);

  const [
    ingredientIds,
    setIngredientIds,
  ] = createSignal([]);

  const [
    autocompleteItems,
    setAutocompleteItems,
  ] = createSignal([]);

  createEffect(() => {
    let ingredients = JSON.parse(JSON.stringify(props.ingredients));
    const addedPills = [];

    ingredientIds()
      .forEach((id) => {
        ingredients = ingredients.filter((ingredient) => {
          if (id === ingredient.id) {
            addedPills.push({
              color: 'primary',
              iconAfter: 'close',
              iconBefore: false,
              id: ingredient.id,
              label: ingredient.text,
              size: 'l',
            });

            return false;
          }

          return true;
        });
      });

    setAutocompleteItems(ingredients);
    setPills(addedPills);
  });

  return (
    <>

      <Heading
        level='3'
        visualLevel='5'
        text={props.headingIngredientsList}
        classes={styles['ingredients-selector__heading']}
      />

      <Autocomplete
        classes={styles['ingredients-selector__autocomplete']}
        input={props.input}
        items={autocompleteItems()}
        selected={(val) => {
          if (ingredientIds()
            .indexOf(val) !== -1) {
            return;
          }

          setIngredientIds([
            ...ingredientIds(),
            val,
          ]);
        }}
      />

      <Heading
        level='3'
        visualLevel='5'
        text={props.headingIngredients}
        classes={styles['ingredients-selector__heading']}
      />

      <PillsList
        placeholder={props.pillsPlaceholder}
        pills={pills()}
        removed={(id) => {
          const selected = ingredientIds()
            .filter((ingredient) => id !== ingredient);

          setIngredientIds(selected);
        }}
      />
    </>
  );
}

