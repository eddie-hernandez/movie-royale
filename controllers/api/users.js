const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

function checkToken(req, res) {
  console.log(req.user)
  res.json(req.exp)
}

async function create(req, res) {
  try {
    // Add the user to the db
    const emailExist = User.findOne({ email: req.body.email })
    if(emailExist){
      res.sendStatus(409).json()
      return
    }
    const user = await User.create(req.body)
    // token will be a string
    const token = createJWT(user)
    // Yes, we can serialize a string
    res.json(token)
  } catch (err) {
    // Probably a dup email
    res.status(400).json(err)
  }
}

async function login(req, res) {
  try {
    // Find the user by their email address
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error()
    // Check if the password matches
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error()
    res.json(createJWT(user))
  } catch {
    res.status(400).json('Bad Credentials')
  }
}

async function createAnonymousUser(req, res, next){
  try{
    const user = await User.create({})
    const token = createJWT(user)
    console.log(user)
    res.json(token)
  }catch{
    next()
  }
}

module.exports = {
  create,
  login,
  checkToken,
  createAnonymousUser,
}
