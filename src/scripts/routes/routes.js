import Home from '../views/pages/home';
import favorite from '../views/pages/favorite';
import DetailRestaurant from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': DetailRestaurant,
  '/favorite': favorite,
};
export default routes;
