import Home from './components/Home'
import Welcome from './components/Welcome'

const routes = [
  {
    path: '/',
    component: Welcome,
    exact: true,
    routes: [
      { path: 'homed', component: Home },
    ]
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes