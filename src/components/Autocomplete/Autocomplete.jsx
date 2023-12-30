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

  createEffect(() => {
    setItems(props.items);
  });

  return (
    <div class={styles['autocomplete']}>
      <Input
        {...props.input}
      />

      <AutocompleteList
        classes={styles['autocomplete__list']}
        items={items()}
      />
    </div>
  );
}

