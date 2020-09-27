/*
 * @Description: 容器
 * @Date: 2020-09-27 20:00:55
 * @Author: xuzuntong
 * @LastEditors: xuzuntong
 * @LastEditTime: 2020-09-27 20:22:50
 */
import React, { Component, Children, createRef } from 'react'
import LayoutCardStyle from './LayoutCard.module.scss'
import anime from 'animejs'

export default class LayoutCard extends Component {
  constructor () {
    super()
    this.elLayout = createRef()
  }

  render () {
    return (
      <div className={LayoutCardStyle.main} ref={this.elLayout}>
        <div className={LayoutCardStyle.area_left}>
          { Children.toArray(this.props.children)[0] }
        </div>
        <div className={LayoutCardStyle.area_right}>
          { Children.toArray(this.props.children)[1] }
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.childEvent(this)
    this.animation = anime({
      targets: this.elLayout.current,
      translateX: 600,
      autoplay: false
    })
  }

  // 播放
  play () {
    this.animation.play()
  }
}
