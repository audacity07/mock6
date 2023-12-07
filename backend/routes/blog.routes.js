const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { BlogModel } = require("../models/blog.model");

const blogRouter = express.Router();

// create new blog
blogRouter.post("/", auth, async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    const blogs = await BlogModel.find();
    res.status(200).json({ status: "success", message: "Blog Created", blogs });
  } catch (error) {
    console.log(`blog part:`, error);
    res.status(400).json({ status: "fail", message: error });
  }
});

// get all the blogs
// also get blogs by category
// sort blogs based on date
// get blog by title
blogRouter.get("/", auth, async (req, res) => {
  let { category, title, sort, order } = req.query;
  // console.log(req.query);
  try {
    if (category) {
      const blogs = await BlogModel.find({ category });
      res.status(200).json({ status: "success", blogs });
    } else if (title) {
      const blogs = await BlogModel.findOne({ title });
      res.status(200).json({ status: "success", blogs });
    } else if (sort) {
      let blogs = null;
      if (order === "asc") {
        blogs = await BlogModel.find().sort({ date: 1 });
      } else if (order === "desc") {
        blogs = await BlogModel.find().sort({ date: -1 });
      }
      res.status(200).json({ status: "success", blogs });
    } else {
      const blogs = await BlogModel.find();
      res.status(200).json({ status: "success", blogs });
    }
  } catch (error) {
    console.log(`blog part:`, error);
    res.status(400).json({ status: "fail", message: error });
  }
});

// edit a blog
blogRouter.patch("/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.findByIdAndUpdate({ _id: id }, req.body);
    const blogs = await BlogModel.find();
    res.status(200).json({ status: "success", blogs });
  } catch (error) {
    console.log(`blog part:`, error);
    res.status(400).json({ status: "fail", message: error });
  }
});

// delete a blog
blogRouter.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.findByIdAndDelete({ _id: id }, req.body);
    const blogs = await BlogModel.find();
    res.status(200).json({ status: "success", blogs });
  } catch (error) {
    console.log(`blog part:`, error);
    res.status(400).json({ status: "fail", message: error });
  }
});

module.exports = { blogRouter };
