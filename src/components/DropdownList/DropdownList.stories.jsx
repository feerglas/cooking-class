import DropdownListComp from './DropdownList.jsx';

export default {
  component: DropdownListComp,
};

export const DropdownList = {
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
  },
};

