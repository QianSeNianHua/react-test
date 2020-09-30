/*
 * @Description: 测试页面
 * @Date: 2020-09-28 11:14:59
 * @Author: xuzuntong
 * @LastEditors: xuzuntong
 * @LastEditTime: 2020-09-30 15:45:35
 */
import React, { useEffect, useState } from 'react'
import Child from './components/Child/Child'
import Layout from './components/Layout/Layout'

export default function Test (props) {
  const [text, setText] = useState('赋初始值')

  useEffect(() => {
    console.log('>>>>>mounted parent')

    return () => {
      console.log('>>>>>destroy parent')
    }
  }, [])

  return (
    <div>
      <h3>第一种：非嵌套组件通信</h3>
      <Layout>
        <Child text={text} setText={val => setText(val)}></Child>
      </Layout>
      <h3>第二种：多级嵌套组件通信</h3>
    </div>
  )
}
