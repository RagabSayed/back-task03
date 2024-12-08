const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbname = 'rag-task-02';
mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        console.log('Error has occured');
    }
    console.log('All Perf');
    const db = res1.db(dbname);
    // ///// INSERT ONE ///////
    const addData = [{name: 'Ragab', age: 36}, {name: 'Sayed', age: 72}];
    addData.map(user => {
        db.collection('users').insertOne({
            name: user.name,
            age: user.age
        },(error, data) => {
            if (error) {
                console.log('Unable to connect to database');
            }
            console.log(data.insertedId);
        })
    })
    // ////////// INSERT MANY /////////////////
    db.collection('users').insertMany([
        {
            name: 'Sanaa',
            age: 60
        },
        {
            name: 'Mohamed',
            age: 27
        },
        {
            name: 'Ahmed',
            age: 10
        },
        {
            name: 'Mahmoued',
            age: 27
        },
        {
            name: 'Rahma',
            age: 13
        },
        {
            name: 'Hassan',
            age: 27
        },
        {
            name: 'Ibrahim',
            age: 32
        },
        {
            name: 'Mostafa',
            age: 27
        },
        {
            name: 'Odia',
            age: 3
        },
        {
            name: 'Subrain',
            age: 27
        }
    ], (error, data) => {
        if (error){
            console.log('Unable to insert data');
        }
        console.log(data.insertedCount);
    })
    // ///////////// FIND DATA MATCH 27Y ///////////
    db.collection('users').find({age: 27}).toArray((error, users) => {
        if (error){
            console.log('Unable to get data');
        }
        console.log(users);
    })
    // ///////////// FIND LIMIT DATA MATCH 27Y ///////////
    // db.collection('users').find({age: 27}).limit(3).toArray((error, users) => {
    //     if (error){
    //         console.log('Unable to get data');
    //     }
    //     console.log(users);
    // })
    // ///////// UPDATE NAME FOR THE FIRST 4 DOCUMENTS ///////////
    // const updateName = ['Ragab Sayed', 'Sayed Ismail', 'Sanaa Sayed', 'Mohamed Ragab'];
    // db.collection('users').find().limit(4).toArray((err, data) =>{
    //     if (err) {console.log('Unable to get data');}
    //     data.map((user, index) => {
    //         db.collection('users').updateOne({_id: user._id},{
    //             $set: {name: updateName[index]},
    //         }).then((data1) => {console.log(data1.modifiedCount);})
    //         .catch((err) => {console.log(err)})
    //     })
    // })
    // ///////////// UPDATE THE FIRST 4 DOCUMENTS THAT MATCH AGE = 27Y //////////////////
    // db.collection('users').find({age: 27}).limit(4).toArray((err, data) =>{
    //     if (err) {console.log('Unable to get data');}
    //     data.map(user => {
    //         db.collection('users').updateOne({_id: user._id},{
    //             $inc:{age: 4}
    //         }).then((data1) => {console.log(data1.modifiedCount);})
    //         .catch((err) => {console.log(err)})
    //     })
    // })
    // //////////// UPDATE ALL DOCUMENTS BY ADD ON AGE 10Y ////////////
    // db.collection('users').updateMany({},
    //     {$inc:{age: 10}}
    // ).then((data1) => {console.log(data1.modifiedCount);})
    // .catch((err) => {console.log(err)})
    // ///// DELETE ALL DOCUMENTS THAT MATCH AGE = 41Y //////
    // db.collection('users').deleteMany({age: 41})
    // .then((data1) => {console.log(data1.deletedCount);})
    // .catch((err) => {console.log(err)})
    

})