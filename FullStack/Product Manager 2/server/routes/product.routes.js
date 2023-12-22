const ProductController = require("../controllers/product.controller"); //We import the object exported from the controller


    //We are exporting a function that takes in a parameter of app (will get its value/argument passed, "express()", in server.js)

module.exports = (app) => {
    app.get("/api/products", ProductController.getAllProducts);
    //We use the express method to make a post request to "/api/products" route, which will run the function found at ProductController.createProduct
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getOneProduct); //This paramater (params) from the request will be written in from the route
    //NOTE: this param written here must match EXACTLY with what you named it in your controller (here, we used id).
    //This value will be passed in from the client.
};