export const register =async(req,res)=>{
    try{
        const{fullname,email,phoneNumber,password,role}=req.body;
        if(!fullnname || !email || !password || !phoneNumber || !role){
            return res.status(400).json({
                message:'Something is Missing',
                success:false
            });
        };
        const user=await UserActivation.findOne({email});
        if(user){
            return res.status(400).json({
                message: 'User already exist with this email.',
                success:false,
            })
        }
        const hashPassword =await bcrypt.hash(password,10);
        await user.create({
            fullname,
            email,
            phoneNumber,
            password:hashPassword,
            role,

        })
    }catch(error){
        
    }
}