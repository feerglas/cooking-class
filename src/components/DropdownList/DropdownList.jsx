import {
  createEffect,
  For,
} from 'solid-js';
import styles from './DropdownList.module.scss';
import DropdownItem from '../DropdownItem/DropdownItem';
import { setSelected } from '../Dropdown/Dropdown.state';

export default function DropdownList(props) {

  createEffect(() => {
    props.items.forEach((item) => {
      if (!item.radio) {
        return;
      }

      if (item.radio.checked) {
        setSelected(item.radio);
      }
    });
  });

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
