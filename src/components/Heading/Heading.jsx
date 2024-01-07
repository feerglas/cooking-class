import {
  createEffect,
  createSignal,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import Icon from '../Icon/Icon';
import styles from './Heading.module.scss';

export default function Section(props) {
  const [
    inputValue,
    setInputValue,
  ] = createSignal();

  createEffect(() => {
    setInputValue(props.text);
  });

  return (
    <Dynamic
      component={`h${props.level}`}
      class={`
        ${styles.heading}
        ${styles[`heading--level-${props.visualLevel || props.level}`]}
        ${props.classes || undefined}
      `}
    >
      {props.editable &&
        <div class={styles['heading__input-wrapper']}>
          <input
            value={inputValue()}
            class={styles['heading__input']}
            onBlur={(evt) => {
              setInputValue(evt.srcElement.value);

              if (props.change) {
                props.change(inputValue());
              }
            }}
          />
          <Icon
            class={styles['heading__icon']}
            name='pen'
          />
        </div>
      }

      {!props.editable &&
        props.text
      }
    </Dynamic>
  );
}
