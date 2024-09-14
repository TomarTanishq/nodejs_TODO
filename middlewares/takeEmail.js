export const takeEmail=(req,res,next)=>{
    // console.log("CALLING EMAIL");
    const {email}=req.body
    console.log(email);
    if(email) return res.json({
        success:"true",
        email
    })
    next()
}