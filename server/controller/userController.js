const asyncHandler = require("express-async-handler");
const UserModel = require("../models/Users");


//GET method
//Public
// Get all users

const getUser = asyncHandler ( async(req,res) => {
    try{
       
        const users = await UserModel.find({});
        res.json(users);
    }
    catch(err)
    {
        res.json(err);
    }

});



// Create new user
//POST method
const createUser = asyncHandler ( async(req,res) => {
   
   //take param from the request body
   console.log("The request body is :", req.body);
   const {name , age, username } = req.body;

   if(!name || !age || !username)
   {
        res.status(400);
        throw new Error("All fields are mandatory");
   }
   //post it using queries from mongoose
   const user = await UserModel.create({
        name,
        age,
        username
   });
   res.status(201).json(user);

});


//Update user
//PUT method
const updateUser = asyncHandler ( async(req,res) => {

    //find the id like the item from the parameter

    const oneUser = await UserModel.findById(req.params.id);
    if(!oneUser)
    {
        res.status(404);
        throw new Error(" User not found");
    }

    

    const updatedUser = await UserModel.findByIdAndUpdate(

        req.params.id,
        req.body,
        {new : true}
        

    );

   res.json(updatedUser)
   
  
 });

 const deleteUser = asyncHandler ( async(req,res) => {

    //find the id like the item from the parameter

    const oneUser = await UserModel.findById(req.params.id);
    if(!oneUser)
    {
        res.status(404);
        throw new Error(" User not found");
    }

    
    await UserModel.deleteOne();

   res.status(200).json(oneUser);
   
  
 });


 



module.exports = { getUser, updateUser, createUser, deleteUser};