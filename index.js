const express=require('express');
const app=express();
const port=8000;
var path=require('path');

//for encoding of form data
app.use(express.urlencoded());

//for using statics files(CSS,JS,images..)
app.use(express.static('assets'));
app.use(express.static(__dirname + '/public'));
//setting up views
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var todoTasks=[
    {
        category:"HOME",
        description:"need to fix the shower",
        date:"APR,15,2000"
    },
    {
        category:"WORK",
        description:"lets make a todo app",
        date:"JUN,15,2000"
   },
   {
    category:"PERSONAL",
    description:"shave beard",
    date:"JUN,11,2000"
  }
]
var title="todo app";
function addTask(task)
{
    todoTasks.push(task);
}
app.get('/',function(req,res){
    return res.render('home',{
        tasks:todoTasks,
        title:title
    });
});
app.post('/add-task',function(req,res)
{

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