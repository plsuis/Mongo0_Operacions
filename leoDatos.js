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

        const result = coll.find({})
        let datosUsers = []
      
      //for await...of
      for await(const documento of result){
 
        datosUsers.push(documento)        
      }
      console.log(datosUsers)
    }finally{
        await client.close()
    }
}
run()