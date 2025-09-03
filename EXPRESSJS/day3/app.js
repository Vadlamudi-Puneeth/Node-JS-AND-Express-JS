const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_DB_URL,
).then(() => {
  console.log("--------- Database connected ---------");
}).catch((err) => {
  console.error("------- Database Connection error -------");
  console.error(err.message);
  console.error("------- Database Connection error -------");
});
