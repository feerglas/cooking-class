import AddBar from '../AddBar/AddBar';
import MenuCourse from '../MenuCourse/MenuCourse';
import styles from './Menu.module.scss';

export default function Menu(props) {
  return (
    <div class={styles['menu']}>
      <AddBar click={() => {
        console.log('click');
      }} />

      <MenuCourse
        {...props.menuCourse}
        index='2'
      />

      <AddBar click={() => {
        console.log('click');
      }} />
    </div>
  );
}
