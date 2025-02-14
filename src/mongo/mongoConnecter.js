import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/"
const dbName = "cd_backend"
export default  async function mongoConnect(){
    try {
        mongoose.connect(`${uri}${dbName}`)
        console.log("MongoDB connected!")
    } catch (error) {
        console.log(error)
        console.log("MongoDB connection failed!")
        
    }
    
}