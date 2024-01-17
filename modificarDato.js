require('dotenv').config()
const {MongoClient,ObjectId} = require("mongodb");
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const coleccion = process.env.COLECCION;
const client = new MongoClient(url);

async function run(){
    try{
        await client.connect();
        const db = client.db(database);
        const coll = db.collection(coleccion);

        let id = '65a7ffb6cb4ef1ec01d08371';
        let novoNome = 'outroNome'
        const filtro ={
            _id:new ObjectId(id)
        }
        const dato = [{            
            $set: {
                name:novoNome
            }
        }] 
       
        const result = await coll.updateMany(filtro,dato);
    }finally{
        await client.close()
    }
}
run()


