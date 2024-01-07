import {
  createSignal,
  For,
} from 'solid-js';
import AddBar from '../AddBar/AddBar';
import MenuCourse from '../MenuCourse/MenuCourse';
import styles from './Menu.module.scss';

export default function Menu(props) {
  const [
    courses,
    setCourses,
  ] = createSignal([
    {
      ...props.menuCourse,
      id: 'course-1',
    },
  ]);

  const addCourseAtIndex = (index) => {
    const addedCourse = [
      ...courses()
        .slice(0, index),
      {
        ...props.menuCourse,
        id: `course-${courses().length + 1}`,
      },
      ...courses()
        .slice(index),
    ];

    setCourses(addedCourse);
  };

  return (
    <div class={styles['menu']}>
      <AddBar click={() => {
        addCourseAtIndex(0);
      }} />

      <For each={courses()}>
        {(course, index) => (
          <div>
            <MenuCourse
              {...course}
              index={index() + 1}
            />
            <AddBar click={() => {
              addCourseAtIndex(index() + 1);
            }} />
          </div>
        )}
      </For>

    </div>
  );
}
