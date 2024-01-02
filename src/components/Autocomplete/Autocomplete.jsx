import {
  createEffect,
  createSignal,
} from 'solid-js';
import AutocompleteList from '../AutocompleteList/AutocompleteList';
import Input from '../Input/Input';
import styles from './Autocomplete.module.scss';
import { selected } from '../Dropdown/Dropdown.state';
import events from '../../events/events';

export default function Autocomplete(props) {
  const [
    items,
    setItems,
  ] = createSignal([]);

  const [
    showList,
    setShowList,
  ] = createSignal(false);

  const [
    searchInput,
    setSearchInput,
  ] = createSignal('');

  createEffect(() => {

    let _items = props.items;

    // filter by category
    if (selected().value !== 'all') {
      _items = props.items.filter((item) => item.categoryId === selected().value);
    }

    // filter by search and highlight search term in results
    const results = [];

    _items.forEach((item) => {
      const itemLowercase = item.text.toLowerCase();
      const searchLowercase = searchInput()
        .toLowerCase();
      const searchIndex = itemLowercase.indexOf(searchLowercase);

      if (searchIndex !== -1) {
        const tempItem = JSON.parse(JSON.stringify(item));

        const preString = tempItem.text.substring(0, searchIndex);
        const main = tempItem.text.substring(searchIndex, searchIndex + searchLowercase.length);
        const postString = tempItem.text.substring(searchIndex + searchLowercase.length);

        tempItem.text = `${preString}<b>${main}</b>${postString}`;

        results.push(tempItem);
      }
    });

    setItems(results);
  });

  return (
    <div class={styles['autocomplete']}>
      <Input
        {...props.input}
        focus={() => {
          setShowList(true);
        }}
        blur={(evt) => {
          if (evt.relatedTarget) {
            const attr = evt.relatedTarget.getAttribute('data-autocomplete-item');

            if (attr && attr === 'button') {
              return;
            }
          }

          setShowList(false);
        }}
        input={(value) => {
          setSearchInput(value);
        }}
      />

      <AutocompleteList
        classList={{
          [styles['autocomplete__list']]: true,
          [styles['autocomplete__list--visible']]: showList(),
        }}
        items={items()}
        click={(value) => {
          setShowList(false);

          const event = new CustomEvent(events.autocomplete.ingredientSelected, {
            detail: value,
          });

          window.dispatchEvent(event);
        }}
      />
    </div>
  );
}

