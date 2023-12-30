import { For } from 'solid-js';
import styles from './AutocompleteItem.module.scss';
import Pill from '../Pill/Pill';

/* eslint-disable solid/no-innerhtml */
export default function AutocompleteItem(props) {
  return (
    <li
      class={`${styles['autocomplete-item']} ${props.classes}`}
    >
      <button
        class={styles['autocomplete-item__button']}
        onClick={() => {
          if (props.click) {
            props.click(props.id);
          }
        }}
      >
        <span
          innerHTML={props.text}
          class={styles['autocomplete-item__text']}
          data-category-id={props.categoryId}
        />

        {props.pills &&
          <span class={styles['autocomplete-item__pills']}>
            <For each={props.pills}>
              {(pill) => <Pill {...pill} />}
            </For>
          </span>
        }
      </button>
    </li>
  );
}
/* eslint-enable solid/no-innerhtml */
