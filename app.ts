import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './src/routers'

const app=new Koa()

app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
      await next();
    }
  });

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000,()=>{
    console.log('listen 4000 ok')
})