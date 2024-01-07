import Section from '../Section/Section';
import IngredientsSelector from '../IngredientsSelector/IngredientsSelector';
import styles from './MenuCourse.module.scss';

export default function MenuCourse(props) {
  return (
    <Section
      index={props.index}
      heading={props.heading}
      button={{
        ...props.button,
        click: (evt) => {
          if (props.click) {
            props.click(evt);
          }
        },
      }}
    >
      <IngredientsSelector {...props.ingredientsSelector} />
    </Section>
  );
}
