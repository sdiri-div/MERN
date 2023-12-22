const Product = require("../models/product.model.js"); //Import the model from the model file


//With this syntax, we are exporting an object that consists of key:value pairs
    //the values consist of the logic used to query the DB
module.exports = {
    getAllProducts: (req, res) => {
        Product.find({}) //remember, these methods (find, findOne, create, etc) are all specific mongoose methods you can see a complete list in their docs
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id }) //We have to specify which field we want to search for our individual product (called a document in mongodb) by
            // _id is a field that is automatically added when we create a new document
            // We then say that the value will come from the request's parameters (params) and we name this parameter "id"
            // NOTE: We can call the parameter (id) whatever we want. However, it MUST match how we refer to it in our route.
                //Do not confuse the DB field of "_id" with the popular naming convention of "id"
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {
        //We name the key and the value is going to be the function that queries DB.
        Product.create(req.body) //We use the Product model to create a new product document. We take in the body of the request sent from the client.
            .then((newProduct) => res.json(newProduct)) //That returns a promise whose resolution we handle with then, 
            //and run .json() on our response so that we can read the JSON object returned from our promise.
            .catch((err) => console.log(err));
    },
};