import MenuCourseComp from './MenuCourse.jsx';
import * as buttonArgs from '../Button/Button.stories.jsx';
import * as ingredientsSelector from '../IngredientsSelector/IngredientsSelector.stories.jsx';

export default {
  component: MenuCourseComp,
};

export const MenuCourse = {
  args: {
    button: {
      ...buttonArgs.IconAfter.args,
      color: 'red',
      iconAfter: 'trash',
      label: 'Löschen',
      outline: true,
      size: 's',
    },
    heading: {
      level: '2',
      text: 'Apéro',
      visualLevel: '4',
    },
    index: '1',
    ingredientsSelector: ingredientsSelector.IngredientsSelector.args,
  },
};
