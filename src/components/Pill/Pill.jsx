import styles from './Pill.module.scss';

export default function Pill(props) {
  return (
    <span classList={{
      [styles.pill]: true,
      [styles[`pill--size-${props.size}`]]: props.size,
      [styles[`pill--color-${props.color}`]]: props.color,
    }}>
      {props.label}
    </span>
  );
}

