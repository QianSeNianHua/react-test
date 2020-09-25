/*
 * @Description: 登录页
 * @Date: 2020-09-25 10:20:16
 * @Author: xuzuntong
 * @LastEditors: xuzuntong
 * @LastEditTime: 2020-09-25 15:48:09
 */
import React from 'react'
import {Button, Card, Input} from 'antd'
import LoginStyle from './Login.module.scss'

export default function Login () {
  return (
    <div className={LoginStyle.login}>
      <Card hoverable bordered={false}>
        <div className={LoginStyle.area_login}>
            <Input placeholder="用户名" bordered={false} className="input_border_bottom" />
            <Input placeholder="密码" bordered={false} className="input_border_bottom" />
            <Button>登录</Button>
            <Button type="text">忘记密码</Button>
        </div>
      </Card>
    </div>
  )
}