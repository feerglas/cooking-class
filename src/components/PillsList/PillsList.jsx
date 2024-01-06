import { For } from 'solid-js';
import styles from './PillsList.module.scss';
import Pill from '../Pill/Pill';

export default function PillsList(props) {

  return (
    <ul class={`${styles['pills-list']} ${props.classes || undefined}`}>
      {(!props.pills || props.pills.length < 1) &&
        <p>{props.placeholder}</p>
      }
      <For each={props.pills}>
        {(pill) => <Pill
          {...pill}
          click={(evt) => {
            const id = evt.srcElement.dataset.pillId;

            if (props.removed) {
              props.removed(id);
            }
          }}
        />}
      </For>
    </ul>
  );
}

