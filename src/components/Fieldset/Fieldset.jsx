import styles from './Fieldset.module.scss';

export default function Fieldset(props) {
  return (
    <fieldset classList={{
      [styles.fieldset]: true,
      [styles['fieldset--hidden']]: !props.visible,
    }}>

      {props.legend &&
        <legend class={styles['fieldset__legend']}>{props.legend}</legend>
      }

      {props.children}
    </fieldset>
  );
}
