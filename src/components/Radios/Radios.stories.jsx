import RadiosComp from './Radios.jsx';

export default {
  component: RadiosComp,
};

export const Radios = {
  args: {
    radios: [
      {
        checked: false,
        id: 'radio-id-1',
        label: 'some label 1',
        name: 'radio-name',
        value: 'radio-value-1',
      },
      {
        checked: false,
        id: 'radio-id-2',
        label: 'some label 2',
        name: 'radio-name',
        value: 'radio-value-2',
      },
      {
        checked: true,
        id: 'radio-id-3',
        label: 'some label 3',
        name: 'radio-name',
        value: 'radio-value-3',
      },
    ],
  },
};

