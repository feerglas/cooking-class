import styles from './Radio.module.scss';

export default function Radio(props) {
  return (
    <div class={`${styles.radio} ${props.classes || undefined}`}>
      <input
        type='radio'
        id={props.id}
        value={props.value}
        name={props.name}
        class={styles['radio__input']}
        checked={props.checked}
        onChange={(evt) => {
          if (props.change && evt.srcElement.checked) {
            props.change(props.value);
          }
        }}
      />
      <label
        for={props.id}
        class={styles['radio__label']}
      >
        {props.label}
      </label>
    </div>
  );
}
