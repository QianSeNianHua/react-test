import { useForm } from 'antd/lib/form/Form'
/*
 * @Description: 子页面
 * @Date: 2020-09-30 09:59:20
 * @Author: xuzuntong
 * @LastEditors: xuzuntong
 * @LastEditTime: 2020-09-30 15:47:12
 */
import React, { Fragment, useEffect, useState } from 'react'

export default function Child (props) {
  const [text, setText] = useState('这是一段长文本')
  const [word, setWord] = useState('')

  useEffect(() => {
    console.log('>>>>>mounted child')

    return () => {
      console.log('>>>>>destroy child')
    }
  }, [])

  useEffect(() => {
    console.log('>>>>>update')
  })

  useEffect(() => {
    setText(val => props.text)
  }, [props.text])

  return (
    <Fragment>
      <p>子节点</p>
      <div>state: { text }</div>
      <div>props: { props.text }</div>
      <div>word: { word }</div>
      word: <input onChange={e => { setWord(e.target.value) }}></input>
      <button onClick={e => setText(word)}>word to state</button>
      <button onClick={e => props.setText(word)}>change porps</button>
    </Fragment>
  )
}

/**
 * <Child
 *   text={}
 *   onChange={e => {}}
 * />
 */

/**
 * store：订阅发布
 * 
 * state: {'change': []} // 手动加上，为了维护时方便知道有哪些订阅发布事件
 * mutation: {
 *   on: (type, fun) => {
 *     if (!state[type]) console.error('没有' + type + '，请创建')
 *     state[type].push(fun)
 *   }
 *   emit: (type, msg) => {
 *     state[type].forEach(fun => fun(msg))
 *   }
 * }
 * 
 * // 使用
 * this.$store.mutation.on('change', val => { }) // 写在create
 * this.$store.mutation.emit('change', 'msg') // 写在mounted
 */
