import Section from '../Section/Section';
import IngredientsSelector from '../IngredientsSelector/IngredientsSelector';
import styles from './MenuCourse.module.scss';

export default function MenuCourse(props) {
  return (
    <Section
      classes={styles['menu-course']}
      index={props.index}
      heading={props.heading}
      button={props.button}
    >
      <IngredientsSelector {...props.ingredientsSelector} />
    </Section>
  );
}
