// import express
const express=require('express')

const cors=require('cors')

const dataService=require('./services/dataService')

// create a server app using express
const app=express()


// to parse json data
app.use(express.json())


app.use(cors({
    origin:'http://localhost:4200'
}))

// set up port for server app
app.listen(3001,()=>{
    console.log('server started at 3001');
})


// 1.login api
  app.post('/login',(req,res)=>{
    console.log('inside login function');
    console.log(req.body);
    // asynchronous

   dataService.login(req.body.umail,req.body.pswd)
   .then((result)=>{
    res.status(result.statusCode).json(result)
   })
  })

  // 1.register api
  app.post('/register',(req,res)=>{
    console.log('inside register function');
    console.log(req.body);
    // asynchronous

   dataService.register(req.body.uname,req.body.umail,req.body.pswd)
   .then((result)=>{
    res.status(result.statusCode).json(result)
   })
  })




// getallproduct API
app.get('/all-products',(req,res)=>{
console.log('inside getAllproducts function');
dataService.getAllproduct()
.then((result)=>{
    res.status(result.statusCode).json(result)
})
})

// viewallproduct API
// app.get('/view-products',(req,res)=>{
//     console.log('inside viewAllproducts function');
//     dataService.viewAllproduct()
//     .then((result)=>{
//         res.status(result.statusCode).json(result)
//     })
//     })

    


