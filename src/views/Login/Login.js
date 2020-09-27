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
import Bus from '@/libs/EventEmitter'

export default class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      isLogin: true
    }
    this.elLogin = React.createRef()
    
    Bus.on('Login:toSignUp', msg => {
      this.triggerEvent()
    })
  }

  render () {
    return (
      <div className={LoginStyle.login}>
        <Card hoverable bordered={false}>
          <div className={LoginStyle.area_login}>
            {

            }
            <LayoutCard childEvent={this.childEvent}>
              {<span>博客</span>}
              {<LoginCard></LoginCard>}
            </LayoutCard>
            <LayoutCard childEvent={this.childEvent}>
              {<span>博客</span>}
              {<SignUpCard></SignUpCard>}
            </LayoutCard>
          </div>
        </Card>
      </div>
    )
  }

  childEvent = val => {
    this.$child = val
  }

  triggerEvent () {
    this.$child.play()
  }
}
