import mongoose from "mongoose";

function connects(){
    return mongoose.connect('mongodb+srv://pandeyavi200:eOjXYkz88DrKWEnn@cluster0.c96j2sg.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('db conected');
    }).catch((error:any)=>{
        console.log(error);
        
    })
}
export default connects;
//eOjXYkz88DrKWEnn pandeyavi200
