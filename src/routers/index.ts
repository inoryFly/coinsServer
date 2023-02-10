import Router from 'koa-router'

const router:Router=new Router()

router.get('/',(ctx:any)=>{
    ctx.body='index'
})
router.post('/test',(ctx:any)=>{
    console.log(ctx.request.body)
    ctx.body=ctx.request.body
})

export default router