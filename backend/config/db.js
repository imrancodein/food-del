import mongoose from "mongoose";

 export const connectTodb=async()=>{
    await mongoose.connect(process.env.MONOGDB_URI)
    .then(()=>{
        console.log('connect to DB');
        
    }).catch((err)=>{
        console.log(err);
        
    })

}

