const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require("mongodb").MongoClient;

let database

module.exports.initDb = (callback) => {
    const url = process.env.MONGODB_URI;

    if (database) {
        console.log("Database initialized");
        return callback(null, database);
    }

    MongoClient.connect(url)
        .then((client) => {
            database = client.db("contacts");
            callback(null, database);
        })
        .catch((err) => {
            console.log(err);
            callback(err, null);
        });
};

module.exports.getDatabase = () => {
    if (!database) {
        throw Error(
            "Database Error: Database not initialized"
        );
    }
    return database;
};