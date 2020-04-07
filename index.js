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
        date:"APR,15,2000",
        id:"1"
    },
    {
        category:"WORK",
        description:"lets make a todo app",
        date:"JUN,15,2000",
        id:"2"
   },
   {
    category:"PERSONAL",
    description:"shave beard",
    date:"JUN,11,2000",
    id:"3"
  }
]
var title="todo app";
function addTask(task)
{   
    task.id="-1";
    todoTasks.push(task);
}
function deleteTask(id)
{   
    var newTasks=[];
    for(let t of todoTasks)
    {
        if(t.id==id)continue;
        newTasks.push(t);
    }
    todoTasks=newTasks;
}
app.get('/',function(req,res){
    return res.render('home',{
        tasks:todoTasks,
        title:title
    });
});
app.post('/add-task',function(req,res)
{
     console.log(req.body);
     addTask(req.body);
     return res.redirect('/');
});
app.post('/task-delete',function(req,res)
{
     console.log(req.body);
     console.log();
     if(req.body.taskId)
     {
        for(let id of req.body.taskId)
        {
            deleteTask(id);
        }
     }
    
     return res.redirect('/');
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