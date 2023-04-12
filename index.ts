import express,{ Express,Request,Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app:Express = express();
const port:number | string = process.env.PORT || 8000;

// app.get('/',(req:Request,res:Response) => {
//     res.send('APP Express + TS');
// })

app.get('/',(req:Request,res:Response) => {

    res.status(200).json({data: {
        message:"Goodbye, world"
    }});

})

app.get('/hello',(req:Request,res:Response) => {
    let nombre = req.query.name;
    if(nombre == null){
        nombre = "anónimo"
    }    
    res.status(200).json({data: {
        message:"Hola, "+ nombre
    }});


})

app.listen(port,() => {
    console.log(`Express running: http://localhost:${port}`);
})