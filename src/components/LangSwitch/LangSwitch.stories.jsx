import LangSwitchComp from './LangSwitch.jsx';

export default {
  component: LangSwitchComp,
};

export const LangSwitch = {
  args: {
    items: [
      {
        icon: 'de',
        label: 'Deutsch',
        link: '#',
      },
      {
        icon: 'en',
        label: 'English',
        link: '#',
      },
      {
        icon: 'fr',
        label: 'Francais',
        link: '#',
      },
      {
        icon: 'it',
        label: 'Italiano',
        link: '#',
      },
    ],
    lang: 'de',
  },
};

