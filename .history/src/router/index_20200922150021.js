import App from './App';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Inbox },
  ]
}