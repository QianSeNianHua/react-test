/*
 * @Description: 登录页
 * @Date: 2020-09-25 10:20:16
 * @Author: xuzuntong
 * @LastEditors: xuzuntong
 * @LastEditTime: 2020-09-27 20:18:56
 */
import React, { Children } from 'react'
import {Card} from 'antd'
import LoginCard from './components/LoginCard/LoginCard'
import SignUpCard from './components/SignUpCard/SignUpCard'
import LayoutCard from './components/LayoutCard/LayoutCard'
import LoginStyle from './Login.module.scss'

export default class Login extends React.Component {
  constructor () {
    super()
    this.elLogin = React.createRef()
  }

  render () {
    return (
      <div className={LoginStyle.login}>
        <Card hoverable bordered={false}>
          <div className={LoginStyle.area_login}>
            <LayoutCard>
              {<span>博客</span>}
              {<LoginCard></LoginCard>}
            </LayoutCard>
          </div>
        </Card>
      </div>
    )
  }
}
