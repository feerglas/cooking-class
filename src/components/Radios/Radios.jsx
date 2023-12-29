import { For } from 'solid-js';
import Radio from '../Radio/Radio';
import styles from './Radios.module.scss';

export default function Radios(props) {
  return (
    <div class={styles.radios}>
      <For each={props.radios}>
        {(radio) => <Radio {...radio} change={(val) => {
          if (props.change) {
            props.change(val);
          }
        }}/>}
      </For>
    </div>
  );
}
