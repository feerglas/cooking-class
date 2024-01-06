import Icon from '../Icon/Icon';
import styles from './AddBar.module.scss';

export default function AddBar(props) {

  return (
    <button
      class={styles['add-bar']}
      onClick={() => {
        if (props.click) {
          props.click();
        }
      }}
    >
      <span class={styles['add-bar__line']} />
      <Icon
        class={styles['add-bar__icon']}
        name='plus'
      />
    </button>
  );
}

