
const {Store }= require ("../models/book.model")



//? READ ALL

module.exports.findAllStore = (req, res) => {

    Store.find()
        .then(AllStore => {
            console.log(AllStore)
            res.json(AllStore)
        })
        .catch(err => { res.json({ message: "wait there is a problem🫤🫤 " }) })

}
//? CREATE
module.exports.createNewStore = (req, res) => {

    Store.create(req.body)
        .then(CreateStore => {
            console.log(CreateStore)
            res.status(200).json({ CreateStore})
        })
        .catch(err => { res.status(400).json({ message: "wait there is a problem🫤🫤 ", err }) })


}
//? findOne

module.exports.getOneStore = (req, res) => {

    Store.findOne({ _id: req.params.b_id })
        .then(OneStore => {
            console.log(OneStore )
            res.json({ OneStore })
        })
        .catch(err => { res.status(400).json({ message: "wait there is a problem🫤🫤 ", error: err }) })

}

//? UPDATE
module.exports.UpdateStore = (req, res) => {
   Store.findOneAndUpdate(
        { _id: req.params.b_id },
        req.body,
        { new: true, runValidators: true }

    )
        .then(UpdatedStore => {
            console.log(UpdatedStore)
            res.json({ UpdatedStore})
        })
        .catch(err => { res.status(400).json({ message: "wait there is a problem🫤🫤 ", error: err }) })

}

//? DELETE
module.exports.DeleteOneStore = (req, res) => {
    Store.deleteStore({ _id: req.params.b_id })
        .then(deleteStore => {
            console.log(deleteStore )
            res.json({ deleteStore })
        })
        .catch(err => { res.status(400).json({ message: "wait there is a problem🫤🫤 ", error: err }) })

}








