import { Dynamic } from 'solid-js/web';
import styles from './Heading.module.scss';

export default function Section(props) {
  return (
    <Dynamic
      component={`h${props.level}`}
      class={`
        ${styles.heading}
        ${styles[`heading--level-${props.visualLevel || props.level}`]}
        ${props.classes || undefined}
      `}
    >
      {props.text}
    </Dynamic>
  );
}
