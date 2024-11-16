import UserModel from "../model/userModel.js";

const homeController = async(req,res)=>{
    try {
        const data = await UserModel({
            name:"Ajay Kumar",
            email:"ajay@gmail.com",
            subject:"Developer",
            message:"Hi",
        })
        if(data){
            await data.save()
            console.log("User saved successfuly")
        }
        res.render('index')
    } catch (error) {
        console.log(error.message)  
    }
    
    res.render('index')
}



export {homeController} 