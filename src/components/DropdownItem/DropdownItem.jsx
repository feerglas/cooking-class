import { Dynamic } from 'solid-js/web';
import styles from './DropdownItem.module.scss';
import Icon from '../Icon/Icon';
import Radio from '../Radio/Radio';

export default function DropdownItem(props) {
  return (
    <li class={`${styles.item} ${props.radio
      ? styles['item--radio']
      : undefined}`}
    >
      <Dynamic
        component={props.link
          ? 'a'
          : 'span'
        }
        class={styles.link}
        href={props.link || undefined}
        onClick={(evt) => {
          evt.preventDefault();

          if (props.click) {
            if (props.radio) {
              props.click(props.radio.value);
            } else {
              props.click();
            }
          }
        }}
      >
        {props.link && props.icon &&
          <Icon
            name={props.icon}
            class={styles.icon}
          />
        }

        {props.link &&
          <span class={styles.label}>
            {props.label}
          </span>
        }

        {props.radio &&
          <Radio
            classes={styles['radio']}
            {...props.radio}
          />
        }
      </Dynamic>
    </li>
  );
}
