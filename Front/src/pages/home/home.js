import './home.css';

const main = document.querySelector('#main');
export const home = () => {
  main.innerHTML = '';

  printHome();
};

const printHome = () => {
  main.innerHTML = `
  <section class="home-section">
  <h2 class="homepage-description"> La web donde encontrar los mejores FESTIVALES </h2> 
  <article class="homepage-buttons">
  <button class= "home-button "> Ir a EVENTOS</button>
  <button class="home-button register-button"> Registro</button>
  </article>
  </section>`;
};
