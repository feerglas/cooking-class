import { createSignal } from 'solid-js';
import Dropdown from '../DropdownList/DropdownList';
import Button from '../Button/Button';
import styles from './LangSwitch.module.scss';

export default function LangSwitch(props) {
  const [
    dropdownVisible,
    setDropdownVisible,
  ] = createSignal(false);

  return (
    <>
      <Button
        color='primary'
        size='s'
        icon={props.lang}
        click={() => {
          setDropdownVisible(!dropdownVisible());
        }}
      />
      <Dropdown
        classes={dropdownVisible()
          ? styles['dropdown']
          : styles['dropdown--hidden']}
        items={props.items}
        click={() => {
          setDropdownVisible(!dropdownVisible());
        }}
      />
    </>
  );
}

