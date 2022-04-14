import React, { Component } from 'react'
import HelloCss from './index.module.css'

export default class Hello extends Component {
  render () {
    return (
      <div className={HelloCss.title}>Hello</div>
    )
  }
}
