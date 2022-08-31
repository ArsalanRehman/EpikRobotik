const userModel = require('./../models/userModels');


//get already existed user
exports.getUsers = async (req, res) => {
  try {
    const newUser = await userModel.User.find()

    res.status(201).json({
      status: success,
      data: {
        User: newUser,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

//create user
exports.postUser = async (req, res) => {
  try {
    const newUser = await userModel.User.create(req.body)
    res.status(201).json({
      status: success,
      data: {
        User: newUser,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

//find user by id
exports.getUser = async (req, res) => {
  try {
    const newUser = await userModel.findById(req.params.id)
    res.status(201).json({
      status: 'success',
      data: {
        User: newUser,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
//update user
exports.updateUser = async (req, res) => {
  try {
    const newUser = await userModel.User.findByIdAndUpdate(req.params.id,req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(201).json({
      status: 'success',
      data: {
        User: newUser,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
exports.deleteUser = async (req,res) =>{
  res.send('delete User here');
}