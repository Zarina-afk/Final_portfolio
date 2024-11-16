import mongoose from 'mongoose';

const connectDB =async(DATABASEURL)=>{
    const DB_OPTIONS={
        dbName: 'portfolio',
    }
    const data = await mongoose.connect(DATABASEURL, DB_OPTIONS)
      if (data){
        console.log("Database connection succesful..")
      }
}

export default connectDB