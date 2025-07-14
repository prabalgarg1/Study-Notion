const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected successfully");

      // check the readyState
      console.log("Mongoose connection state: ", mongoose.connection.readyState);

      // readyState meaning:
      // 0 = disconnected
      // 1 = connected
      // 2 = connecting
      // 3 = disconnecting
      if (mongoose.connection.readyState === 1) {
        console.log("✅ Mongoose is confirmed CONNECTED");
      } else {
        console.log("⚠️  Mongoose is NOT connected, state code:", mongoose.connection.readyState);
      }
    })
    .catch((error) => {
      console.log("DB connection error:", error);
      process.exit(1);
    });
};


{/*const mongoose = require('mongoose')
require('dotenv').config()

exports.connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology:true,
        useNewUrlParser: true
    })
    .then(()=>{
        console.log("DB connection successfull!")
    })
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
}*/}
{/* crypto-random-string:nhi hai
node-schedule bhi nhi hai
bcryptjs nhi hai 
postman sikhna hai */}
//yhe camment pakage .json ka hai waha comment nhi chalta
//abhi  cloudary pr chalana hai yhe local storage pr chal raha hai