import MenuComp from './Menu.jsx';
import * as menuCourseArgs from '../MenuCourse/MenuCourse.stories.jsx';

export default {
  component: MenuComp,
};

export const Menu = {
  args: {
    menuCourse: menuCourseArgs.MenuCourse.args,
  },
};
