import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

export default function Button(props) {
  return (
    <button
      classList={{
        [styles.button]: true,
        [styles['button--icon']]: props.icon,
        [styles[`button--size-${props.size}`]]: props.size,
        [styles[`button--color-${props.color}`]]: props.color,
        [props.classes]: props.classes,
      }}
      onClick={() => {
        if (props.click) {
          props.click();
        }
      }}
    >
      {props.icon &&
        <Icon class={styles['button__icon']} name={props.icon} />
      }

      {props.label &&
        <span class={styles['button__label']}>{props.label}</span>
      }
    </button>
  );
}
