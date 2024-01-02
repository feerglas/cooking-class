import {
  createEffect,
  createSignal,
} from 'solid-js';
import AutocompleteList from '../AutocompleteList/AutocompleteList';
import Input from '../Input/Input';
import styles from './Autocomplete.module.scss';
import { selected } from '../Dropdown/Dropdown.state';

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

    // filter by search
    _items = _items.filter((item) => {
      const itemLowercase = item.text.toLowerCase();
      const searchLowercase = searchInput()
        .toLowerCase();

      return itemLowercase.indexOf(searchLowercase) !== -1;
    });

    setItems(_items);
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
          console.log('click', value);
          setShowList(false);
        }}
      />
    </div>
  );
}

