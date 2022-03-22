// const mongodb =require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

// Use destructing 
const { MongoClient, ObjectId } = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
       return console.log(error)
    }
   
    const db = client.db(databaseName)

    db.collection('user').insertOne({
        _id:id,
        name: 'Vikram',
        age:'26'
    }, (error,result)=>{
        if(error){
            return console.log('Fail to insert data with error=>'+error);
        }
        console.log(result)
    })

     console.log('connected successfully')

    db.collection('task').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },
        {
            description: 'Renew inspections',
            completed: false
        },
        {
            description: 'pot plants',
            completed: false
        }
    ],(error,result)=>{
        if(error){
            return console.log('Fail to insert data with error=>'+error);
        }
        console.log(result.insertedIds)
    })
    
})