import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import styles from './Section.module.scss';

export default function Section(props) {
  return (
    <div class={`${styles.section} ${props.classes}`}>

      <div class={styles['section__header']}>

        {props.index &&
          <span class={styles['section__index']}>
            {props.index}:
          </span>
        }

        <Heading
          {...props.heading}
          classes={styles['section__heading']}
        />

        {props.button &&
          <Button
            {...props.button}
            classes={styles['section__button']}
          />
        }
      </div>

      <div class={styles['section__content']}>
        {props.children}
      </div>
    </div>
  );
}
