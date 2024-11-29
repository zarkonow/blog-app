const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://zarkonov:JObPonHc4ETylxUA@cluster0.tjal3.mongodb.net/"
  )

  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
