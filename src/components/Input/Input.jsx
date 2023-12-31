import {
  createEffect,
  createSignal,
} from 'solid-js';
import Icon from '../Icon/Icon';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Input.module.scss';
import { selected } from '../Dropdown/Dropdown.state';

export default function Input(props) {
  const [
    inputValue,
    setInputValue,
  ] = createSignal('');

  const [
    showClearButton,
    setShowClearButton,
  ] = createSignal(false);

  let inputRef;

  createEffect(() => {
    if (selected()) {
      setInputValue('');
      setShowClearButton(false);
      if (props.input) {
        props.input('');
      }
    }
  });

  return (
    <div classList={{
      [styles['input']]: true,
      [props.classes]: props.classes,
      [styles['input--filter']]: props.dropdown,
    }}>

      {props.dropdown &&
        <Dropdown
          {...props.dropdown}
        />
      }

      {props.label &&
        <label for={props.id}>{props.label}</label>
      }

      <input
        autocomplete='off'
        ref={inputRef}
        id={props.id}
        name={props.id}
        type='text'
        class={styles['input__input']}
        placeholder={props.placeholder
          ? props.placeholder
          : undefined
        }
        onInput={(evt) => {
          setInputValue(evt.currentTarget.value);
          setShowClearButton(evt.srcElement.value.length > 0);
          if (props.input) {
            props.input(evt.currentTarget.value);
          }
        }}
        onFocus={(evt) => {
          if (props.focus) {
            props.focus(evt);
          }
        }}
        onBlur={(evt) => {
          if (props.blur) {
            props.blur(evt);
          }
        }}
        value={props.value || inputValue()}
      />

      {props.closeButton &&
        <button
          classList={{
            [styles['input__button']]: true,
            [styles['input__button--hidden']]: !showClearButton(),
          }}
          onClick={() => {
            setShowClearButton(false);
            setInputValue('');
            inputRef.focus();
            if (props.input) {
              props.input('');
            }
          }}
        >
          <Icon name='close' class={styles['input__button-icon']} />
        </button>
      }
    </div>
  );
}

