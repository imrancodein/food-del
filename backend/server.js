import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectTodb } from './config/db.js';
import foodRouter from './routes/food.routes.js';
import userRouter from './routes/user.routes.js';
import cartRouters from './routes/cartRoutes.js';



const app=express();
const port=4000;


app.use(express.json())
app.use(cors())

connectTodb()
// api end point

app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouters)



app.get('/',(req,res)=>{
    res.send('API Working ...')
})

app.listen(port,()=>{
    console.log(`server is runnin at port ${port}` );
    
})
