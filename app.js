const Koa = require('koa');
const app = new Koa();
const port = 8080;
app.use(async ctx => {
  ctx.body = 'Hello OCP-10';
});

app.listen(port, function() { 
    console.log('Node.js server started on port: ' + port);
});