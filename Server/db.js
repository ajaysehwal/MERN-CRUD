 
 if(process.env.NODE_ENV!='production'){
    require('dotenv').config();

}
 const mongoose=require('mongoose');
 async function database(){
    try{
     await mongoose.connect(process.env.DB_URL);
       console.log('connect');
    }catch(err){
        console.log(err);
    }

}

module.exports=database;