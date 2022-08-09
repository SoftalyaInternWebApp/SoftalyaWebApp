// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Sürücüler',
    path: '/dashboard/user',
    icon: getIcon('healthicons:truck-driver'),
  },
  {
    title: 'Yolcular',
    path: '/dashboard/products',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Görevler',
    path: '/dashboard/tasks',
    icon: getIcon('fluent:clipboard-task-list-rtl-24-filled'),
  },
  {
    title: 'Kullanıcı Girişi',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Üye ol',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
