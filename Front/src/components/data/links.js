import { createEvent } from '../../pages/createEvent/createEvent';
import { printEvents } from '../../pages/events/events';
import { home } from '../../pages/home/home';
import { loginRegister } from '../../pages/logIn-register/loginRegister';
import { showProfile } from '../../pages/profile/profile';

export const routes = [
  {
    text: 'Home',
    page: home
  },
  {
    text: 'Events',
    page: printEvents
  },
  {
    text: 'MyProfile',
    page: showProfile
  },
  {
    text: 'Create Event',
    page: createEvent
  },
  {
    text: 'LogIn / Register',
    page: loginRegister
  }
];
