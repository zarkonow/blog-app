
const mongoos = require("mongoose");
const Scheme = mongoos.Scheme;

const blogScheme = new Scheme({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Blog', blogScheme)
