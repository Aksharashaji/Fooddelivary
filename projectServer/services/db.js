const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/onlineFood',()=>{
    console.log('mongodb connected succesfully');
})




 const Product= mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    hotel:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})


const Account=mongoose.model('Account',{
    uname:String,
    umail:String,
    pswd:String
})

// const List= mongoose.model('List',{
//     id:Number,
//     title:String,
//     price:Number,
//     hotel:String,
//     category:String,
//     image:String,
//     rating:{
//         rate:Number,
//         count:Number
//     }
// })


    
    

module.exports={
    Product,Account
}