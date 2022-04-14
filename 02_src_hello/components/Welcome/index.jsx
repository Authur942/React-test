import React, { Component } from 'react'
import WelcomeCss from './index.module.css'

export default class Welcome extends Component {
  render () {
    return (
      <div className={WelcomeCss.title}>Welcome</div>
    )
  }
}
