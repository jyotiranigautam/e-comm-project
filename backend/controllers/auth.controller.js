import User from '../models/users.model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export const Signin = async(req, res)=>{
    const{email, password} = req.body;
    console.log("req.body", req.body);
    const userExist = await User.findOne({email});
    try {
        if(!userExist){
            console.log('user not found');
            res.status(404).json({message:'user not found'});
        }else{
            const validPassword = bcrypt.compare(password, userExist.password);
            if(!validPassword){
                console.log('Invalid Password');
                res.status(401).json({message:'Invalid Password'});
            } 

            const token = jwt.sign(
                {id:userExist.id},
                process.env.JWT_SECRET,
                {expiresIn:'1d'}
            )
            
            Cookies.set('token', token);
            console.log("token", token) ; 
            res.status(200).json({message:"Sign in Succesfull", token:token, user: userExist});
        }
    } catch (error) {
        console.log("error", error) ; 
        res.status(404).json({message:error.message});
    }
}

export const Signup = async(req, res)=>{
    const{username, email, password} = req.body;
    console.log("req.body", req.body);

    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        console.log('user created successfully', user);

        const token = jwt.sign(
            {id:user.id},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )
        
        Cookies.set('token', token);
        res.status(200).json({token: token, message:'user created succesfully', user});
        
    } catch (error) {
        console.log('failed to create user', error);
        res.status(500).json({message:error.message});
    }


}