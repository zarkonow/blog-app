const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogList) {
    return res.status(404).json({ message: "Not Found" });
  }

  return res.status(200).json({ blogList });
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreateBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await new newlyCreateBlog.save();
  } catch (error) {
    console.log(error);
  }

  try {
    const sesion = await mongoose.startSession;
    sesion.startTransactions();
    await newlyCreateBlog.save(sesion);
    sesion.commitTransactions();
  } catch (error) {
    return res.status(500).json({ message: "Error saving" });
  }

  return res.status(200).json({ newlyCreateBlog });
};

const deleteBlog = async (req, res) => {
  const id = re.params.id;

  try {
    const findCurrentBlog = await Blog.findyIdAndDelete();
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error deleting blog" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate({
      id,
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    return res
      .send(500)
      .json({ message: "Something went wrong while updating..." });
  }

  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "Unable to update blog" });
  }

  return res.status(200).json(currentBlogToUpdate);
};
