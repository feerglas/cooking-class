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
    setCourses([
      ...courses()
        .slice(0, index),
      {
        ...props.menuCourse,
        id: `course-${courses().length + 1}`,
      },
      ...courses()
        .slice(index),
    ]);
  };

  const removeCourseAtIndex = (index) => {
    setCourses([
      ...courses()
        .slice(0, index),
      ...courses()
        .slice(index + 1),
    ]);
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
              click={() => {
                removeCourseAtIndex(index());
              }}
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
