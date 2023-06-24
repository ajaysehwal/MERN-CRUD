if(process.env.NODE_ENV!='production'){
    require('dotenv').config();

}
const notescontrollers=require('./controllers/nodecontrollers');

const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const connectdb=require('./db');

connectdb();
app.get('/',(req,res)=>{
   res.json({hello:"world"});
})

app.get('/notes',notescontrollers.fetchnotes);
app.get('/notes/:id',notescontrollers.fetchnote);
app.put('/notes/:id',notescontrollers.updatenode);
app.delete('/notes/:id',notescontrollers.deletenode);
app.post('/notes',notescontrollers.createnode);
app.listen(process.env.PORT);

