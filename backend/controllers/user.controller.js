import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const signup = async (req ,res) =>{
    try {
        const {fullName, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({fullName, email, password : hashedPassword});
        await newUser.save();
        res.status(200).json({message: "User created successfully", user:{
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email
        }});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user:{
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}