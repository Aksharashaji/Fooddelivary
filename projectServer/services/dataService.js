// import modal Account

const db =require('./db')

// login function
const login=(umail,pswd)=>{
    console.log('inside login function definition');
    // check uname and pswd present inmongodb
    return db.Account.findOne({
        umail,
        pswd
    }).then((result)=>{
        if(result){
            // uname,pswd is in db
            console.log('login succesfull');
            return{
                status:true,
                message:'login succesfull',
                statusCode:200

            }
        }
        else{
            console.log('invalid emailid/pswd');
            return{
                status:false,
                message:'invalid emailid/pswd',
                statusCode:404

            }
        }
    })
}

// login function
const register=(uname,umail,pswd)=>{
    console.log('inside login function definition');
    // check uname and pswd present inmongodb
    return db.Account.findOne({
        umail
    }).then((result)=>{
        if(result){
            // umail is in db
            console.log('already registerd');
            return{
                status:false,
                message:'Account already exist... please log in',
                statusCode:404

            }
        }
        else{
            console.log('register succesfull');
            let newAccount=new db.Account({
                uname,
                umail,
                pswd
            })
            newAccount.save()
            return{
                status:true,
                message:'register succesfull',
                statusCode:200

            }
        }
    })
}

// getAllproduct function
const getAllproduct=()=>{
  return db.Product.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result:data
        }
    }
    else{
        return{
            statusCode:200,
            message:'failed to fetch data from db'
        }
    }
  })
}

// // viewAllproduct function
// const viewAllproduct=()=>{
//     return db.List.find()
//     .then((dataitem)=>{
//       if(dataitem){
//           return{
//               statusCode:200,
//               result:dataitem
//           }
//       }
//       else{
//           return{
//               statusCode:200,
//               message:'failed to fetch data from db'
//           }
//       }
//     })
//   }
  

  

module.exports={
    getAllproduct,login,
 register

}