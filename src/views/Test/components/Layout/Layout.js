/*
 * @Description: 容器
 * @Date: 2020-09-28 11:14:59
 * @Author: xuzuntong
 * @LastEditors: xuzuntong
 * @LastEditTime: 2020-09-30 14:38:04
 */
import React, { Children } from 'react'

export default function Layout (props) {

  return (
    <div className="layout">
      { Children.toArray(props.children)[0] }
    </div>
  )
}
