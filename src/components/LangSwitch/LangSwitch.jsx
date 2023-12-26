import { languages } from '../../i18n/utils';
import Dropdown from '../DropdownList/DropdownList';
import Button from '../Button/Button';
// import styles from './LangSwitch.module.scss';

export default function LangSwitch() {
  const items = Object.entries(languages)
    .map(([
      link,
      label,
    ]) => ({
      icon: link,
      label,
      link: `/${link}`,
    }));

  return (
    <div>
      <Button
        label='some button text'
        color='primary'
        size='s'
        icon='de'
      />
      <Dropdown
        items={items}
      />
    </div>
  );
}

