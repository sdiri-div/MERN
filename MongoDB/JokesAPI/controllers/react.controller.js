const {React} = require('../models/react.model');

// module.exports.test = (req,res)=>{
//     res.json("success",)
// }




//Create a new
module.exports.CreateReact = (req,res)=>{
    React.create(req.body)
        .then(newReact=>{res.json({React: newReact})})
        .catch(err=>res.status(400).json({
            messge: "Somthing went wrong",err: err}))
}


// Get One
module.exports.findReact= (req, res)=>{
    React.findById(req.params.id)
      .then(react=>{res.json({React: react})})
      .catch(err=>res.status(400).json({
            messge: "Somthing went wrong",err: err}))
}


//Read All
module.exports.findAllReact= (req, res)=>{
    React.find() 
      .then(react=>{res.json({React: react})})
      .catch(err=>res.status(400).json({
            messge: "Somthing went wrong",err: err}))
}


//Update One
module.exports.updateOne =(req,res) =>{
    React.findOneAndUpdate({_id:req.params.react_id},req.body,{new:true})
        .then(result =>res.json(result))
        .catch(err =>res.status(400).json(err))
}

//Delete One 
module.exports.deleteOne = (req,res)=>{
    React.findByIdAndRemove(req.params.react_id)
      .then(result =>res.json(result))
      .catch(err =>res.status(400).json(err))
}
