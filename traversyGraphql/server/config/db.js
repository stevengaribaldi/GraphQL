const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   // these are just to get rid of some deprecation warnings
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
