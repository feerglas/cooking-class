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
      <button
        classList={{
          [styles['dropdown__backdrop']]: true,
          [styles['dropdown__backdrop--visible']]: dropdownVisible(),
        }}
        onClick={() => {
          setDropdownVisible(false);
        }}
      />
      <Button
        {...props.button}
        classes={styles['dropdown__button']}
        label={props.radios
          ? selected().label
          : props.label
        }
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

