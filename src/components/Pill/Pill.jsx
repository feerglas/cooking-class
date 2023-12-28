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
    >
      {props.iconBefore &&
        <Icon
          class={styles['pill__icon']}
          name={props.iconBefore}
        />
      }

      <span>{props.label}</span>

      {props.iconAfter &&
        <Icon
          class={styles['pill__icon']}
          name={props.iconAfter}
        />
      }
    </Dynamic>
  );
}

