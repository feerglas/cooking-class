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
        blur={() => {
          setShowList(false);
        }}
      />

      <AutocompleteList
        classList={{
          [styles['autocomplete__list']]: true,
          [styles['autocomplete__list--visible']]: showList(),
        }}
        items={items()}
      />
    </div>
  );
}

