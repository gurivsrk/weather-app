const {user,task} =require('./db/mongoose.js')

const me = new user({
    name: 'jason',
    email: 'jason@domain.com',
    age: 30
})

me.save().then(()=>{
    console.log('success: '+me)
}).catch((error)=>{
    console.log('error: '+error)
})

// const task = new tasks({
//     description: 'Learn the Mongoose Library',
//     completed: false
// })

// task.save().then(()=>{
//     console.log('success: '+task)
// }).catch((error)=>{
//     console.log('error: '+error)
// })