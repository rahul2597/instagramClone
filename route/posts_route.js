import express from "express";
import { upload } from "../utils/multer_storage.js";
import postSchema from "../models/postSchema.js";

const posts_route = express.Router();

// find all the posts
posts_route.get("/all", async (req, res) => {
  try {
    const posts = await postSchema.find({});
    res.status(200).json({ posts: posts });
  } catch (err) {
    console.log("Error while getting all the posts from database : ", err);
  }
});

// create one post
posts_route.post("/create-post", upload.single("image"), async (req, res) => {
  console.log("body : ", req.body, "file : ", req.file);
  try {
    const post = await postSchema.create({
      title: req.body.title,
      desc: req.body.desc,
      image: req.file.filename,
    });
    if (post)
      return res.status(200).json({
        msg: "Post successfully added",
      });
  } catch (err) {
    console.log("Error while creating the post in database : ", err);
  }
});

// update a post
posts_route.patch(
  "/update-post/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      await postSchema.updateMany(
        { _id: req.params.id },
        { title: req.body.title, desc: req.body.desc, image: req.file.filename }
      );
      return res.status(200).json({ msg: "Successfully updated the post" });
    } catch (err) {
      return res.status(500).json({ msg: `Error while updating ${err}` });
    }
  }
);

// populate all the data in the form before updating.
posts_route.get("/get-data/:id", async (req, res) => {
  try {
    const post = await postSchema.find({ _id: req.params.id });
    return res.status(200).json({ data: post });
  } catch (err) {
    return res.status(500).json({
      msg: `Error while getting the data for populating the form : ${err}`,
    });
  }
});

//delete a particular post from the database.
posts_route.delete("/delete-post/:id", async (req, res) => {
  try {
    await postSchema.deleteOne({ _id: req.params.id });
    return res.status(200).json({ msg: "Succesfully deleted the data." });
  } catch (err) {
    return res.status(500).json({ msg: `Error while deleting ${err}` });
  }
});

export default posts_route;
