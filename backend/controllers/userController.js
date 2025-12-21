import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import validator from 'validator';
import jwt from 'jsonwebtoken';

//craete token
const generateToken = (user) => {
    return jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: "7d" });
}

//register user
const registerUser = async (req, res) => {

    try {
        const { name, email, mobile, password, rePassword } = req.body;

        // check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.json({ message: "Email already registered" });
        }

        //valid email
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Enter valid email!"})
        }

        //password matched?
        if(password !== rePassword){
            return res.json({success: false, message: "Re-enter above password!"})
        }

        //password strong
        if(!password || password.length < 8){
            return res.json({success: false, message: "password is not strong!"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // create user
        const newUser = new User({
        name,
        email,
        mobile,
        password: hashPassword
        });

        const user = await newUser.save();
        res.json({success: true, message: "Registration successful"});

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

}

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        //check user
        const user = await User.findOne({ email });
        if(!user){
            return res.json({success: false, message: "User not found!"})
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success: false, message: "Invalid credentials!"})
        }
        
        //create token
        const token = generateToken(user);
        return res.json({success: true, token, user: {id: user._id, name: user.name, email: user.email, role: user.role}})

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

//apply technician
const applyTechnician = async (req, res) => {
    try {
        const user = req.user;

        // already applied
        if (user.technicianProfile?.status === "pending") {
        return res.status(400).json({ message: "Application already pending" });
        }

        if (user.role === "technician") {
        return res.status(400).json({ message: "Already a technician" });
        }

        const {
        nicFront,
        nicBack,
        address,
        workingLocation,
        categories,
        workingDays,
        workingHours,
        bestTimeToCall
        } = req.body;

        // Save data
        user.technicianProfile = {
        nicFront,
        nicBack,
        address,
        workingLocation,
        categories,
        workingDays,
        workingHours,
        bestTimeToCall,
        status: "pending",
        appliedAt: new Date()
        };

        await user.save();

        res.status(200).json({success: true, message: "Technician application submitted. Waiting for approval."});

  } catch (error) {
        res.status(500).json({ message: error.message });
  }
}




export { registerUser, loginUser, applyTechnician };