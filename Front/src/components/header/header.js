import './header.css';
import { routes } from '../data/links';
import { home } from '../../pages/home/home';
import { logOut } from '../../pages/logIn/login';

export const renderHeader = () => {
  const header = document.querySelector('.header');
  header.innerHTML = '';
  const logoTitle = document.createElement('h1');
  const navBar = document.createElement('nav');

  logoTitle.textContent = ' --EventME-- ';
  logoTitle.classList.add('logo');
  navBar.classList.add('navBar');

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  console.log(user);

  for (const route of routes) {
    if (!user && (route.text === 'MyProfile' || route.text === 'Create Event'))
      continue;
    if (user && route.text === 'Register') continue;

    const link = document.createElement('a');

    const linkClassName = route.text.toLowerCase().replace(/\s+/g, '-');
    link.classList.add('nav-link', linkClassName);
    link.textContent = route.text;
    link.href = '#';

    if (user && route.text === 'LogIn') {
      link.textContent = 'LogOut';
      link.addEventListener('click', logOut);
    } else if (user && route.text === 'MyProfile') {
      link.textContent = user.name;
    } else {
      link.textContent = route.text;
    }

    link.addEventListener('click', route.page);
    navBar.append(link);
  }
  header.append(logoTitle, navBar);
  home();
};
