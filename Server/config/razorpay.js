if (process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET) {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  module.exports = instance;
} else {
  console.log("⚠️  Razorpay is not configured, skipping...");
  module.exports = null;
}






{/*const Razorpay = require ('razorpay')

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
})*/}


// yaha abhi upar wala code hatana hai or resurpay add karna hai 

// jab rezorpay connect karo tho phale wala code hatana or  
//comment wala code lagana