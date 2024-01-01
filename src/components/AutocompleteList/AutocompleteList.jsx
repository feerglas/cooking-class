import { For } from 'solid-js';
import AutocompleteItem from '../AutocompleteItem/AutocompleteItem';
import styles from './AutocompleteList.module.scss';

export default function AutocompleteList(props) {
  return (
    <ul
      class={`${styles['autocomplete-list']} ${props.classes || undefined}`}
      classList={props.classList || undefined}
    >
      <For each={props.items}>
        {(item) => <AutocompleteItem
          {...item}
          click={(elem) => {
            if (props.click) {
              props.click(elem);
            }
          }}
        />
        }
      </For>
    </ul>
  );
}

