import React, { Component } from 'react'
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import About from './page/About'
import Home from './page/Home'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生的HTML中使用a标签跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* NavLink组件相比Link组件，会自动高亮被选中的组件，还新增了activeClassName属性 */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* </Switch>可以提高路由匹配的效率（单一匹配） */}
                {/* <Switch>
                  <Route path={'/about'} component={About} />
                  <Route path={'/home'} component={Home} />
                </Switch> */}
                <Switch>
                  {/* 当追加二级路由的时候会造成静态资源引入的路径问题 http://localhost:3000/hello/css/bootstrap.css */}
                  {/* 解决办法
                    1.在index文件夹中bootstrap的引入路径 <link rel="stylesheet" href="./css/bootstrap.css"> /css前的点去掉 href="/css/bootstrap.css"
                    2.href="./css/bootstrap.css" 把点替换成 %PUBLIC_URL% ， 但是只能在react脚手架中使用
                    3.使用hash路由模式 HashRouter
                  */}
                  {/* exact是严格匹配路由也叫精准匹配，过度滥用会导致严重问题,有时候会影响二级路由的使用 */}
                  <Route path={'/about'} component={About} />
                  <Route path={'/home'} component={Home} />
                  <Redirect to='/about'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
