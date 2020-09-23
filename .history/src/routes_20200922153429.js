import Home from './components/Home';
import Welcome from './components/Welcome'
import Home from './components/Home'

const routes = [
  {
    path: '/',
    component: Welcome,
    // childRoutes: [
      // { path: 'about', component: About },
      // { path: 'inbox', component: Inbox },
    // ]
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes