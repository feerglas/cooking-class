import { For } from 'solid-js';
import AutocompleteItem from '../AutocompleteItem/AutocompleteItem';
import styles from './AutocompleteList.module.scss';

export default function AutocompleteList(props) {
  return (
    <ul class={`${styles['autocomplete-list']} ${props.classes}`}>
      <For each={props.items}>
        {(item) => <AutocompleteItem {...item} />}
      </For>
    </ul>
  );
}

