// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b8be45677bc382ba4cba993')
    // },  {
    //     $set: {
    //         completed: true
    //     }
    // },  {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b8be5757a39cd279056096b')
    },  {
        $set: {
            name: 'Viktorija'
        },
        $inc: {
            age: 1,
        }
    },  {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});