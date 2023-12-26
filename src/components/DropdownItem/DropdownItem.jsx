import styles from './DropdownItem.module.scss';
import Icon from '../Icon/Icon';

export default function DropdownItem(props) {
  return (
    <li class={styles.item}>
      <a
        class={styles.link}
        href={props.item.link}
      >
        {props.item.icon &&
          <Icon
            name={props.item.icon}
            class={styles.icon}
          />
        }
        <span class={styles.label}>
          {props.item.label}
        </span>
      </a>
    </li>
  );
}
