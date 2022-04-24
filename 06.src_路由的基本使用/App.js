import React, { Component } from 'react'
import { Link, Route, NavLink, Switch } from 'react-router-dom'
import Header from './components/Header'
import About from './page/About'
import Home from './page/Home'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render () {
    const routeArray = [
      {
        name: 'Home'
      },
      {
        name: 'About'
      }
    ]
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
              {
                routeArray.map(routeItem => {
                  return (
                    <MyNavLink to={`/hello/${routeItem.name}`} children={routeItem.name} key={routeItem.name}></MyNavLink>
                  )
                })
              }
              {/* <MyNavLink to='/home' children='Home'></MyNavLink> */}
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
                  <Route path={'hello/about'} component={About} />
                  <Route path={'hello/home'} component={Home} />
                </Switch>
                {/* <h3>我是About的内容</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
