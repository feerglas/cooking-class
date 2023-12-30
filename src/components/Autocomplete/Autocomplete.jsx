import AutocompleteList from '../AutocompleteList/AutocompleteList';
import Input from '../Input/Input';
import styles from './Autocomplete.module.scss';

export default function Autocomplete(props) {
  return (
    <div class={styles['autocomplete']}>
      <Input
        closeButton={true}
        id='autocomplete-input'
        label={false}
        placeholder='Search'
      />

      <AutocompleteList
        classes={styles['autocomplete__list']}
        {...props.list} />
    </div>
  );
}

