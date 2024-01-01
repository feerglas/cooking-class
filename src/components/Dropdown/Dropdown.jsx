import { createSignal } from 'solid-js';
import DropdownList from '../DropdownList/DropdownList';
import Button from '../Button/Button';
import styles from './Dropdown.module.scss';

export default function LangSwitch(props) {
  const [
    dropdownVisible,
    setDropdownVisible,
  ] = createSignal(false);

  return (
    <div class={`${styles['dropdown']} ${props.classes || undefined}`}>
      <Button
        {...props.button}
        click={() => {
          setDropdownVisible(!dropdownVisible());
        }}
      />
      <DropdownList
        classes={dropdownVisible()
          ? styles['dropdown__list']
          : styles['dropdown__list--hidden']}
        items={props.items}
        click={(evt) => {
          if (props.filterChange) {
            props.filterChange(evt);
          }
          setDropdownVisible(!dropdownVisible());
        }}
      />
    </div>
  );
}

