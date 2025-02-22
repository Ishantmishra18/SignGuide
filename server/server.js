const express = require('express')
const app =express()
const cors =require('cors')
const mongoose = require('mongoose')
const User = require('./Models/user')
const bcrypt = require('bcrypt')
const cookieParser=require('cookie-parser')
const jwt = require("jsonwebtoken")
// For generating random filenames

mongoose.connect('mongodb://localhost:27017/collegePro')

const jwtsec='lskjf24yi2o3u429034u90irjjss'

app.use(cors({
    credentials: true,//allow accpeting cookies
    origin:'http://localhost:5173'
}))
app.use(express.json())
app.use(cookieParser())

app.get('/profile', async (req, res) => {
    const { token } = req.cookies;
    
    if (token) {
        jwt.verify(token, jwtsec, async (err, decodedToken) => {
            if (err) {
                console.error('JWT verification error:', err);
                return res.status(403).json({ message: 'Invalid token' });
            }

            try {
                // Ensure `decodedToken` has an `id`
                if (!decodedToken || !decodedToken.id) {
                    return res.status(400).json({ message: 'Invalid token payload' });
                }

                const userData = await User.findById(decodedToken.id).populate('accommodation');
                
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }

                res.json(userData);
            } catch (error) {
                console.error('Error retrieving user data:', error);
                res.status(500).json({ message: 'Failed to retrieve user data' });
            }
        });
    } else {
        res.status(401).json({ message: 'Token not found' });
    }
});

app.post('/register' , (req, res)=>{
    const {username , password}=req.body
    console.log('helo')
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password , salt , async (err,hash)=>{
            let user= await User.create({
                username,
                password:hash,
            })
            res.status(201).json(user)
        })
    })
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            console.log("not found user");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            // Create a JWT token
            const token = jwt.sign(
                { id:user._id, username: user.username }, // Payload
                jwtsec, // Secret key
                { expiresIn: '1h' } // Expiration time
            );

            // Set the cookie with JWT token
            res.cookie('token', token, {
                httpOnly: true,  // Cookie can't be accessed by JavaScript
                secure: process.env.NODE_ENV === 'production',  // Set to true in production for HTTPS
               // 1 hour
            });

            // Send the response with user data (excluding password for security)
            return res.status(200).json({
                message: 'Login successful',
                user
            });
        } else {
            return res.status(401).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

app.get('/',(req , res)=>{
    res.send('the server is running')
})

app.listen(3000)