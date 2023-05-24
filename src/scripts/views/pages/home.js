import '../../component/app-home';
import restaurantSource from '../../data/restaurants-source';
import CONFIG from '../../globals/config';
import { createResItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <app-home></app-home>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.listRestaurans();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('#card__grid');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createResItemTemplate(restaurant);
    });

    const formSearch = document.querySelector('.search');
    formSearch.addEventListener('submit', async (event) => {
      event.preventDefault();

      const inputQuery = document.getElementById('name').value;

      try {
        const response = await fetch(CONFIG.SEARCH + inputQuery);
        console.log(response);

        const responseJson = await response.json();
        const searchRestaurantContainer = document.querySelector('#card__grid');
        searchRestaurantContainer.innerHTML = '';
        responseJson.restaurants.forEach((restaurant) => {
          searchRestaurantContainer.innerHTML += createResItemTemplate(restaurant);
        });
      } catch (error) {
        console.log(error);
        restaurantContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
      }
    });
  },
};

export default Home;
