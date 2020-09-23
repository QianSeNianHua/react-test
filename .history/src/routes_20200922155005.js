import Home from './components/Home'
import Welcome from './components/Welcome'

const routes = [
  {
    path: '/',
    component: Welcome,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    routes: [
      { path: 'homed', component: Home },
    ]
  }
]

export default routes