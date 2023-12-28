import styles from './Icon.module.scss';
import icons from './Icons';

/* eslint-disable solid/no-innerhtml */
export default function Icon(props) {
  return (
    <span
      class={`${styles.icon} ${props.class}`}
      innerHTML={icons[props.name]}
    />
  );
}
/* eslint-enable solid/no-innerhtml */
