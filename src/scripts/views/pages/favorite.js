import FavoriteMovieIdb from '../../data/favorite-restaurant';
import { createResItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <main id="favorite">
        <section class="content">
          <h2 class="title" tabindex="0">Your Favorite Foody</h2>
          <section class="list__place">
            <div class="card__grid" id="card__grid"></div>
          </section>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#card__grid');

    try {
      const restaurants = await FavoriteMovieIdb.getAllRestaurants();
      console.log(restaurants);
      restaurantContainer.innerHTML = ''; // Menghapus konten sebelum menambahkan data baru
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createResItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
      restaurantContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
    }
  },
};

export default Like;
