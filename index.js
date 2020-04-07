const express=require('express');
const app=express();
const port=8000;

app.get('/',function(req,res){
      return res.end('<h1>HOME</h1>');
});

app.listen(port,function(err)
{
      if(err)
      {
          console.log('error in port number',port);
          return ;
      }
      console.log('server is up! and running at port no-',port);
});