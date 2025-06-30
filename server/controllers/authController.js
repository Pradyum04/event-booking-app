const jwt=require('jsonwebtoken');

const mockUsers=[];

const registerUser=(req,res)=>{
    const {name, email, password}=req.body;

    const existingUser=mockUsers.find(user=>user.email===email);
    if(existingUser){
        return res.status(400).json({message:'User already exists'});
    }

    const newUser={
        id: Date.now(),
        name,
        email,
        password
    };

    mockUsers.push(newUser);

    res.status(201).json({message:'User registered successfully', user:newUser});
};

const loginUser=(req,res)=>{
    const{email, password}=req.body;

    const user=mockUsers.find(u=> u.email && u.password===password);
    if(!user)
    {
        returnres.status(401).json({message:'Invalid email or password'});
    }

    const token=jwt.sign({id:user.id, email:user}, 'secretKey', {expiresIn: '1h'});
    
    res.status(200).json({message:'Login successful', token});
};

module.exports={registerUser, loginUser};      