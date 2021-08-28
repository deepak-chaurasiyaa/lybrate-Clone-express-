const mongoose = require("mongoose");
// const connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/web10mongoose", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });
// };
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ughcqqtp:G.9F2@QtzzQqHGv@cluster0.ketra.mongodb.net/Lybrate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
