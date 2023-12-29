import styles from './Form.module.scss';

export default function Form(props) {
  return (
    <form class={styles.form}>
      {props.children}
    </form>
  );
}
