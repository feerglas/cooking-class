import {
  createEffect,
  createSignal,
  For,
} from 'solid-js';
import styles from './PillsList.module.scss';
import Pill from '../Pill/Pill';

export default function PillsList(props) {
  const [
    pills,
    setPills,
  ] = createSignal([]);

  const [
    removed,
    setRemoved,
  ] = createSignal([]);

  createEffect(() => {
    const filtered = props.pills.filter((pill) => {
      let itemFound = false;

      removed()
        .forEach((removedItem) => {
          if (removedItem === pill.id) {
            itemFound = true;
          }

        });

      return !itemFound;

    });

    setPills(filtered);
  });

  return (
    <ul class={`${styles['pills-list']} ${props.classes || undefined}`}>
      <For each={pills()}>
        {(pill) => <Pill
          {...pill}
          click={(evt) => {
            const id = evt.srcElement.dataset.pillId;

            setRemoved([
              ...removed(),
              id,
            ]);
          }}
        />}
      </For>
    </ul>
  );
}

