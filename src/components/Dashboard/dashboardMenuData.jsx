import {
  all,
  blog,
  calender,
  chat,
  contact,
  dashboardGrid,
  editBlog,
  email,
  home,
  job,
  task,
  userSvg,
} from '../../assets/Home/Common SVG Images/svg';

const dashboardMenuData = [
  {
    title: 'navigation',
    subCategories: [
      { title: 'dashboard', icon: dashboardGrid },
      {
        title: 'home',
        icon: home,
        link: '/',
      },
    ],
  },
  {
    title: 'apps',
    subCategories: [
      {
        id: 'app_01',
        title: 'Users',
        icon: userSvg,
      },
      {
        id: 'app_02',
        title: 'Blog',
        icon: blog,
        itemCategory: [
          { id: 'item_01', title: 'add blog', icon: editBlog },
          {
            id: 'item_02',
            title: 'all blogs',
            icon: all,
          },
        ],
      },
      {
        id: 'app_03',
        title: 'calender',
        icon: calender,
      },
      { id: 'app_04', title: 'chat', icon: chat },
      { id: 'app_05', title: 'email', icon: email },
      {
        id: 'app_06',
        title: 'tasks',
        icon: task,
      },
      {
        id: 'app_07',
        title: 'projects',
        icon: job,
      },
      {
        id: 'app_08',
        title: 'contact',
        icon: contact,
      },
    ],
  },
];

export default dashboardMenuData;
