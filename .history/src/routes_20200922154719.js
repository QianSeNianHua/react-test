import Home from './components/Home'
import Welcome from './components/Welcome'

const routes = [
  {
    path: '/',
    component: Welcome,
    // childRoutes: [
      // { path: 'inbox', component: Inbox },
    // ]
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes