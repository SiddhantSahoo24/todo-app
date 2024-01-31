const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/',(req, res) => {
    res.send('hello server');
});

app.post('/todo-post',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.statusCode(411).JSON({msg:"Wrong inputs"})
        
        return;
    }
    await todo.create({
        title:createdPayload.title,
        description:createPayload.description
    })

    res.json({
        msg:"todo is created"
    })
});



app.put('/todo-put',(req,res=>{
    const payLoad2 = req.body;
    const parsedpayLoad2 = updateTodo.safeParse(payLoad2)
    if(!parsedpayLoad2.success){
        res.statusCode(411).JSON({message:"Wrong inputs"})
    }
    return;



}));

app.listen(port,()=>{
    console.log(`app is listening  at ${port}`);

   })