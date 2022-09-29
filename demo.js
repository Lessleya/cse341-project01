const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://dbProject01:<password>@cluster0.iwzaptg.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e){
        console.error(e);
    }finally {
        await client.close();
    }

    }

    main().catch(console.error);

    


