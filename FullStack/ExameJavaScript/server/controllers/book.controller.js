

const Book  = require("../models/Book.model")



module.exports.test = (req, res) => {
    res.json("the server Says hello MERN Stack Ninjas")
}


module.exports.findAllBooks =(req,res) =>{
  Book.find()
    .then(AllBooks =>{
        console.log(AllBooks)
        res.json(AllBooks)
    })
    .catch(err =>{res.json({ message:"waite there is a problem"})})
}

module.exports.createNewBook = (req, res) => {

    Book.create(req.body)
        .then(CreateBook => {
            console.log(CreateBook)
            res.status(200).json({ CreateBook })
        })
        .catch(err => { res.status(400).json({ message: err }) })


}