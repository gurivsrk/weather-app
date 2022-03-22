const { MongoClient, ObjectId } = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
       return console.log(error)
    }
   
    const db = client.db(databaseName)

    // challenge 1st
   db.collection('task').findOne({_id: new ObjectId("62381595919acde8d0a92700")},(error,result)=>{
       if(error){
           return console.log('Fail to find data with error=>'+error)
       }
       console.log(result)
   })
    
   // challenge 2nd
   db.collection('task').find({completed:false}).toArray((error,task)=>{
    if(error){
        return console.log('Fail to find data with error=>'+error)
    }
    console.log(task)
   })

   // pratice
   db.collection('task').find({completed:false}).count((error,count)=>{
    if(error){
        return console.log('Fail to find data with error=>'+error)
    }
    console.log(count)
   })
})