
const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

//GET POST

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

//ADD POST

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    const text = req.body
    await posts.insertOne({
        text: text.text,
        createdAt: new Date()
    });

    res.status(201).send()
})

//DELETE POST

router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne ({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://arnel_men011:Pdnejoh011@cluster0-kec4k.mongodb.net/test?retryWrites=true',{ 
        useNewUrlParser: true
    })

    return client.db('Cluster0').collection('posts');
}

module.exports = router;