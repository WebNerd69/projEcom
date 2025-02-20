import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// create token
const createToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET);
};

// user login route
const userLogin = async (req, res) => {
     try {
          const { email, password } = req.body;
          const user = await userModel.findOne({ email })
          if (!user) {
               return (res.json({
                    success: false,
                    message: "User does not exist"
               }))

          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
               const token = createToken(user._id)
               res.json({
                    success: true,
                    token
               })
          } else {
               res.json({ success: false, message: "Incorrect credentials" })
          }
     } catch (error) {
          console.log(error);
          res.json({
               success: false,
               message: error.message
          }); 
     }
};

// user registration route
const userRegister = async (req, res) => {
     try {
          const { name, email, password } = req.body;

          // checking if email already exists
          const exists = await userModel.findOne({ email });
          if (exists) {
               return res.json({ message: "This email is already linked with another account.", success: false });
          }

          // validating email and password
          if (!validator.isEmail(email)) {
               return res.json({ message: "Please enter a valid email.", success: false });
          }
          if (password.length < 8) {
               return res.json({ message: "Please use a strong password.", success: false });
          }

          // hashing user
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          // creating user
          const newUser = new userModel({
               name,
               email,
               password: hashedPassword
          });
          const user = await newUser.save();
          const token = createToken(user._id);
          res.json({ success: true, token });
     } catch (error) {
          console.log(error);
          res.json({
               success: false,
               message: error.message
          });
     }
};

// admin login route
const adminLogin = async (req, res) => {
     try {
          const {email,password} = req.body;
          if(email=== process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
               const token = jwt.sign(email+password,process.env.JWT_SECRET)
               res.json({success:true,token})
          }else{
               res.json({success:false,message:"Invalid credentials."})
          }
     } catch (error) {
          console.log(error);
          res.json({
               success: false,
               message: error.message
          });
     }
};

export { userLogin, userRegister, adminLogin };