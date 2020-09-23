import React, { useState, useEffect } from 'react'

export default function Hook() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('useEffect')
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
    </div>
  )
}