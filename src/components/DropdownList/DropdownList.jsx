import { For } from 'solid-js';
import styles from './DropdownList.module.scss';
import DropdownItem from '../DropdownItem/DropdownItem';

export default function DropdownList(props) {
  return (
    <ul
      class={`${styles.list} ${props.classes || undefined}`}
    >
      <For each={props.items}>{(item) => <DropdownItem
        {...item}
        click={(elem) => {
          if (props.click) {
            props.click(elem);
          }
        }}
      />}</For>
    </ul>
  );
}
