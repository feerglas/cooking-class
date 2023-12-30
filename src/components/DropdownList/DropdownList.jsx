import { For } from 'solid-js';
import styles from './DropdownList.module.scss';
import DropdownItem from '../DropdownItem/DropdownItem';

export default function DropdownList(props) {
  return (
    <ul
      class={`${styles.list} ${props.classes}`}
    >
      <For each={props.items}>{(item) => <DropdownItem
        {...item}
        click={() => {
          if (props.click) {
            props.click();
          }
        }}
      />}</For>
    </ul>
  );
}
