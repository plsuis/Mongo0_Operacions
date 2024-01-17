require('dotenv').config()
const {MongoClient} = require("mongodb");
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const coleccion = process.env.COLECCION;
const client = new MongoClient(url);

async function run(){
    try{
        await client.connect();
        const db = client.db(database);
        const coll = db.collection(coleccion);

        const docs = [
            {nome: "Alexandre"}
        ];

        const result = await coll.insertMany(docs)
        console.log('o result ',result);
        console.log('Insertado Id: ',result.insertedIds)
    }finally{
        await client.close()
    }
}
run()