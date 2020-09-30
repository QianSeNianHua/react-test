import React from 'react'
import Loadable from 'react-loadable'

// 通用的懒加载
const LoadingComponent = () => {
  return (
    <div>
      loading...
    </div>
  )
}
const LazyLoad = (loader, loading = LoadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}

// 路由配置
const routes = [
  {
    path: '/',
    component: LazyLoad(() => import('@/components/Welcome')),
    exact: true
  },
  {
    path: '/login',
    component: LazyLoad(() => import('@view/Login/Login')),
  },
  {
    path: '/test',
    component: LazyLoad(() => import('@view/Test/Test'))
  }
]

export default routes