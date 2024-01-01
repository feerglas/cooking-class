import {
  createEffect,
  createSignal,
} from 'solid-js';
import AutocompleteList from '../AutocompleteList/AutocompleteList';
import Input from '../Input/Input';
import styles from './Autocomplete.module.scss';

export default function Autocomplete(props) {
  const [
    items,
    setItems,
  ] = createSignal([]);

  const [
    showList,
    setShowList,
  ] = createSignal(false);

  createEffect(() => {
    setItems(props.items);
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
          console.log(value);
        }}
        filterChange={(value) => {
          console.log(value);
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

