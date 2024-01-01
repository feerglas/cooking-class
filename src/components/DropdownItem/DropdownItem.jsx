import { Dynamic } from 'solid-js/web';
import styles from './DropdownItem.module.scss';
import Icon from '../Icon/Icon';
import Radio from '../Radio/Radio';
import { setSelected } from '../Dropdown/Dropdown.state';

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
            change={() => {
              setSelected(props.radio);
              if (props.click) {
                props.click(props.radio.value);
              }
            }}
          />
        }
      </Dynamic>
    </li>
  );
}
