import './header.css';
import { routes } from '../data/links';

export const header = () => {
  const header = document.querySelector('.header');
  const navBar = document.createElement('nav');

  navBar.classList.add('navBar');

  for (const route of routes) {
    const link = document.createElement('a');

    link.textContent = route.text;
    link.href = '#';

    link.addEventListener('click', route.page);
    navBar.append(link);
  }
  header.append(navBar);
};
