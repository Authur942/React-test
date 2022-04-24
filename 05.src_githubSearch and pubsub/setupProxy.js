// 2.0版本http-proxy-middleware需要使用createProxyMiddleware()方法
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true, //控制服务器收到的请求头中host的值
      pathRewrite: { '/api1': '' } //重写请求路径
    })
  )
}