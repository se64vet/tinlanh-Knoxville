const post = require('../Models/Post');
const httpErrors = require('http-errors')

const createPosts = async (req, res) => {
    const {data} = req.body
    if(!data){
        throw new Error('content must be inside data object in req.body')
        res.status(httpErrors.NotAcceptable).send('no Data to update. Make sure you fill out all the fields')
    }else{
        const newPost = await post.create(data);
        res.status(200).redirect('/posts')
    }
    
}

const getAllPosts = async (req, res) => {
    const data =  await post.find();
    if (data.length == 0){
        throw new Error('Database is Empty')
        res.status(httpErrors.NotFound).send('no Data found on DB');
    }else {
        res.status(200).send(data)
    }
}

const getPost = (req, res) => {
    const {_id} = req.params
    try {
        const find = post.findById(_id);
        res.status(200).send(find)
    } catch (error) {
        console.log(error)
    }
}

const updatePost = (req, res) => {
    res.status(200).send('all post')
}

const deletePost = (req, res) => {
    const {_id} = req.params
    try {
        const find = post.findByIdAndDelete(_id);
        res.status(200).send('deleted post ')
    } catch (error) {
        console.log(error)
    }
}