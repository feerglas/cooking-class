import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

export default function Button(props) {
  return (
    <button
      classList={{
        [styles.button]: true,
        [styles['button--icon']]: props.iconBefore || props.iconAfter,
        [styles[`button--size-${props.size}`]]: props.size,
        [styles[`button--color-${props.color}`]]: props.color,
        [styles['button--no-right-radius']]: props.noRightBorderRadius,
        [styles['button--outline']]: props.outline,
        [props.classes]: props.classes,
      }}
      onClick={(evt) => {
        if (props.click) {
          props.click(evt);
        }
      }}
      onBlur={(evt) => {
        if (props.blur) {
          props.blur(evt);
        }
      }}
    >
      {props.iconBefore &&
        <Icon class={styles['button__icon-before']} name={props.iconBefore} />
      }

      {props.label &&
        <span class={styles['button__label']}>{props.label}</span>
      }

      {props.iconAfter &&
        <Icon class={styles['button__icon-after']} name={props.iconAfter} />
      }
    </button>
  );
}
