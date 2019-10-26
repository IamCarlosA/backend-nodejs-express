const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI:
    'mongodb://localhost/databasetest'; //se crea la base de datos

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log("DB is Connected");
});