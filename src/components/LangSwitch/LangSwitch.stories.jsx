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
        link: '/de',
      },
      {
        icon: 'en',
        label: 'English',
        link: '/en',
      },
      {
        icon: 'fr',
        label: 'Francais',
        link: '/fr',
      },
      {
        icon: 'it',
        label: 'Italiano',
        link: '/it',
      },
    ],
    lang: 'de',
  },
};

