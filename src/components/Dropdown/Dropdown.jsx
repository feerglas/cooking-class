import { createSignal } from 'solid-js';
import DropdownList from '../DropdownList/DropdownList';
import Button from '../Button/Button';
import styles from './Dropdown.module.scss';
import { selected } from './Dropdown.state';

export default function LangSwitch(props) {
  const [
    dropdownVisible,
    setDropdownVisible,
  ] = createSignal(false);

  return (
    <div class={`${styles['dropdown']} ${props.classes || undefined}`}>
      <Button
        {...props.button}
        label={selected().label}
        click={() => {
          setDropdownVisible(!dropdownVisible());
        }}
      />
      <DropdownList
        classes={dropdownVisible()
          ? styles['dropdown__list']
          : styles['dropdown__list--hidden']}
        items={props.items}
        click={() => {
          setDropdownVisible(!dropdownVisible());
        }}
      />
    </div>
  );
}

