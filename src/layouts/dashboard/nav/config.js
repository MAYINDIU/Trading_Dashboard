// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Dark Team',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'Deposit',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'Withdraw',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'Profit History',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'Transactions',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'Trading Plan',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'My Plan',
    path: 'darkteam',
    icon: icon('ic_blog'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },

  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
