import { Dynamic } from 'solid-js/web';
import Icon from '../Icon/Icon';
import styles from './Pill.module.scss';

export default function Pill(props) {
  return (
    <Dynamic
      component={
        props.click
          ? 'button'
          : 'span'
      }
      classList={{
        [styles.pill]: true,
        [styles['pill--button']]: props.click,
        [styles[`pill--size-${props.size}`]]: props.size,
        [styles[`pill--color-${props.color}`]]: props.color,
      }}
      onClick={(evt) => {
        if (props.click) {
          props.click(evt);
        }
      }}
      data-pill-id={props.id}
    >
      {props.iconBefore &&
        <Icon
          class={styles['pill__icon']}
          name={props.iconBefore}
        />
      }

      <span class={styles['pill__label']}>{props.label}</span>

      {props.iconAfter &&
        <Icon
          class={styles['pill__icon']}
          name={props.iconAfter}
        />
      }
    </Dynamic>
  );
}

