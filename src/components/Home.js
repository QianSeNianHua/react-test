import React from 'react'
import { Button, Input } from 'antd'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <Button type="primary">Button</Button>
        <Input size="large" placeholder="输入搜索词" />
      </>
    )
  }
}
